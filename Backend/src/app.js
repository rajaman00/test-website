import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"


const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))


app.use(express.json({ limit: "10mb" }))
app.use(express.urlencoded({ extended: true, limit: "10mb" }))
app.use('/public', express.static("public"));
// app.use(express.static("public"))
app.use(cookieParser())


//routes import
import userRouter from './routes/user.routes.js'
import tenderRoute from './routes/tenderUpload.route.js'
import noticeRoute from './routes/noticeBoard.route.js'
import CircularRoute from './routes/circularNotification.route.js'
import officeOrderRoute from './routes/officeOrder.route.js'
import transferPostingRoute from './routes/transferPosting.routes.js'
import transmissionLineRoute from './routes/transmissionLine.route.js'
import gridRoute from './routes/grid.route.js'
import mapDataRoute from './routes/mapData.route.js'
import careerRoute from './routes/career.route.js'
import atcTtcRoute from './routes/atcTtc.route.js'
import eoiRoute from './routes/eoi.route.js'

//routes declaration
app.use("/api/v1/users", userRouter)
app.use("/api/v1/tender", tenderRoute)
app.use("/api/v1/notice", noticeRoute)
app.use("/api/v1/circular", CircularRoute)
app.use("/api/v1/officeOrder", officeOrderRoute)
app.use("/api/v1/transferPosting", transferPostingRoute)
app.use("/api/v1/transmissionLine", transmissionLineRoute)
app.use("/api/v1/grid", gridRoute)
app.use("/api/v1/mapData", mapDataRoute)
app.use("/api/v1/career",careerRoute)
app.use("/api/v1/atcTtc", atcTtcRoute)
app.use("/api/v1/eoi",eoiRoute)


// http://localhost:8000/api/v1/users/register

export { app }

