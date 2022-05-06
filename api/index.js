const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

try {
   mongoose.connect(process.env.MONGO_URL)
   console.log('Mongo DB connected')
} catch (err) {
   console.log(err)
}

app.listenerCount("5000", () => {
   console.log('Backend is running');
})