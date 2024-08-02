import { pool } from "../index.js";

// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<

async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS heroes CASCADE;
        DROP TABLE IF EXISTS creators CASCADE;
        DROP TABLE IF EXISTS superpowers CASCADE;
    `);

    // Create the heroes table
    await pool.query(`     
    CREATE TABLE heroes (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,  -- Primary key for the heroes
      hero_name VARCHAR(50) NOT NULL,   -- Name of the hero
      real_name VARCHAR(50) NOT NULL,   -- Real name of the hero
      first_appearance DATE    -- Date of the hero's first appearance
    );
   `);

    // Create the creators table with a foreign key referencing heroes
    await pool.query(`
    CREATE TABLE creators (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,   -- Primary key for the creators
      creator_name VARCHAR(100), -- Name of the creator
      date_of_release DATE,      -- Date of release for their works
      comics_produced INT,       -- Number of comics produced
      hero_id INT,               -- Foreign key referencing heroes
      FOREIGN KEY (hero_id) REFERENCES heroes(id)  -- Foreign key constraint
    );
   `);

    // Create the superpowers table with a foreign key referencing heroes
    await pool.query(`
       CREATE TABLE superpowers (
        id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,  -- Primary key for the superpowers
        hero_id INT,              -- Foreign key referencing heroes
        superpower VARCHAR(100),  -- Description of the superpower
        FOREIGN KEY (hero_id) REFERENCES heroes(id)  -- Foreign key constraint
    );
    `);

    // Insert data into heroes
    await pool.query(`
      INSERT INTO heroes (id, hero_name, real_name, first_appearance)
      VALUES
      (1, 'Spider-Man', 'Peter Parker', '1962-08-01'),
      (2, 'Iron Man', 'Tony Stark', '1963-03-01'),
      (3, 'Captain America', 'Steve Rogers', '1941-03-01');
    `);

    // Insert data into creators with references to heroes
    await pool.query(`
      INSERT INTO creators (id, creator_name, date_of_release, comics_produced, hero_id)
      VALUES
      (1, 'Stan Lee and Steve Ditko', '1962-08-01', 38, 1),
      (2, 'Stan Lee, Larry Lieber, Don Heck, and Jack Kirby', '1963-03-01', 250, 2),
      (3, 'Joe Simon and Jack Kirby', '1941-03-01', 75, 3);
    `);

    // Insert data into superpowers with references to heroes
    await pool.query(`
      INSERT INTO superpowers (id, hero_id, superpower)
      VALUES
      (1, 1, 'Superhuman strength'),
      (2, 1, 'Superhuman agility and reflexes'),
      (3, 1, 'Spider-sense (danger detection)'),
      (4, 2, 'Powered armor suit providing superhuman strength'),
      (5, 2, 'Flight capability via his suit'),
      (6, 2, 'Advanced weaponry integrated into his suit'),
      (7, 3, 'Enhanced strength'),
      (8, 3, 'Enhanced agility and endurance'),
      (9, 3, 'Mastery in using his nearly indestructible shield');
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
