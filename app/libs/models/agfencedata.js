import mongoose from 'mongoose';

const {
    Schema,
    model
} = mongoose;

// Define the schema for the nested objects
const heroSchema = new Schema({
    title: String,
    subtitle: String,
    description: String,
    subDescription: String,
});

const introSchema = new Schema({
    title: String,
    subtitle: String,
    description: String,
    secondDescription: String,
    commitments: [String],
});

const serviceSchema = new Schema({
    title: String,
    description: String,
    button: String,
    link: String,
});

const pointSchema = new Schema({
    value: String,
    subtitle: String,
});

const companyInfoSchema = new Schema({
    title: String,
    description: String,
    workHours: {
        title: String,
        description: String,
        detailcontact: String,
        link: String,
    },
    location: {
        title: String,
        description: String,
        detailcontact: String,
        link: String,
    },
    serviceArea: {
        title: String,
        description: String,
        detailcontact: String,
        link: String,
    },
    estimates: {
        title: String,
        description: String,
        detailcontact: String,
        link: String,
    },
});

const projectSchema = new Schema({
    title: String,
    imageAlt: String,
    link: String,
});

const trustedBySchema = new Schema({
    title: String,
    companies: [String],
});

// Define the main schema, which includes all nested objects
const homeSchema = new Schema({
    hero: heroSchema,
    advantageSection: [String],
    intro: introSchema,
    services: {
        fence: serviceSchema,
        deck: serviceSchema,
        remodelation: serviceSchema,
    },
    points: {
        honesty: pointSchema,
        responsibility: pointSchema,
        estimate: pointSchema,
        price: pointSchema,
    },
    companyInfo: companyInfoSchema,
    recentProjects: {
        title: String,
        subtitle: String,
        projects: [projectSchema],
        seeMoreLink: String,
        seeMoreLinkUrl: String,
    },
    trustedBy: trustedBySchema,
});

// Notice the main document structure reflects the actual MongoDB document's top-level field "home"
const agfencedataSchema = new Schema({
    home: homeSchema
});

// Explicitly define the collection name in lowercase
const agfencedata = mongoose.models.agfencedata || model('agfencedata', agfencedataSchema, 'agfencedata');

export default agfencedata;