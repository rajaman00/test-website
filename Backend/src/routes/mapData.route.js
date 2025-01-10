import { Router } from "express";
import { addMapData, getAllMapData } from '../controllers/mapData.controller.js';
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Route to upload Transmission Line data from Excel (requires a file upload)
router.post('/upload', verifyJWT, addMapData); 

// Route to get all Transmission Line records
router.get('/getAll', getAllMapData);

export default router;
