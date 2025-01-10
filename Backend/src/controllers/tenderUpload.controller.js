import { TenderUpload } from '../models/tenderUpload.model.js';
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import mongoose from "mongoose";
import cron from "node-cron";

const createTender = asyncHandler(async (req, res) => {
    const { HeadLine, Description, Alias_Name2, Alias_Name3, Publishing_Date, Closing_Date } = req.body;

    // Validation: Check for missing fields
    if (
        [HeadLine, Description, Publishing_Date, Closing_Date].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required");
    }

    // Ensure a file was uploaded for Alias_Name1
    if (!req.file) {
        throw new ApiError(400, "File for Alias_Name1 is required");
    }

    // Create the new tender object
    const newTender = await TenderUpload.create({
        HeadLine,
        Description,
        Alias_Name1: req.file.path,  // Store the file path from Multer upload
        Alias_Name2,
        Alias_Name3,
        Publishing_Date,
        Closing_Date
    });

    // Check if the tender was created successfully
    if (!newTender) {
        throw new ApiError(500, "Something went wrong while creating the tender");
    }

    // Return success response
    return res.status(201).json(
        new ApiResponse(201, newTender, "Tender uploaded successfully")
    );
});

//  Cancel a tender by setting its status to 'cancelled'

const cancelTender = asyncHandler(async (req, res) => {
    const tenderId = req.params.id;

    // Find the tender by ID
    const tender = await TenderUpload.findById(tenderId);

    if (!tender) {
        throw new ApiError(404, "Tender not found");
    }

    // Update the tender status to 'cancelled'
    tender.status = 'cancelled'; // Assume you have a status field in your model
    await tender.save();

    return res.status(200).json(
        new ApiResponse(200, tender, "Tender cancelled successfully")
    );
});


// Archive tenders whose Closing_Date has passed
const archiveTenders = asyncHandler(async () => {
    const now = new Date(); // Current date and time
    console.log(`Archiving tenders at: ${now}`);

    // Find and update tenders with a Closing_Date earlier than the current date and time
    const { modifiedCount } = await TenderUpload.updateMany(
        { Closing_Date: { $lt: now }, status: 'active' }, // Active tenders with expired Closing_Date
        { $set: { status: 'archived' } }
    );

    console.log(`${modifiedCount} tenders archived at ${now}`);
});

// Schedule the cron job to run daily at midnight
cron.schedule('0 0 * * *', async () => {
    try {
        await archiveTenders();
    } catch (error) {
        console.error('Error in scheduled archiving task:', error);
    }
});


// Update a tender
const updateTender = asyncHandler(async (req, res) => {
    const tenderId = req.params.id;
    const { HeadLine, Description, Alias_Name2, Alias_Name3, Publishing_Date, Closing_Date } = req.body;
    if ([HeadLine, Description, Publishing_Date, Closing_Date].some((field) => field?.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    const tender = await TenderUpload.findById(tenderId);
    if (!tender) {
        throw new ApiError(404, "Tender not found");
    }

    tender.HeadLine = HeadLine;
    tender.Description = Description;
    tender.Alias_Name2 = Alias_Name2;
    tender.Alias_Name3 = Alias_Name3;
    tender.Publishing_Date = Publishing_Date;
    tender.Closing_Date = Closing_Date;

    if (req.file) {
        tender.Alias_Name1 = req.file.path;
    }

    await tender.save();
    return res.status(200).json(new ApiResponse(200, tender, "Tender updated successfully"));
});

// Delete a tender
const deleteTender = asyncHandler(async (req, res) => {
    const tenderId = req.params.id;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(tenderId)) {
        throw new ApiError(400, "Invalid Tender ID");
    }

    // Find and delete the tender by ID
    const tender = await TenderUpload.findByIdAndDelete(tenderId);

    if (!tender) {
        throw new ApiError(404, "Tender not found");
    }

    return res.status(200).json(new ApiResponse(200, {}, "Tender deleted successfully"));
});
// Get all tenders
const getAllTenders = asyncHandler(async (req, res) => {
    // Fetch all tenders
    const tenders = await TenderUpload.find({});

    // Check if tenders are found
    if (!tenders || tenders.length === 0) {
        throw new ApiError(404, "No tenders found");
    }

    // Return tenders in the response
    return res.status(200).json(new ApiResponse(200, tenders, "Tenders fetched successfully"));
});

//get active tender 
const getActiveTenders = asyncHandler(async (req, res) => {
    //Fetch all active tender 
    const activeTenders = await TenderUpload.find({ status: 'active' });

    //check if tenders are found 
    if (activeTenders.length === 0) {
        throw new ApiError(404, "No active tenders found");
    }
    // Return tenders in the response
    return res.status(200).json(new ApiResponse(200, activeTenders, "Active tenders fetched successfully"));
});

//get cancelled  tender 
const getCancelledTenders = asyncHandler(async (req, res) => {
    //Fetch all active tender 
    const cancelledTenders = await TenderUpload.find({ status: 'cancelled' });

    //check if tenders are found 
    if (cancelledTenders.length === 0)
        throw new ApiError(404, "No cancelled tenders found");
    // Return tenders in the response
    return res.status(200).json(new ApiResponse(200, cancelledTenders, "Cancelled tenders fetched successfully"));
});

//get archive tender 
const getArchivedTenders = asyncHandler(async (req, res) => {
    //Fetch all active tender 
    const archivedTenders = await TenderUpload.find({ status: 'archived' });

    //check if tenders are found 
    if (archivedTenders.length === 0)
        throw new ApiError(404, "No archived tenders found");
    // Return tenders in the response
    return res.status(200).json(new ApiResponse(200, archivedTenders, "Archived tenders fetched successfully"));
});



// Export at the end of the file
export {
    createTender,
    cancelTender,
    archiveTenders,
    updateTender,
    deleteTender,
    getAllTenders,
    getActiveTenders,
    getCancelledTenders,
    getArchivedTenders

};
