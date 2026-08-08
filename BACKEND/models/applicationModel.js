import db from "../config/database.js";

//for admin to get all application (use it on the table)
export const getApplications = async () => {
  return await db.selectFrom("student_application").selectAll().execute();
};

//for admin to get application by id (use it on the table)
export const getApplicationById = async (id) => {
  return await db
    .selectFrom("student_application")
    .selectAll()
    .where("application_id", "=", id)
    .executeTakeFirst();
};

//for admin to edit application by id (use it on the table)
export const editApplication = async (id, application) => {
  return await db
    .updateTable("student_application")
    .set(application)
    .where("application_id", "=", id)
    .executeTakeFirst();
};

//check is applicant already exist
export const checkExistingApplicant = async (
  firstName,
  lastName,
  birthDate,
) => {
  return await db
    .selectFrom("student_application")
    .select("application_id")
    .where("stu_first_name", "=", firstName)
    .where("stu_last_name", "=", lastName)
    .where("stu_date_birth", "=", birthDate)
    .executeTakeFirst();
};

//for applying students (use it on the form)
export const applyApplication = async (application) => {
  return await db
    .insertInto("student_application")
    .values(application)
    .executeTakeFirst();
};
