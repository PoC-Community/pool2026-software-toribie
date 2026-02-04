const express = require('express');
var morgan = require('morgan');
const app = express();
const errorHandler = require('./errorHandler')
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('[:date] :method - :url'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
