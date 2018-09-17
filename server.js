const express = require('express');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration)

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/v1/users', (req, res) => {
  database('users').select()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({error});
    })
});

app.listen(port, () => console.log(`Listening on port ${port}`));