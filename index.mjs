// app.js
import express from 'express';
import json  from 'body-parser';
import  authRoute  from './routes/login.mjs'; // Import the auth route
import connectDB from './config/db.mjs';

import dotenv from 'dotenv';
dotenv.config();

const app = express()
app.use(json());


connectDB();
// Routes
app.use('/login', authRoute); // Use the auth route for login

// ... other routes and middleware ...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
