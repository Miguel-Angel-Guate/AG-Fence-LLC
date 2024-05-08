import mongoose, {
    Schema
} from "mongoose";

// Schema for individual form fields
const formFieldSchema = new Schema({
    label: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    placeholder: String,
    required: {
        type: Boolean,
        required: true
    }
});

// Schema for the contact form section
const contactFormSectionSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
});
// Define the schema for the form leyends
const FormLeyendsSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    },
    button: {
        type: String,
        required: true
    }
});

// Main schema that includes the contact form section and the form fields
const contactFormSchema = new Schema({
    contactFormSection: contactFormSectionSchema,
    formFields: [formFieldSchema],
    formLeyends: FormLeyendsSchema
}, {
    collection: 'contactsections' // Explicitly set the collection name
});

// Create the model or use the existing one if it's already been created in the current session
// Correct way to check if the model exists and avoid recompiling it
const ContactForm = mongoose.models.ContactForm || mongoose.model('ContactForm', contactFormSchema, 'contactsections');

export default ContactForm;