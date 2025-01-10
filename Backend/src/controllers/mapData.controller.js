import { MapData } from "../models/mapData.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Add MapData
const addMapData = asyncHandler(async (req, res) => {

    const { DistrictName, TransmissionLines, OpticalFibres,
        GridSubStations, TransformationCapacity, SystemAvailability,groupId } = req.body;

    // Validate required fields with a compact check using `some()`
    if ([DistrictName, TransmissionLines, OpticalFibres, GridSubStations,
        TransformationCapacity, SystemAvailability,groupId].some((field) => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required.");
    }

    // Create a new MapData document
    const newMapData = new MapData({
        DistrictName,
        TransmissionLines,
        OpticalFibres,
        GridSubStations,
        TransformationCapacity,
        SystemAvailability,
        groupId,
    });

    // Save to database
    const savedMapData = await newMapData.save();

    // Check if the circularnotice was created successfully
    if (!savedMapData) {
        throw new ApiError(500, "Something went wrong while creating the Map Data");
    }

    // Return success response
    return res.status(201).json(
        new ApiResponse(201, newMapData, "MapData created successfully")
    );
});

// Get All MapData
const getAllMapData = asyncHandler(async (req, res) => {
    const mapDataList = await MapData.find(); // Fetch all data

    if (!mapDataList || mapDataList.length === 0) {
        throw new ApiError(404, "No map data found.");
    }

    res.status(200).json(new ApiResponse(200, "Map data retrieved successfully.", mapDataList));
});

// Export functions
export { addMapData, getAllMapData };
