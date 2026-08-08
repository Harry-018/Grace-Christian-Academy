import * as applicationModel from "../models/applicationModel.js";

export const applyApplicationController = async (req, res) => {
  try {
    const existing = await applicationModel.checkExistingApplicant(
      req.body.stu_first_name,
      req.body.stu_last_name,
      req.body.stu_date_birth,
    );

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Applicant already exists.",
      });
    }

    const application = {
      ...req.body,
      application_status: "Pending",
      doc_submission: null,
      doc_submitted: "False",
    };

    await applicationModel.applyApplication(application);
    return res.status(201).json({
      success: true,
      message: "successfully applied",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "application unsuccessful",
    });
  }
};
