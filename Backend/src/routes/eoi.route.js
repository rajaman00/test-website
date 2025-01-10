import { Router } from "express";
import {createEoi,getEoi } from '../controllers/eoi.controller.js';
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

// Route to handle  career upload (only for authenticated users)
router.post('/create', verifyJWT, upload.single('Document'), createEoi);


//Route to get  career  
router.get('/getAll', getEoi);


export default router

