import * as tuitionModel from "../models/tuitionModel.js";

export const getGradeLevelController = async (req, res) => {
  try {
    const grade = await tuitionModel.getGradeLevel();
    res.json(grade);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const getTuitionController = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await tuitionModel.getTuition(id);

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Grade level not found.",
      });
    }

    const grade = {
      grade_id: result[0].grade_id,
      grade_level: result[0].grade_level,
      tuition_fee: result[0].tuition_fee,
      miscel_fee: result[0].miscel_fee,
      books: result[0].books,
      uniform_boys: result[0].uniform_boys,
      pe_uniform_boys: result[0].pe_uniform_boys,
      uniform_girls: result[0].uniform_girls,
      pe_uniform_girls: result[0].pe_uniform_girls,
    };

    const payment_methods = result.map((row) => ({
      method_id: row.method_id,
      method: row.method,
      due_date: row.due_date,
      discount: row.discount,
      monthly_installment: row.monthly_installment,
    }));

    return res.status(200).json({
      grade,
      payment_methods,
    });
  } catch (error) {
    console.error("Tuition Controller Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const createGradeController = async (req, res) => {
  try {
    const data = req.body;
    await tuitionModel.createGrade(data);

    return res.status(201).json({
      success: true,
      message: "Grade created successfully.",
    });
  } catch (error) {
    console.error("Error creating Grade:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const updateGradeController = async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    console.log(req.body);

    const result = await tuitionModel.patchGrades(id, data);

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "Grade with ID not found or no changes were made.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Grade updated successfully.",
    });
  } catch (error) {
    console.error("Error patching Grade:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const deleteGradeController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tuitionModel.deleteGrades(id);

    if (result.numDeletedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "ID not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Grade Deleted Successfully.",
    });
  } catch (error) {
    console.error("Error deleting Grade:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const createMethodController = async (req, res) => {
  try {
    const data = req.body;
    await tuitionModel.createMethod(data);

    return res.status(201).json({
      success: true,
      message: "Method created successfully.",
    });
  } catch (error) {
    console.error("Error creating Method:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const updateMethodController = async (req, res) => {
  try {
    const { id } = req.params;

    const data = req.body;

    console.log(req.body);

    const result = await tuitionModel.patchMethod(id, data);

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "Method with ID not found or no changes were made.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Method updated successfully.",
    });
  } catch (error) {
    console.error("Error patching Method:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const deleteMethodController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await tuitionModel.deleteMethod(id);

    if (result.numDeletedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "ID not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Method Deleted Successfully.",
    });
  } catch (error) {
    console.error("Error deleting Method:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const updateInstallmentController = async (req, res) => {
  try {
    const { grade_id, method_id } = req.params;
    const { monthly_installment } = req.body;

    await tuitionModel.updateInstallment(
      grade_id,
      method_id,
      monthly_installment,
    );

    return res.status(200).json({
      success: true,
      message: "Monthly installment updated successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteInstallmentController = async (req, res) => {
  try {
    const { grade_id, method_id } = req.params;
    const result = await tuitionModel.deleteInstallment(grade_id, method_id);

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "ID not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Installment Deleted Successfully.",
    });
  } catch (error) {
    console.error("Error deleting Installment:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
