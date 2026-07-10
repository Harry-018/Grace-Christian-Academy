import db from "../config/database.js";

export const getLocations = async () => {
  return await db
    .selectFrom("transportation")
    .selectAll()
    .orderBy("distance")
    .execute();
};

export const patchLocations = async (id, location, distance, price) => {
  return await db
    .updateTable("transportation")
    .set({ location, distance, price })
    .where("transpo_id", "=", id)
    .executeTakeFirst();
};

export const postLocations = async (location, distance, price) => {
  return await db
    .insertInto("transportation")
    .values({ location, distance, price })
    .executeTakeFirst();
};

export const deleteLocations = async (id) => {
  return await db
    .deleteFrom("transportation")
    .where("transpo_id", "=", id)
    .executeTakeFirst();
};
