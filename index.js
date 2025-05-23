
const express = require("express");
const dotEnv = require("dotenv");
const mongoose = require('mongoose');
const vendorRoutes = require('./routes/vendorRoutes');
const bodyparser = require('body-parser');
const firmRoutes = require('./routes/firmRoutes');
const productRoutes = require('./routes/productRoutes') 
const path = require('path');

const app = express()

const PORT = process.env.PORT || 4300;

dotEnv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB connected is successfully"))
.catch((error)=>console.log(error))


app.use(bodyparser.json());
app.use('/vendor',vendorRoutes);
app.use('/firm', firmRoutes);
app.use('/product', productRoutes);
app.use('/uploads', express.static('uploads'));

app.listen(PORT, ()=>{
    console.log(`Server started and running at ${PORT}`);

});

app.use('/', (req, res)=>{
    res.send("<h1>Welcome to Khavo</h1>");
});