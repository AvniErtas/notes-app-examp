//* İnitialization
const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Note = require("./models/Note");

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());
// true -> Nested Objects (Correct)
// false -> Nested Objects (Not Corect)

const mongoDbPath =
  "mongodb+srv://avniertas:..cFP934eUUUU@cluster0.ytmvd7b.mongodb.net/notesdb?retryWrites=true&w=majority";

mongoose.connect(mongoDbPath).then(() => {
  app.get("/", (req, res) => {
    const response = { message: "API Works!" };
    res.json(response);
  });

  const noteRouter = require("./routes/Note");
  app.use("/notes", noteRouter); //! /notes/add ,
});

const PORT = process.env.port || 5000 

//* Starting the server on a PORT
app.listen(PORT, () => {
  console.log(`Server started at PORT : ${PORT}`);
});
