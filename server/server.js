const express = require('express')
const app = express();
require('dotenv').config();
const db = require('./db');
const morgan = require('morgan');
const cors = require('cors');

app.use(express.json());
app.use(cors())

app.get('/api/v1/restaurants', async (req, res) => {

  try {
    const result = await db.query("SELECT * FROM restaurants");
    res.status(200).json({
      status: "success",
      results: result.rows.length,
      data: {
        restaurants: result.rows,
      },
    });
    console.log(result)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

app.get('/api/v1/restaurants/:id', async (req, res) => {
  const id = req.params.id

  try {
      const result = await db.query(
        "SELECT * FROM restaurants where id = $1", [id]
      );
      res.status(200).json({
        status: "success",
        data: {
          restaurants: result.rows[0],
        },
      });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

})

app.post("/api/v1/restaurants", async (req, res) => {

  try {
    const { name, location, price_range } = req.body;
    const result = await db.query(
      "INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *",
      [name, location, price_range]
    );

    res.status(201).json({
      status: "success",
      data: {
        restaurants: result.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put('/api/v1/restaurants/:id', async (req, res) => {
  const id = req.params.id
  const { name, location, price_range } = req.body;

  try {
    const result = await db.query(
      "UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *",
      [name, location, price_range, id]
    );

    res.status(200).json({
      status: "success",
      data: {
        restaurants: result.rows[0],
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete('/api/v1/restaurants/:id', async (req, res) => {
  const id = req.params.id

  try {
    const result = await db.query(
      "DELETE FROM restaurants WHERE id = $1", [id]
    );

    res.status(200).json({
      status: "success",
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`)
})