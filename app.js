// Import the required modules
import express from "express";

// Import your helper functions for your first resource here
import {
getHeroes,
getHeroById,
createHero,
//   updateResourceOneById,
//   deleteResourceOneById,
} from "./hero.js";

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

// Endpoint to retrieve all <hero>
app.get("/hero/", async function (req, res) {
try {
  const result = await getHeroes()
  res.status (200).json({status: true, data: result})
}
  catch (error) {
  res.status (404).json({status: 'Error: 404. Heros not found', data: error})
  }
});


// Endpoint to retrieve a <hero> by id
app.get("/hero/:id", async function (req, res) {
  try {
  const data = req.params.id;
  const result = await getHeroById(data)
  res.status (200).json ({status: 'success', data: result})
  } catch (error){
    res.status (404).json({status: 'Error: 404. Id not found', data: error})
  }
})

// Endpoint to create a new <hero>
app.post("/hero/", async function (req, res) {
    const data = req.body;
    console.log(data)    
    res.json(data)    
    const result = await createHero(data.hero_name, data.real_name, data.first_appearance)
    res.status (200).json ({status: 'success', data: result})


    //await createHero(body)

});
 
// Endpoint to update a specific <resource_one> by id
app.patch("/hero/:id", async function (req, res) {});

// Endpoint to delete a specific <resource_one> by id
app.delete("/hero/:id", async function (req, res) {});

// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/resourcetwo/", async function (req, res) {
  const authors = await getAuthors();
  res.status(200).json({ status: "success", data: authors });
});


// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
