
const bcrypt = require('bcryptjs');
const express = require('express');
const Cluster_DataBase = require('./config/database'); 
require('dotenv').config();


const userRoutes = require('./routes/userRoutes');


const app = express();
app.use(express.json());


app.use((req, res, next) => {
    console.log(`${req.method} request to: ${req.url}`);
    next();
});



app.use('/api/users', userRoutes);



app.use((req, res, next)=>{ 
    res.status(404).json("404 Page not found plese check URL");
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
});