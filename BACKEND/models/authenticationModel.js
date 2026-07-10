import db from "../config/database.js";

// getuser by email in login
export const getUserByEmail = async (email) => {
  return await db
    .selectFrom("users")
    .selectAll()
    .where("email", "=", email)
    .executeTakeFirst();
};
