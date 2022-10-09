const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

const authRoute = require('./routes/auth.route');

// DBConnect();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yiw1nyf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to database");
});


// server
app.get("/", (req, res) => {
    res.send("server is running");
});


app.use('/user', authRoute);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
