import express from "express";
import {
  getHero,
  getHeroById,
  createHero,
  updateHeroById,
  deleteHeroById,
} from "./heroes.js";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

// GET ALL HEROES
app.get("/hero/", async function (req, res) {
  try {
    const result = await getHero();
    res.status(200).json({ status: true, payload: result });
  } catch (error) {
    res
      .status(400)
      .send({ status: "Error: 400. Bad request", error: error.message });
  }
});

// GET HERO BY ID
app.get("/hero/:id", async function (req, res) {
  const data = req.params.id;
  try {
    const result = await getHeroById(data);
    if (result === null) {
      res.status(404).send({
        status: null,
        error: "The ID does not exist",
      });
    }
    res.status(200).json({ status: "success", payload: result });
  } catch (error) {
    res
      .status(400)
      .send({ status: "Error: 400. Bad request", error: error.message });
  }
});

// ADD HERO
app.post("/hero/", async function (req, res) {
  try {
    const hero = req.body;
    const result = await createHero(hero);
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    res
      .status(400)
      .json({ status: "Error: 400. Bad request", data: error.message });
  }
});

//  UPDATE HERO BY ID
app.patch("/hero/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const updates = req.body;
    const result = await updateHeroById(id, updates);
    if (result === null) {
      res.status(404).send({
        status: null,
        error: "The ID does not exist",
      });
    }
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    console.error("Error updating hero:", error);
    res
      .status(400)
      .json({ status: "Error: 400. Bad request", data: error.message });
  }
});

// DELETE HERO BY ID
app.delete("/hero/:id", async function (req, res) {
  try {
    const id = req.params.id;
    const result = await deleteHeroById(id);
    if (result === null) {
      res.status(404).send({
        status: null,
        error: "The ID does not exist",
      });
    }
    res.status(200).json({ status: "success", data: result });
  } catch (error) {
    console.error("Error updating hero:", error);
    res
      .status(400)
      .json({ status: "Error: 400. Bad request", data: error.message });
  }
});

app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});
