const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");


const app = require("./app");

// database connection
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.Db_PASS}@cluster0.yiw1nyf.mongodb.net/?retryWrites=true&w=majority`).then(() => {
    console.log(`Database connection is successful 🛢`.red.bold);
});

// mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fna0i.mongodb.net/?retryWrites=true&w=majority`).then(() => {
//     console.log(`Database connection is successful 🛢`.red.bold);
// });
// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running on port ${port}`.yellow.bold);
});