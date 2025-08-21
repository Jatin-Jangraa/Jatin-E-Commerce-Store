import mongoose from 'mongoose';
const productschima = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        dafault: 0,
    },
    quantity: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
    image: {
        type: [String],
        default: [],
    },
    colors: {
        type: [String],
    },
    rating: {
        type: [Number],
    },
    category: {
        type: String,
    },
    subcategory: {
        type: String,
    }
}, { timestamps: true });
const ProductData = mongoose.model("ProductData", productschima);
export default ProductData;
