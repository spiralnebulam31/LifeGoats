import mongoose, { Schema, model } from 'mongoose';

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
        required: true,
    },
    url: {
        type: String,
        trim: true,
        required: true,
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        trim: true,
        required: true
    },
    host: {
        type: String,
        trim: true,
        required: true
    },
    numberOfAttendees: {
        type: Number,
        default: 0,
        required: true
    },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Adding an index to improve query performance on 'name' field
eventSchema.index({ name: 1 });

// Example method to convert date to a readable format
eventSchema.methods.formattedDate = function() {
    return this.date.toLocaleDateString();
};

export const eventModel = model('Event', eventSchema);