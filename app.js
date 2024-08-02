// Import the required modules
import express from "express";

// Import your helper functions for your first resource here
import {
  getHeroes,
  getHeroById,
  // createResourceOne,
  // updateResourceOneById,
  // deleteResourceOneById,
} from "./heroes.js";

// Import your helper functions for your second resource here
// import {
//   getResourceTwo,
//   getResourceTwoById,
//   createResourceTwo,
//   updateResourceTwoById,
//   deleteResourceTwoById,
// } from "./resource_two.js";

// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests

// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/heroes/", async function (req, res) {
  try {
    const result = await getHeroes();
    res.status(200).json({ status: true, payload: result });
  } catch (error) {
    res.status(400).send({ status: false, error: error });
  }
});

// Endpoint to retrieve a <resource_one> by id
app.get("/hero/:id", async function (req, res) {
  const data = req.params.id;
  try {
    const result = await getHeroById(data);
    res.status(200).json({ status: true, payload: result });
  } catch (error) {
    res.status(400).send({ status: false, error: error });
  }
});

// Endpoint to create a new <resource_one>
app.post("/hero/", async function (req, res) {});

// Endpoint to update a specific <resource_one> by id
app.patch("/hero:id", async function (req, res) {});

// Endpoint to delete a specific <resource_one> by id
app.delete("/hero/:id", async function (req, res) {});

// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/creator/", async function (req, res) {});

// Endpoint to retrieve a <resource_twos> by id
app.get("/creator/:id", async function (req, res) {});

// Endpoint to create a new <resource_twos>
app.post("/creator/", async function (req, res) {});

// Endpoint to update a specific <resource_twos> by id
app.patch("/creator/:id", async function (req, res) {});

// Endpoint to delete a specific <resource_twos> by id
app.delete("/creator/:id", async function (req, res) {});

// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
