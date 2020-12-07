const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('will run before any route');
  next();
});

app.get('/', function(req, res, next) {
	console.log('route / called');
  res.send('Hello World!');
});

app.listen(3000, () => {
    console.log('app is running');
});

