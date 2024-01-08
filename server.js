const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/countdowntimer', { useNewUrlParser: true, useUnifiedTopology: true });

// Check the connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB successfully');
});

const countdownSchema = new mongoose.Schema({
  targetDate: Date,
});

const Countdown = mongoose.model('Countdown', countdownSchema);

app.get('/api/countdown', async (req, res) => {
  try {
    const countdownData = await Countdown.findOne();
    res.json(countdownData);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
