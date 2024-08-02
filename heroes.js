import { pool } from "./db/index.js";

export async function getHero() {
  const textQuery = `SELECT * FROM heroes`;
  const result = await pool.query(textQuery);

  return result.rows;
}

async function idGenerator() {
  const data = await pool.query(`SELECT * FROM heroes`);
  const id = data.rows.length + 1;

  return id;
}

export async function getHeroById(id) {
  const textQuery = `SELECT * FROM heroes WHERE id = $1`;
  const result = await pool.query(textQuery, [id]);

  return result.rows[0] || null;
}

export async function createHero(hero) {
  const text = `
  INSERT INTO heroes
  VALUES ($1, $2, $3, $4)
  RETURNING *;`;
  const result = await pool.query(text, [
    await idGenerator(),
    hero.hero_name,
    hero.real_name,
    hero.first_appearance,
  ]);

  return result.rows[0] || null;
}

export async function updateHeroById(id, hero) {
  const text = `
    UPDATE heroes
    SET hero_name = $2, real_name = $3, first_appearance = $4
    WHERE id = $1
    RETURNING *;`;
  const result = await pool.query(text, [
    id,
    hero.hero_name,
    hero.real_name,
    hero.first_appearance,
  ]);

  return result.rows[0] || null;
}

export async function deleteHeroById(id) {
  const text = `
  DELETE FROM heroes 
  WHERE id = $1
  RETURNING *;`;
  const result = await pool.query(text, [id]);

  return result.rows[0] || null;
}
