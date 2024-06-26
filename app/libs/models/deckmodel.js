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

// Define the schema for the individual deck home items
const DeckHomeItemSchema = new Schema({
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

// Define the schema for the deck section
const DeckSectionSchema = new Schema({
    title: String,
    description: [String] // Array of strings to store multiple paragraphs
}, {
    _id: false // Prevent _id creation for subdocuments if not necessary
});

// Main schema for the deck section
const DeckSchema = new Schema({
    seo: SeoSchema,
    deckhome: [DeckHomeItemSchema],
    freeEstimate: [FreeEstimateSchema],
    deckSection: DeckSectionSchema
}, {
    collection: 'decksections' // Specify the MongoDB collection name
});

// Compile model from schema
const DeckSection = mongoose.models.DeckSection || mongoose.model('DeckSection', DeckSchema);

export default DeckSection;