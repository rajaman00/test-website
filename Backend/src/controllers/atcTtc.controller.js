import { AtcTtc } from "../models/atcTtc.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Create a new Atc Ttc (admin only)
const createAtcTtc = asyncHandler(async (req, res) => {
    const { MonthYear, ATC, TTC } = req.body;

    // Validation: Check for missing or invalid fields
    if (!MonthYear?.trim()) {
        throw new ApiError(400, "MonthYear is required");
    }
    if (isNaN(ATC) || isNaN(TTC)) {
        throw new ApiError(400, "ATC and TTC must be numeric values");
    }
    if (!req.file) {
        throw new ApiError(400, "File for TransmissionConstraintAssumptions is required");
    }

    // Create a new AtcTtc entry
    const newAtcTtc = new AtcTtc({
        MonthYear: MonthYear.trim(),
        ATC: Number(ATC), // Ensure numeric value
        TTC: Number(TTC), // Ensure numeric value
        TransmissionConstraintAssumptions: req.file.path, // Store file path
    });

    // Save the AtcTtc entry to the database
    const savedAtcTtc = await newAtcTtc.save();

    // Return success response
    return res.status(201).json(
        new ApiResponse(201, savedAtcTtc, "AtcTtc created successfully")
    );
});

// Get all AtcTtc entries
const getAtcTtc = asyncHandler(async (req, res) => {
    // Fetch all AtcTtc entries
    const atcTtcRecords = await AtcTtc.find({});

    // Check if AtcTtc entries are found
    if (!atcTtcRecords.length) {
        throw new ApiError(404, "No AtcTtc records found");
    }

    // Return AtcTtc entries in the response
    return res.status(200).json(
        new ApiResponse(200, atcTtcRecords, "AtcTtc fetched successfully")
    );
});

// Export functions
export {
    createAtcTtc,
    getAtcTtc,
};
