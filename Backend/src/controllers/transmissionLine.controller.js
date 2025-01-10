import fs from "fs";
import XLSX from "xlsx";
import { TransmissionLine } from "../models/transmissionLine.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Upload and store data from an Excel file
const uploadTransmissionData = asyncHandler(async (req, res) => {
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

        // console.log("Sheet Data Preview:", sheetData.slice(0, 5)); // Debugging: Show first 5 rows
          console.log("Headers in Excel File:", Object.keys(sheetData[0] || {}));


        if (!sheetData || sheetData.length === 0) {
            throw new ApiError(400, "The uploaded Excel file is empty");
        }

        // Define the expected headers and mapping to database fields
        const columnMap = {
            "Sl. No.": "serialNumber",
            "Name of the T/L": "nameOfLine",
            "Circuit": "circuit",
            "Route Length (in km)": "routeLength",
            "Total Length (in km)": "totalLength",
            "Type of conductor": "conductorType",
            "Type of Line": "lineType",
        };

        // Normalize headers for comparison
        const normalize = (str) => str.trim();
        const fileHeaders = Object.keys(sheetData[0] || {}).map(normalize);
        const requiredHeaders = Object.keys(columnMap);
        const missingHeaders = requiredHeaders.filter(
            (header) => !fileHeaders.includes(normalize(header))
        );

        console.log("File Headers:", fileHeaders); // Debugging: Show actual headers in the file

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

        console.log("Formatted Data for Database:", formattedData); // Debugging: Show formatted data

        // Insert data into the database
        const savedRecords = await TransmissionLine.insertMany(formattedData);

        res.status(201).json(
            new ApiResponse(
                201,
                savedRecords,
                `${savedRecords.length} transmission lines added successfully`
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

// Fetch all TransmissionLine data
const fetchTransmissionLines = asyncHandler(async (req, res) => {
    try {
        const transmissionLines = await TransmissionLine.find();

        if (!transmissionLines || transmissionLines.length === 0) {
            throw new ApiError(404, "No transmission line records found");
        }

        res.status(200).json(
            new ApiResponse(200, transmissionLines, "Transmission lines fetched successfully")
        );
    } catch (error) {
        console.error("Error fetching transmission lines:", error);
        throw new ApiError(500, "Failed to fetch transmission lines");
    }
});

export { uploadTransmissionData, fetchTransmissionLines };