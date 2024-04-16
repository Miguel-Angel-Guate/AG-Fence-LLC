import mongoose, { Schema } from "mongoose";

// Define a sub-schema for menu items
const menuItemSchema = new Schema({
  title: {
    type: String,
    required: true // Ensures 'title' is always provided
  },
  link: {
    type: String,
    required: true // Ensures 'link' is always provided
  }
}, { _id: false }); // Prevents MongoDB from automatically adding an _id to each menu item

// Define the schema for the header
const navSchema = new Schema({
  call: {
    type: String,
    required: true // Ensures 'call' is always provided
  },
  phone: {
    type: String,
    required: true // Ensures 'phone' is always provided
  },
  menu: [menuItemSchema], // Use the menuItemSchema for the 'menu' field
  menuMobile: [menuItemSchema]
});

// Create the model from the schema
const Nav = mongoose.models.Nav || mongoose.model("Nav", navSchema);

export default Nav;
