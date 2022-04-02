const express = require('express');
const path = require('path');

const app = express();

const port = 1212;

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.get('/', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on the port::${port}`);
});

app.get('*', function (req, res) {
  res.sendFile(path.join(distPath, 'index.html'));
});
