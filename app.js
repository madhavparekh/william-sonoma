/*
 *  Created a dummy API to fix CORS issue
 *
 */

const express = require('express');
const cors = require('cors');
const app = express();
const request = require('superagent');

app.use(cors());

const port = 4000;
const LISTING_URL =
  'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';

app.get('/api', (req, res) => {
  request.get(LISTING_URL).then((data) => {
    res.send(data.body);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
