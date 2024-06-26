import mongoose, { Schema, model } from 'mongoose';
import { eventModel } from './models.js';

const imageSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    alt: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    tags: [{
        type: String,
        trim: true
    }],
    date: {
        type: Date,
        default: Date.now
    },
    location: {
        type: String,
        trim: true
    },
    event: { // Reference to the Event model
        type: Schema.Types.ObjectId,
        ref: 'Event'
    },
}, {
    timestamps: true // Automatically adds createdAt and updatedAt fields
});

// Adding an index to improve query performance on 'tags' field
imageSchema.index({ tags: 1 });

// Example method to convert date to a readable format
imageSchema.methods.formattedDate = function() {
    return this.date.toLocaleDateString();
};

export const imageModel = model('Image', imageSchema);
