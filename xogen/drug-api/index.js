const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample drug data
const drugs = [
  {
    name: 'Aspirin',
    description: 'Aspirin is used to reduce fever, pain, and inflammation.',
  },
  {
    name: 'Dolo',
    description: 'Dolo is used to reduce fever, pain, and inflammation.',
  },
  {
    name: 'Ibuprofen',
    description: 'Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID).',
  },
  {
    name: 'Paracetamol',
    description: 'Paracetamol is used to treat pain and fever.',
  },
  // Add more drug data as needed
];

// Routes
app.get('/api/drugs/:name', (req, res) => {
  const drugName = req.params.name.toLowerCase();
  const drug = drugs.find((d) => d.name.toLowerCase() === drugName);

  if (drug) {
    res.json(drug);
  } else {
    res.status(404).json({ error: 'Drug not found' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
