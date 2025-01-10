import fs from "fs";
import XLSX from "xlsx";
import { Grid } from "../models/grid.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Upload and store data from an Excel file for Grid
const uploadGridData = asyncHandler(async (req, res) => {
    if (!req.file) {
        throw new ApiError(400, "Excel file is required");
    }

    const documentPath = req.file.path;

    try {
        // Verify that the file exists
        if (!fs.existsSync(documentPath)) {
            throw new ApiError(400, "Uploaded file not found");
        }

        // Read the Excel file
        const workbook = XLSX.readFile(documentPath);
        const sheetName = workbook.SheetNames[0];
        const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

        if (!sheetData || sheetData.length === 0) {
            throw new ApiError(400, "The uploaded Excel file is empty");
        }

        // Define the expected headers and mapping to database fields
        const columnMap = {
            "Sl.No.": "serialNumber",
            " Name of GSS": "NameOfGSS",
            "220/132 kV Capacity": "Capacity220_132",
            "220/132 kV Total Capacity": "TotalCapacity220_132",
            " 132/33kV Capacity": "Capacity132_33",
            " 132/33 kV Total Capacity": "TotalCapacity132_33",
            " Transmission Circle": "TransmissionCircle",
        };

        // Normalize headers for comparison
        const normalize = (str) => str.trim();
        const fileHeaders = Object.keys(sheetData[0] || {}).map(normalize);
        const requiredHeaders = Object.keys(columnMap);
        const missingHeaders = requiredHeaders.filter(
            (header) => !fileHeaders.includes(normalize(header))
        );

        if (missingHeaders.length > 0) {
            throw new ApiError(
                400,
                `The uploaded file is missing the following headers: ${missingHeaders.join(", ")}`
            );
        }

        // Map and format data for MongoDB insertion
        const formattedData = sheetData.map((row) => {
            const mappedRow = {};
            for (const [excelHeader, dbField] of Object.entries(columnMap)) {
                mappedRow[dbField] = row[excelHeader];
            }
            return mappedRow;
        });

        // Insert data into the database
        const savedRecords = await Grid.insertMany(formattedData);

        res.status(201).json(
            new ApiResponse(
                201,
                savedRecords,
                `${savedRecords.length} grid records added successfully`
            )
        );
    } catch (error) {
        console.error("Error processing Excel file:", error);
        throw new ApiError(500, "Failed to process the uploaded file");
    } finally {
        // Clean up: Remove the uploaded file
        if (fs.existsSync(documentPath)) {
            fs.unlinkSync(documentPath);
        }
    }
});

// Fetch all Grid data
const fetchGridData = asyncHandler(async (req, res) => {
    try {
        const gridRecords = await Grid.find();

        if (!gridRecords || gridRecords.length === 0) {
            throw new ApiError(404, "No grid records found");
        }

        res.status(200).json(
            new ApiResponse(200, gridRecords, "Grid records fetched successfully")
        );
    } catch (error) {
        console.error("Error fetching grid records:", error);
        throw new ApiError(500, "Failed to fetch grid records");
    }
});

export { uploadGridData, fetchGridData };
