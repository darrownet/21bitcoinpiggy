const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

//CORS middleware
app.use(cors({origin: '*'}));

// DB Config
const db = require("./config/keys").mongoURI;

//Prepare for Mongoose 7 `strictQuery` deprecation.
mongoose.set('strictQuery', false);

// Connect to MongoDB
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

const port = 1884;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
