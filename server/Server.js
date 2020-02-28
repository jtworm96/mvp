const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const axios = require('axios');
const Port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname + '/../dist')));

app.post('/data', (req, res) => {
  axios.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${req.body.lat},${req.body.lng}&radius=24140&keyword=pregnancy&key=AIzaSyAjLZuVVCCvOzD1mGHxNw9ioIsjmnPedOQ`)
  .then((data) => {
    console.log(data.data.results)
    res.send(data.data.results);
  })
  .catch((err) => {
    res.send(err);
  });
});

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});