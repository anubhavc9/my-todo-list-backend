const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const pool = require('./db');
const path = require('path');
const app = express();

var distDir = __dirname + '/dist/';
app.use(express.static(__dirname + '/public'));
app.use(express.static(distDir));

const port = process.env.PORT || 5000;

app.use(cors());

app.use(bodyparser.json());

app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

// home route
app.get('/', (req, res) => {
  res.status(200).json({ info: 'Home route working successfully!' });
});

// get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query('SELECT * FROM todo');

    res.status(200).json(allTodos.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// create a todo
app.post('/todos', async (req, res) => {
  try {
    const { title, description, active } = req.body;
    const newTodo = await pool.query(
      'INSERT INTO todo (title, description, active) VALUES ($1,$2,$3) RETURNING *',
      [title, description, active]
    );

    res.status(201).json(newTodo.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// delete a todo
app.delete('/todos/:sno', async (req, res) => {
  // console.log(req.params);
  try {
    const { sno } = req.params;
    const deleteTodo = await pool.query('DELETE FROM todo WHERE sno = $1', [
      sno,
    ]);
    res.status(200).json('todo was successfully deleted!');
  } catch (error) {
    console.log(err.message);
  }
});

// update a todo
app.put('/todos/:sno', async (req, res) => {
  // console.log(req.params);
  try {
    const { sno } = req.params;
    const { title, description, active } = req.body;
    const updateTodo = await pool.query(
      'UPDATE todo SET title = $1, description = $2, active = $3 WHERE sno = $4',
      [title, description, active, sno]
    );

    res.status(200).json(`todo with sno:${sno} was successfully updated!`);
  } catch (error) {
    console.log(err.message);
  }
});

app.listen(port, () => {
  console.log(`Node server started at port ${port}`);
});
