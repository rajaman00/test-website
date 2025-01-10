import { Router } from "express";
import {createCareer, getCareerNotification  } from '../controllers/career.controller.js';
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

// Route to handle  career upload (only for authenticated users)
router.post('/create', verifyJWT, upload.single('Document'), createCareer);


//Route to get  career  
router.get('/getAll', getCareerNotification);


export default router

