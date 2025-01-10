import { Router } from "express";
import {uploadGridData, fetchGridData  } from '../controllers/grid.controller.js';
import { upload } from "../middlewares/multer.middleware.js"; 
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Route to upload Transmission Line data from Excel (requires a file upload)
router.post('/upload', verifyJWT, upload.single('document'), uploadGridData); 

// Route to get all Transmission Line records
router.get('/getAll', fetchGridData);

export default router;
