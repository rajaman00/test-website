import { Router } from "express";
import { createAtcTtc, getAtcTtc, } from '../controllers/atcTtc.controller.js';
import { upload } from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";


const router = Router()

// Route to handle atc ttc upload (only for authenticated users)
router.post('/create', verifyJWT, upload.single('TransmissionConstraintAssumptions'), createAtcTtc);

//Route to get  CircularNotification 
router.get('/getAll', getAtcTtc);


export default router

