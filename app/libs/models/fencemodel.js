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

// Define the schema for individual home items (renamed from DeckHomeItemSchema for clarity)
const FenceHomeItemSchema = new Schema({
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

// Define the schema for the fence section
const FenceSectionDetailsSchema = new Schema({
    title: String,
    description: [String] // Array of strings to store multiple paragraphs
}, {
    _id: false // Prevent _id creation for subdocuments if not necessary
});

// Main schema for the fence section
const FenceSectionSchema = new Schema({
    seo: SeoSchema,
    fencehome: [FenceHomeItemSchema],
    freeEstimate: [FreeEstimateSchema],
    fenceSection: FenceSectionDetailsSchema
}, {
    collection: 'fencesections' // Specify the MongoDB collection name
});

// Compile model from schema
const FenceSection = mongoose.models.FenceSection || mongoose.model('FenceSection', FenceSectionSchema);

export default FenceSection;