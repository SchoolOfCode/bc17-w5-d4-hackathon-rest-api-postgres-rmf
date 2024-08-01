// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getCreators() {
  // Query the database and return all creators
}

export async function getCreatorById(id) {
  // Query the database and return the creator with a matching id or null
}

export async function createCreator(resource) {
  // Query the database to create a creator and return the newly created creator
}

export async function updateCreatorById(id, updates) {
  // Query the database to update the creator and return the newly updated creator or null
}

export async function deleteResourceTwoById(id) {
  // Query the database to delete the creator and return the deleted creator or null
}
