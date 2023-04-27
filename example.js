const express = require('express');
const app = express();

// Middleware to parse request body as JSON
app.use(express.json());

// Get all fitness programs
app.get('/fitnessPrograms', async (req, res) => {
  try {
    const fitnessPrograms = await FitnessProgram.find();
    res.json(fitnessPrograms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one fitness program by ID
app.get('/fitnessPrograms/:id', getFitnessProgram, (req, res) => {
  res.json(res.fitnessProgram);
});

// Create a new fitness program
app.post('/fitnessPrograms', async (req, res) => {
  const fitnessProgram = new FitnessProgram({
    name: req.body.name,
    exercises: req.body.exercises
  });

  try {
    const newFitnessProgram = await fitnessProgram.save();
    res.status(201).json(newFitnessProgram);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a fitness program by ID
app.patch('/fitnessPrograms/:id', getFitnessProgram, async (req, res) => {
  if (req.body.name != null) {
    res.fitnessProgram.name = req.body.name;
  }

  if (req.body.exercises != null) {
    res.fitnessProgram.exercises = req.body.exercises;
  }

  try {
    const updatedFitnessProgram = await res.fitnessProgram.save();
    res.json(updatedFitnessProgram);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a fitness program by ID
app.delete('/fitnessPrograms/:id', getFitnessProgram, async (req, res) => {
  try {
    await res.fitnessProgram.remove();
    res.json({ message: 'Fitness program deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Middleware function to get a fitness program by ID
async function getFitnessProgram(req, res, next) {
  let fitnessProgram;
  try {
    fitnessProgram = await FitnessProgram.findById(req.params.id);
    if (fitnessProgram == null) {
      return res.status(404).json({ message: 'Fitness program not found' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.fitnessProgram = fitnessProgram;
  next();
}

// Start the server
app.listen(3000, () => console.log('Server started'));
