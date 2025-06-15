const dotenv = require('dotenv');  
dotenv.config();                     

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const Product = require('./models/product');

const seedData = async () => {
    await connectDB();

    const Products = [
        {
            name: 'T-Shirt',
            brand: 'Brand A',
            price: 190000,
            color: 'Red',
            size: ['M', 'L']
        },
        {
            name: 'Jeans',
            brand: 'Brand B',
            price: 390000,
            color: 'Blue',
            size: ['L', 'XL']
        },
        {
            name: 'Jacket',
            brand: 'Brand C',
            price: 500000,
            color: 'Black',
            size: ['XL', 'M']
        }
    ];

    try {
        await Product.deleteMany(); 
        await Product.insertMany(Products); 
        console.log(' Data seeded berhasil rekk');
    } catch (error) {
        console.error('Error jok:', error);
    } finally {
        mongoose.connection.close(); 
    }
};

seedData();
