// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

// Query the database and return all heroes
export async function getHeroes() {
  // Define the SQL query to fetch all heroes from the 'heroes' table  
  const text = "SELECT * FROM heroes";
  const result = await pool.query(text)
  // Use the pool object to send the query to the database
  // return the result
  return result.rows
}

// Query the database and return the hero with a matching id or null
export async function getHeroById(id) {
  // Define the SQL query to fetch hero corrisponding to the request.params.id from 'heroes' table
  const text= "SELECT * FROM heroes WHERE id = $1"
  const result = await pool.query(text,[id])
  // Use the pool object to send the query to the database
  // return the result or null
  return result.rows[0] || null
}

// Query the database to create an hero and return the newly created hero
export async function createHero(resource) {
  // Define the SQL query to fetch an hero corrisponding to the request.dody and add it to 'heroes' table
  // Use the pool object to send the query to the database
  // return the result or null
}

// Query the database to update the hero and return the newly updated hero or null
export async function updateHeroById(id, updates) {
  // Define the SQL query to fetch an hero corrisponding to the request.params.id and update it to 'heroes' table
  // Use the pool object to send the query to the database
  // return the result or null
}

// Query the database to delete the resource and return the deleted resource or null
export async function deleteHeroById(id) {
  // Define the SQL query to fetch an hero corrisponding to the request.params.id and delete it from 'heroes' table
  // Use the pool object to send the query to the database
  // return the result or null
}
