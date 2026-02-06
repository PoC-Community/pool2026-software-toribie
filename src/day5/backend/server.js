const express = require('express');
var morgan = require('morgan');
const cors = require('cors');
const app = express();
const errorHandler = require('./errorHandler')
const PORT = 3000;

let tasks = [
  { id: 1, text: 'Example task', completed: false }
];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(morgan('[:date] :method - :url'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/dog', async (req, res) => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dog' });
  }
});

// GET /api/tasks - List all tasks
app.get('/api/tasks', (req, res) => {
  res.json(tasks);
});

// GET /api/tasks/:id - Get a task by ID.
app.get('/api/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

//PUT /api/tasks/:id - Updates task by ID
app.put('/api/tasks/:id', (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const index = tasks.findIndex(id);
  if (index !== -1) {
    tasks[index].text = data.text;
    tasks[index].completed = data.completed;
  } else {
    res.status(404).json({ error: 'ID not found'});
  }
});

app.use(errorHandler);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
