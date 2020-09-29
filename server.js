const express = require('express');

const app = express();

app.use(express.static('./dist/teste-timepicker'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/teste-timepicker/'}),
);

app.listen(process.env.PORT || 8080);
