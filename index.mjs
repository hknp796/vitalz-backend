// app.js
import express from 'express';
import json  from 'body-parser';
import cors from 'cors'
import  authRoute  from './routes/login.mjs'; // Import the auth route
import  register  from './routes/register.mjs'; // Import the auth route
import member  from './routes/members.mjs';
import coaches  from './routes/coaches.mjs';
import connectDB from './config/db.mjs';

import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.use(json());
app.use(cors())

connectDB();
// Routes
app.use('/login', authRoute); 
app.use('/register', register); 
app.use('/members',member)
app.use('/coaches',coaches)

// ... other routes and middleware ...

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
export default  app
