import db from "../config/database.js";

// Banner get, edit
export const getBanner = async () => {
  return await db.selectFrom("banner").selectAll().execute();
};
export const patchBanner = async (
  id,
  admission_status,
  banner_title,
  banner_quote,
  school_year,
) => {
  return await db
    .updateTable("banner")
    .set({
      admission_status,
      banner_title,
      banner_quote,
      school_year,
    })
    .where("id", "=", id)
    .executeTakeFirst();
};

// Academic Programs
export const getAcademicPrograms = async () => {
  return await db.selectFrom("academic_programs").selectAll().execute();
};
export const patchAcademicPrograms = async (id, updateData) => {
  return await db
    .updateTable("academic_programs")
    .set(updateData)
    .where("id", "=", id)
    .executeTakeFirst();
};
export const postAcademicPrograms = async (
  program,
  ages,
  description,
  imageurl,
) => {
  return await db
    .insertInto("academic_programs")
    .values({ program, ages, description, imageurl: imageurl })
    .executeTakeFirst();
};
export const deleteAcademicPrograms = async (id) => {
  return await db
    .deleteFrom("academic_programs")
    .where("id", "=", id)
    .executeTakeFirst();
};

// Mission Vision
export const getMissionVision = async () => {
  return await db.selectFrom("mission_vision").selectAll().execute();
};
export const patchMissionVision = async (type, title, description) => {
  return await db
    .updateTable("mission_vision")
    .set({
      type,
      title,
      description,
    })
    .where("type", "=", type)
    .executeTakeFirst();
};

// GCA VIDEO
export const getVideo = async () => {
  return await db.selectFrom("home_video").selectAll().execute();
};

export const patchVideo = async (id, updateData) => {
  return await db
    .updateTable("home_video")
    .set(updateData)
    .where("id", "=", id)
    .executeTakeFirst();
};

// Reasons
export const getReasons = async () => {
  return await db.selectFrom("choose_us").selectAll().execute();
};
export const patchReasons = async (id, reasons) => {
  return await db
    .updateTable("choose_us")
    .set({
      reasons,
    })
    .where("id", "=", id)
    .executeTakeFirst();
};
export const postReasons = async (reasons) => {
  return await db
    .insertInto("choose_us")
    .values({ reasons })
    .executeTakeFirst();
};
export const deleteReasons = async (id) => {
  return await db
    .deleteFrom("choose_us")
    .where("id", "=", id)
    .executeTakeFirst();
};

// Children Activity
export const getChildrenActivity = async () => {
  return await db.selectFrom("children_activities").selectAll().execute();
};
export const patchChildrenActivity = async (
  id,
  activity_title,
  activity_description,
) => {
  return await db
    .updateTable("children_activities")
    .set({
      activity_title,
      activity_description,
    })
    .where("id", "=", id)
    .executeTakeFirst();
};

export const postChildrenActivity = async (
  activity_title,
  activity_description,
) => {
  return await db
    .insertInto("children_activities")
    .values({ activity_title, activity_description })
    .executeTakeFirst();
};
export const deleteChildrenActivity = async (id) => {
  return await db
    .deleteFrom("children_activities")
    .where("id", "=", id)
    .executeTakeFirst();
};
