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

const Mixed = Schema.Types.Mixed;

// Define the schema for the individual deck home items
const FenceHomeItemSchema = new Schema({
    id: String,
    content: Mixed,
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

// Main schema for the deck section
const FenceSectionSchema = new Schema({
    seo: SeoSchema,
    fencehome: [FenceHomeItemSchema],
    freeEstimate: [FreeEstimateSchema]
}, {
    collection: 'fencesections' // Specify the MongoDB collection name
});

// Compile model from schema
const FenceSection = mongoose.models.FenceSection || mongoose.model('FenceSection', FenceSectionSchema);

export default FenceSection;