const express = require('express');
const app = express();
const PORT = 3000;

const vehicles = require('./data/vehicle');

app.use(express.json()); // Middleware to parse JSON

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Vehicle API 🔧🚗');
});

// Get all vehicles
app.get('/vehicles', (req, res) => {
  res.json(vehicles);
});

// Get one vehicle by ID
app.get('/vehicles/:id', (req, res) => {
  const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));
  if (!vehicle) return res.status(404).send('Vehicle not found');
  res.json(vehicle);
});

// Add a new vehicle
app.post('/vehicles', (req, res) => {
  const newVehicle = {
    id: vehicles.length + 1,
    modelName: req.body.modelName,
    vehicleName: req.body.vehicleName,
    price: req.body.price,
    image: req.body.image,
    description: req.body.description,
    brand: req.body.brand
  };
  vehicles.push(newVehicle);
  res.status(201).json(newVehicle);
});

// Update a vehicle
app.put('/vehicles/:id', (req, res) => {
  const vehicle = vehicles.find(v => v.id === parseInt(req.params.id));
  if (!vehicle) return res.status(404).send('Vehicle not found');

  Object.assign(vehicle, req.body);
  res.json(vehicle);
});

// Delete a vehicle
app.delete('/vehicles/:id', (req, res) => {
  const index = vehicles.findIndex(v => v.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).send('Vehicle not found');

  const deleted = vehicles.splice(index, 1);
  res.json(deleted[0]);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
