// index.js
const express = require('express')
const app = express()
const PORT = 4000
const ai = require('./api/completion/route');

const router = express.Router();

router.use("/ai", ai);

app.get('/', (req, res) => {
  console.log('Welcome to the Express API');
  res.status(200).json('Welcome, your app is working well');
});

app.get('/ai', (req, res) => { 
    // ai 
    res.status(200).json('Welcome, your app is working well');
    // res.render(ai);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

// Export the Express API
module.exports = app