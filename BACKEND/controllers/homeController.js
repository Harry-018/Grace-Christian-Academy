import * as homeModel from "../models/homeModel.js";

export const getBannerController = async (req, res) => {
  try {
    const banner = await homeModel.getBanner();
    res.json(banner);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateBannerController = async (req, res) => {
  try {
    const { id } = req.params;

    const { admission_status, banner_title, banner_quote, school_year } =
      req.body;

    const result = await homeModel.patchBanner(
      id,
      admission_status,
      banner_title,
      banner_quote,
      school_year,
    );

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "Banner with ID 1 not found or no changes were made.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Banner updated successfully.",
    });
  } catch (error) {
    console.error("Error patching banner:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getAcademicProgramsController = async (req, res) => {
  try {
    const academic_programs = await homeModel.getAcademicPrograms();
    res.json(academic_programs);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateAcademicProgramsController = async (req, res) => {
  try {
    const { id } = req.params;
    const { program, ages, description } = req.body;
    const result = await homeModel.patchAcademicPrograms(
      id,
      program,
      ages,
      description,
    );

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "id not found or no changes were made.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Academic Programs updated successfully.",
    });
  } catch (error) {
    console.error("Error patching Academic Programs:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const deleteAcademicProgramsController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await homeModel.deleteAcademicPrograms(id);

    if (result.numDeletedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "ID not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Academic Program Deleted Successfully.",
    });
  } catch (error) {
    console.error("Error deleting Academic Program:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const postAcademicProgramsController = async (req, res) => {
  try {
    const { program, ages, description } = req.body;
    await homeModel.postAcademicPrograms(program, ages, description);

    return res.status(201).json({
      success: true,
      message: "Academic Programs added successfully.",
    });
  } catch (error) {
    console.error("Error posting Academic Programs:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getMissionVisionController = async (req, res) => {
  try {
    const mission_vision = await homeModel.getMissionVision();
    res.json(mission_vision);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateMissionVisionController = async (req, res) => {
  try {
    const { type } = req.params;

    const { title, description } = req.body;

    const result = await homeModel.patchMissionVision(type, title, description);

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "Type not found or no changes were made.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "MissVis updated successfully.",
    });
  } catch (error) {
    console.error("Error patching MissVis:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getReasonsController = async (req, res) => {
  try {
    const reasons = await homeModel.getReasons();
    res.json(reasons);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateReasonsController = async (req, res) => {
  try {
    const { id } = req.params;

    const { reasons } = req.body;

    const result = await homeModel.patchReasons(id, reasons);

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "Reason with ID not found or no changes were made.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Reason updated successfully.",
    });
  } catch (error) {
    console.error("Error patching Reason:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const postReasonsController = async (req, res) => {
  try {
    const { reasons } = req.body;
    await homeModel.postReasons(reasons);

    return res.status(201).json({
      success: true,
      message: "Reason added successfully.",
    });
  } catch (error) {
    console.error("Error posting Reason:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const deleteReasonsController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await homeModel.deleteReasons(id);

    if (result.numDeletedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "ID not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Reason Deleted Successfully.",
    });
  } catch (error) {
    console.error("Error deleting Reason:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const getChildrenActivityController = async (req, res) => {
  try {
    const children_actiivity = await homeModel.getChildrenActivity();
    res.json(children_actiivity);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
export const updateChildrenActivityController = async (req, res) => {
  try {
    const { id } = req.params;

    const { activity_title, activity_description } = req.body;

    console.log(req.body);

    const result = await homeModel.patchChildrenActivity(
      id,
      activity_title,
      activity_description,
    );

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "Activity with ID not found or no changes were made.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Activity updated successfully.",
    });
  } catch (error) {
    console.error("Error patching activity:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const postChildrenActivityController = async (req, res) => {
  try {
    const { activity_title, activity_description } = req.body;
    await homeModel.postChildrenActivity(activity_title, activity_description);

    return res.status(201).json({
      success: true,
      message: "Activity added successfully.",
    });
  } catch (error) {
    console.error("Error posting Activity:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const deleteChildrenActivityController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await homeModel.deleteChildrenActivity(id);

    if (result.numDeletedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "ID not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Activity Deleted Successfully.",
    });
  } catch (error) {
    console.error("Error deleting Activity:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
