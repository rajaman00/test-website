import { Eoi } from "../models/eoi.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// import mongoose from "mongoose";

// Create a new Eoi (admin only)
const createEoi = asyncHandler(async (req, res) => {
    const { Description} = req.body;

    // Validation: Check for missing fields
    if (
        [!Description?.trim()]
    ) {
        throw new ApiError(400, "Description  is required");
    }

    // Ensure a file was uploaded for document
    if (!req.file) {
        throw new ApiError(400, "File for document is required");
    }

    const newEoi = new Eoi({
        Description,
        Document: req.file.path,  // Store the file path from Multer upload
    });

    // Save the career to the database
    const savedEoi = await newEoi.save();

    
    // Check if the career was created successfully
    if (!savedEoi) {
        throw new ApiError(500, "Something went wrong while creating the Eoi Section");
    }

    // Return success response
    return res.status(201).json(
        new ApiResponse(201, savedEoi, "Eoi created successfully")
    );


});

// Get all career
const getEoi = asyncHandler(async (req, res) => {
    // Fetch all CareerNotification
    const getEoi = await Eoi.find({});

    // Check if OfficeOrder are found
    if (!getEoi || getEoi.length === 0) {
        throw new ApiError(404, "No Eoi found");
    }

    // Return officeOrder in the response
    return res.status(200).json(new ApiResponse(200, getEoi, "Eoi fetched successfully"));
});

export{
    createEoi,
    getEoi
}