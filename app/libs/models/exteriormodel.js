import mongoose from 'mongoose';

const {
    Schema
} = mongoose;

// Define the schema for the SEO data
const SeoSchema = new Schema({
    title: String,
    metaDescription: String,
    keywords: String
});

// Define the schema for individual exterior home items
const ExteriorHomeItemSchema = new Schema({
    id: String,
    content: String,
    href: String
}, {
    _id: false // Prevent _id creation for subdocuments if not necessary
});

// Define the schema for the free estimate link
const FreeEstimateSchema = new Schema({
    id: String,
    text: String,
    href: String
}, {
    _id: false
});

// Define the schema for the exterior section details
const ExteriorSectionDetailsSchema = new Schema({
    title: String,
    description: [String] // Array of strings to store multiple paragraphs
}, {
    _id: false // Prevent _id creation for subdocuments if not necessary
});

// Main schema for the exterior section
const ExteriorSectionSchema = new Schema({
    seo: SeoSchema,
    exteriorhome: [ExteriorHomeItemSchema],
    freeEstimate: [FreeEstimateSchema],
    exteriorSection: ExteriorSectionDetailsSchema
}, {
    collection: 'exteriorsections' // Specify the MongoDB collection name
});

// Compile model from schema
const ExteriorSection = mongoose.models.ExteriorSection || mongoose.model('ExteriorSection', ExteriorSectionSchema);

export default ExteriorSection;