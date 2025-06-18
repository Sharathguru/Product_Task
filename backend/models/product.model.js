import { Schema, model } from 'mongoose';

const productSchema = new Schema({
  Series_No: {
    type: Number,
    required: true,
  },
  Product_Purchase_Date: {
    type: Date,
    required: true,
  },
  Product_Name: {
    type: String,
    required: true,
  },
  Product_Dealership: {
    type: String,
    required: true,
  },
});

const Product = model("Product", productSchema);

export default Product;