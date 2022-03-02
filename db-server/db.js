const express = require("express");
const cors = require("cors");
const loadData = require("./connection.js");

// App config
const app = express();
const port = 8686;

// Middleware
app.use(express.json());
app.use(cors());

// DB config
let data = loadData();

// Api route
app.get("/", (req, res) => res.status(200).json(data));
// Listen
app.listen(port, () => console.log(`Listening on the port: ${port}`));
