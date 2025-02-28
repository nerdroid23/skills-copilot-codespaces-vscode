// Create web server
// 1. Create a web server
// 2. Create a route for GET /comments
// 3. Create a route for POST /comments
// 4. Create a route for PUT /comments/:id
// 5. Create a route for DELETE /comments/:id

// 1. Create a web server
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// 2. Create a route for GET /comments
app.get('/comments', (req, res) => {
  res.json([]);
});

// 3. Create a route for POST /comments
app.post('/comments', (req, res) => {
  res.json({ message: 'Comment created' });
});

// 4. Create a route for PUT /comments/:id
app.put('/comments/:id', (req, res) => {
  res.json({ message: 'Comment updated' });
});

// 5. Create a route for DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
  res.json({ message: 'Comment deleted' });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});