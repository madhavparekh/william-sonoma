/*
 *  Created a dummy API to fix CORS issue
 *
 */

const express = require('express');
const cors = require('cors');
const request = require('superagent');
const path = require('path');

const app = express();

app.use(cors());

const port = process.env.PORT || 4000;

const LISTING_URL =
  'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';

app.get('/api', (req, res) => {
  request.get(LISTING_URL).then((data) => {
    res.send(data.body);
  });
});

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
