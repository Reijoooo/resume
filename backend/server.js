// backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Разрешить CORS для взаимодействия с React
app.use(cors());

// Пример маршрута API
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
