const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

const authRoute = require('./routes/auth.route');
const hiringManagerRoute = require('./routes/hiringManger.route');
const candidateRoute = require('./routes/candidate.route');
const adminRoute = require('./routes/admin.route');

// DBConnect();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yiw1nyf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log("Connected to database");
});


app.get("/", (req, res) => {
    res.send("server is running");
});

app.use('/user', authRoute);
app.use('/', hiringManagerRoute);
app.use('/', candidateRoute);
app.use('/', adminRoute);


app.all("*", (req, res) => {
    res.send("No route found.");
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});