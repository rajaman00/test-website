import mongoose, {Schema} from 'mongoose';

const transmissionSchema = new Schema({
    serialNumber: {
        type: Number,
         required: true
    },
    nameOfLine: {
        type: String,
         required: true
    },
    lineType: {
        type: String,
        required: true

    },
    circuit: {
        type: String,
         required: true

    },
    routeLength: {
        type: Number,
         required: true

    },
    totalLength: {
        type: Number,
        required: true

    },
    conductorType: {
        type: String,
        required: true

    },
    lastUpdated: {
        type: Date,
        default: Date.now

    },
}, {
    timestamps: true // Automatically adds `createdAt` and `updatedAt` fields
});


export const TransmissionLine = mongoose.model('TransmissionLine', transmissionSchema);
