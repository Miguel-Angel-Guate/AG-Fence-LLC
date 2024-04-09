import mongoose, {
    Schema
} from "mongoose";

// Define the schema for the footer data
const footerDataSchema = new Schema({
    footerDescription: String,
    explore: {
        title: String,
        menu: [{
            title: String,
            link: String
        }]
    },
    professional: {
        title: String,
        menu: [{
            title: String,
            link: String
        }]
    },
    contact: {
        phone: String,
        mail: String,
        address: String
    },
    copyright: String
}, {
    collection: 'footerdatas' // Explicitly set the collection name
});

// Create the model or use the existing one if it's already been created in the current session
const Footerdata = mongoose.models.Footerdata || mongoose.model('Footerdata', footerDataSchema);

export default Footerdata;