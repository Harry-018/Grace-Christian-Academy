import db from "../config/database.js";

export const getGradeLevel = async () => {
  return db
    .selectFrom("fees")
    .select(["grade_id", "grade_level"])
    .orderBy("grade_id", "asc")
    .execute();
};

export const getTuition = async (id) => {
  return await db
    .selectFrom("fees")
    .innerJoin("fees_method", "fees.grade_id", "fees_method.grade_id")
    .innerJoin(
      "payment_method",
      "fees_method.method_id",
      "payment_method.method_id",
    )
    .select([
      "fees.grade_id",
      "fees.grade_level",
      "fees.tuition_fee",
      "fees.miscel_fee",
      "fees.books",
      "fees.uniform_boys",
      "fees.pe_uniform_boys",
      "fees.uniform_girls",
      "fees.pe_uniform_girls",

      "payment_method.method_id",
      "payment_method.method",
      "payment_method.discount",
      "payment_method.due_date",

      "fees_method.monthly_installment",
    ])
    .where("fees.grade_id", "=", id)
    .execute();
};

export const createGrade = async (data) => {
  // Insert grade
  const result = await db.insertInto("fees").values(data).executeTakeFirst();

  const grade_id = Number(result.insertId);

  // Get all payment methods
  const methods = await db
    .selectFrom("payment_method")
    .select("method_id")
    .execute();

  // Build bridge rows
  const bridgeRows = methods.map((method) => ({
    grade_id,
    method_id: method.method_id,
    monthly_installment: 0,
  }));

  // Insert bridge rows
  if (bridgeRows.length > 0) {
    await db.insertInto("fees_method").values(bridgeRows).execute();
  }

  // Return original insert result if needed
  return result;
};

export const patchGrades = async (id, data) => {
  return await db
    .updateTable("fees")
    .set(data)
    .where("grade_id", "=", id)
    .executeTakeFirst();
};

export const deleteGrades = async (id) => {
  return await db
    .deleteFrom("fees")
    .where("grade_id", "=", id)
    .executeTakeFirst();
};

export const createMethod = async (data) => {
  // Insert method
  const result = await db
    .insertInto("payment_method")
    .values(data)
    .executeTakeFirst();

  const method_id = Number(result.insertId);

  // Get all grades
  const grade = await db.selectFrom("fees").select("grade_id").execute();

  // Build bridge rows
  const bridgeRows = grade.map((grade) => ({
    method_id,
    grade_id: grade.grade_id,
    monthly_installment: 0,
  }));

  // Insert bridge rows
  if (bridgeRows.length > 0) {
    await db.insertInto("fees_method").values(bridgeRows).execute();
  }

  // Return original insert result if needed
  return result;
};

export const patchMethod = async (id, data) => {
  return await db
    .updateTable("payment_method")
    .set(data)
    .where("method_id", "=", id)
    .executeTakeFirst();
};

export const deleteMethod = async (id) => {
  return await db
    .deleteFrom("payment_method")
    .where("method_id", "=", id)
    .executeTakeFirst();
};

export const updateInstallment = async (
  grade_id,
  method_id,
  monthly_installment,
) => {
  return await db
    .updateTable("fees_method")
    .set({
      monthly_installment,
    })
    .where("grade_id", "=", grade_id)
    .where("method_id", "=", method_id)
    .executeTakeFirst();
};

export const deleteInstallment = async (grade_id, method_id) => {
  return await db
    .updateTable("fees_method")
    .set({
      monthly_installment: null,
    })
    .where("grade_id", "=", grade_id)
    .where("method_id", "=", method_id)
    .executeTakeFirst();
};
