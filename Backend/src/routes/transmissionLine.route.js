import { Router } from "express";
import { uploadTransmissionData, fetchTransmissionLines } from '../controllers/transmissionLine.controller.js';
import { upload } from "../middlewares/multer.middleware.js"; 
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Route to upload Transmission Line data from Excel (requires a file upload)
router.post('/upload', verifyJWT, upload.single('document'), uploadTransmissionData); 

// Route to get all Transmission Line records
router.get('/getAll', fetchTransmissionLines);

export default router;
