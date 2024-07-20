const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');

// Set up multer for handling file uploads
const upload = multer();

// Import routes
const productRoute = require('./routes/api/productRoute');

// Define constants for MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://mongo/yolomy';
const PORT = process.env.PORT || 5000;

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());  // Body parser middleware
app.use(upload.array());  // Multer middleware
app.use(cors());          // Enable CORS

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected successfully');
}).catch((error) => {
    console.error('Database connection error:', error);
});

// Use routes
app.use('/api/products', productRoute);

// Start server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
