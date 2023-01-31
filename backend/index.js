const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

dotenv.config();

// Créer une application Express
const app = express();
app.use(bodyParser.json());
app.use(express.json());

// CORS
const corsOptions = {
  origin: "http://localhost:3000",
};
const cors = require("cors");
app.use(cors(corsOptions));

const mongoUrl = process.env.MONGO_URI;

// Connecter à MongoDB
mongoose.connect(mongoUrl);
mongoose.set("strictQuery", true);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("connected", function () {
  console.log("Connected to MongoDB");
});

// Importer routes
const registerRoute = require("./routes/register");
const loginRoute = require("./routes/login");
const usersRoute = require("./routes/users.js");

// utiliser routes
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/users", usersRoute);




const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
