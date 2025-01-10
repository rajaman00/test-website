import mongoose, { Schema } from "mongoose";

const mapDataSchema = new Schema({
    DistrictName:{
        type:String,
        required:true
    },
    TransmissionLines: {
        type: Number,  
        required: true
    },
    OpticalFibres: {
        type: Number,  
        required: true
    },
    GridSubStations: {
        type: Number,  
        required: true
    },
    TransformationCapacity: {
        type: Number,  
    },
    groupId:{          //zone name
        type:String,
        required:true
    },
    SystemAvailability: {
        type: Number,  
        required: true
    },
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});


export const MapData = mongoose.model('MapData', mapDataSchema)