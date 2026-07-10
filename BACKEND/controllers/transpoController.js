import * as transpoModel from "../models/transpoModel.js";

export const getLocationsController = async (req, res) => {
  try {
    const locations = await transpoModel.getLocations();
    res.json(locations);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const updateLocationsController = async (req, res) => {
  try {
    const { id } = req.params;

    const { location, distance, price } = req.body;

    console.log(req.body);

    const result = await transpoModel.patchLocations(
      id,
      location,
      distance,
      price,
    );

    if (result.numUpdatedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "Location with ID not found or no changes were made.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Location updated successfully.",
    });
  } catch (error) {
    console.error("Error patching Location:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};

export const postLocationsController = async (req, res) => {
  try {
    const { location, distance, price } = req.body;
    await transpoModel.postLocations(location, distance, price);

    return res.status(201).json({
      success: true,
      message: "Location added successfully.",
    });
  } catch (error) {
    console.error("Error posting Location:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
export const deleteLocationsController = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await transpoModel.deleteLocations(id);

    if (result.numDeletedRows === 0n) {
      return res.status(404).json({
        success: false,
        message: "ID not found.",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Location Deleted Successfully.",
    });
  } catch (error) {
    console.error("Error deleting Location:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
