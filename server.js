const express = require('express');
const bodyParser = require('body-parser');
const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
const database = require('knex')(configuration)

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.set('port', port)

app.get('/api/v1/users', (req, res) => {
  database('users').select()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({error});
    })
});

app.post('/api/v1/users', (req, res) => {
  const user = req.body;
  for (let requiredParameter of ['username', 'password']) {
    if (!user[requiredParameter]) {
      return res
        .status(422)
        .send({ error: `Expected format: { name: <String> }. You're missing a "${requiredParameter}" property.`});
    }
  }

  database('users').insert(user, 'id')
    .then(user_id => {
      res.status(201).json({ id: user_id[0] })
    })
    .catch(error => {
      res.status(500).json({error});
    })
});

app.get('/api/v1/files/:userID', (req, res) => {
  const { userID } = req.params;

  if (!userID) {
    return res
      .status(422)
      .send({ error: `You're missing a "userID" property.` });
  }

  database('files').where('user_id', userID).select()
    .then(files => {
      if (files[0]) {
        res.status(200).json(files)
      } else {
        res.status(404).json({ error: 'No files found for that user ID, please ensure the ID is correct, or add some files!'} )
      }
    })
    .catch(error => {
      res.status(500).json({ error });
    })
})

app.listen(port, () => console.log(`Listening on port ${port}`));