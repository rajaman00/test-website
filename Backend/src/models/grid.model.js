import mongoose, { Schema } from 'mongoose';

const gridSchema = new Schema({
    serialNumber: {
        type: Number,
        required: true
    },
    NameOfGSS: {
        type: String,
        required: true
    },
    Capacity220_132: {
        type: Schema.Types.Mixed,  // Allows both strings and numbers,
        //  required: true

    },
    TotalCapacity220_132: {
        type: Number, 
        //  required: true

    },
    Capacity132_33: {
        type: Schema.Types.Mixed,  // Allows both strings and numbers,
        //  required: true

    },
    TotalCapacity132_33: {
        type: Number,
        //  required: true

    },
    TransmissionCircle: {
        type: String,
        required: true

    },
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});

export const Grid = mongoose.model('Grid', gridSchema)