const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration (only allow requests from React app running on port 3000)
app.use(cors({
  origin: 'http://localhost:3000', // Your React app URL
}));

// Middleware to parse incoming JSON data
app.use(express.json()); // Parses application/json requests

// MongoDB connection URI for the 'bs' database
const mongoURI = 'mongodb://127.0.0.1:27017/bs'; // Connect to the 'bs' database

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected successfully!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });

  const reviewSchema = new mongoose.Schema({
    isbn: { type: String, required: true },
    name: { type: String, required: true },
    review: { type: String, required: true },
    time: { type: Date, default: Date.now }
  }, {
    versionKey: false // Disable the `__v` field
  });
  

// Create the Review model based on the schema
const Review = mongoose.model('Review', reviewSchema,'review');

// Endpoint to create a new review (POST request)
app.post('/review', async (req, res) => {
  try {
    // Extract review data from the request body
    const { isbn, name, review } = req.body;

    // Create a new Review document
    const newReview = new Review({
      isbn,
      name,
      review,
    });

    // Save the review to the database
    await newReview.save();

    // Return a success response
    res.status(201).json({ message: 'Review created successfully!', review: newReview });
  } catch (err) {
    console.error('Error creating review:', err);
    res.status(500).json({ message: 'Error creating review' });
  }
});

// Endpoint to fetch reviews by ISBN (GET request)
app.get('/reviews/:isbn', async (req, res) => {
    const { isbn } = req.params;  // Extract the ISBN from the URL parameter
    
    try {
      // Find reviews in the 'review' collection where the ISBN matches the given parameter
      const reviews = await Review.find({ isbn });
  
      // Check if no reviews were found for the given ISBN
      if (reviews.length === 0) {
        return res.status(404).json({ message: `No reviews found for ISBN ${isbn}` });
      }
  
      // If reviews are found, return them as a JSON response
      res.status(200).json(reviews);
    } catch (err) {
      // Catch any errors and log them
      console.error('Error fetching reviews by ISBN:', err);
      res.status(500).json({ message: 'Error fetching reviews' });
    }
  });
  

// Endpoint to fetch all reviews (GET request)
app.get('/reviews', async (req, res) => {
    console.log('GET /reviews endpoint hit'); // Log when this route is hit
    try {
      // Fetch all reviews from the 'review' collection
      const reviews = await Review.find();
      res.status(200).json(reviews);
    } catch (err) {
      console.error('Error fetching reviews:', err);
      res.status(500).json({ message: 'Error fetching reviews' });
    }
  });

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
