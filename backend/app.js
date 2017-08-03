const express = require('express'),
      request = require('superagent');

const app = express();

const meetupApiKey = '3f105e317968a206b2c3156c343e71';

app.get('/api/meetups/:lat/:lon', function (req, res) {
  request.get(`https://api.meetup.com/find/events?lat=${req.params.lat}&lon=${req.params.lon}&key=${meetupApiKey}&sign=true`).end((error, response) => {
      if (error) {
          // TODO handle error in some way
      }

      res.json(response.body);
  });
})


module.exports = app;
