import express from 'express'

var app = express()

app.get('/', function (req, res) {
  res.send('Hello app written in ES6!')
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})