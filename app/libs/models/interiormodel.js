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

// Define the schema for the individual interior home items
const InteriorHomeItemSchema = new Schema({
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

// Define the schema for the interior section details
const InteriorSectionDetailsSchema = new Schema({
    title: String,
    description: [String] // Array of strings to store multiple paragraphs
}, {
    _id: false // Prevent _id creation for subdocuments if not necessary
});

// Main schema for the interior section
const InteriorSectionSchema = new Schema({
    seo: SeoSchema,
    interiorhome: [InteriorHomeItemSchema],
    freeEstimate: [FreeEstimateSchema],
    interiorSection: InteriorSectionDetailsSchema
}, {
    collection: 'interiorsections' // Specify the MongoDB collection name
});

// Compile model from schema
const InteriorSection = mongoose.models.InteriorSection || mongoose.model('InteriorSection', InteriorSectionSchema);

export default InteriorSection;