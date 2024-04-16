import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// Define the schema for individual reviews
const ReviewSchema = new Schema({
    name: String,
    location: String,
    comment: String,
    date: String  // Consider using Date type if you're processing dates
});

// Define the schema for the SEO data
const SeoSchema = new Schema({
    title: String,
    description: String,
    keywords: String
});

// Define the schema for the legends
const LegendsSchema = new Schema({
    title: String,
    subtitle: String,
    showMore: String,
    showLess: String
});
const ReviewSectionsSchema = new Schema({
    legends: LegendsSchema,
    seo: SeoSchema,
    reviews: [ReviewSchema]
}, {
    collection: 'reviewsections'  // Specify the MongoDB collection name
});

// Compile model from schema
const ReviewSections = mongoose.models.ReviewSections || mongoose.model('ReviewSections', ReviewSectionsSchema);

export default ReviewSections;
