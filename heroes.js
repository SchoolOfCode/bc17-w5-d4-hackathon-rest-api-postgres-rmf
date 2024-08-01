// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getHeroes() {
  // Query the database and return all heroes
}

export async function getHeroById(id) {
  // Query the database and return the hero with a matching id or null
}

export async function createHero(resource) {
  // Query the database to create an hero and return the newly created hero
}

export async function updateHeroById(id, updates) {
  // Query the database to update the hero and return the newly updated hero or null
}

export async function deleteHeroById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}
