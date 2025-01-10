import { Career } from "../models/career.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
// import mongoose from "mongoose";

// Create a new circularnotice (admin only)
const createCareer = asyncHandler(async (req, res) => {
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

    const newCareer = new Career({
        Description,
        Document: req.file.path,  // Store the file path from Multer upload
    });

    // Save the career to the database
    const savedCareer = await newCareer.save();

    
    // Check if the career was created successfully
    if (!savedCareer) {
        throw new ApiError(500, "Something went wrong while creating the Career Section");
    }

    // Return success response
    return res.status(201).json(
        new ApiResponse(201, newCareer, "Career created successfully")
    );


});

// Get all career
const getCareerNotification = asyncHandler(async (req, res) => {
    // Fetch all CareerNotification
    const getCareerNotification = await Career.find({});

    // Check if OfficeOrder are found
    if (!getCareerNotification || getCareerNotification.length === 0) {
        throw new ApiError(404, "No CareerNotification found");
    }

    // Return officeOrder in the response
    return res.status(200).json(new ApiResponse(200, getCareerNotification, "CareerNotification fetched successfully"));
});

export{
    createCareer,
    getCareerNotification
}