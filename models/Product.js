import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    product: String,
    brand: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    stock: Number
})

const Product = mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product;