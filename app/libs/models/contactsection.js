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
    image: {
        type: String,
        required: true
    }
});

// Main schema that includes the contact form section and the form fields
const contactFormSchema = new Schema({
    contactFormSection: contactFormSectionSchema,
    formFields: [formFieldSchema]
}, {
    collection: 'contactsections' // Explicitly set the collection name
});

// Create the model or use the existing one if it's already been created in the current session
const ContactForm = mongoose.models.ContactForm || mongoose.model('Contactsections', contactFormSchema);

export default ContactForm;