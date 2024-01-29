const express = require('express')
const app = express()
app.get('/profile/:username', function (req, res) {
  res.send(`Hello From ${req.params.username}`)
})

app.listen(3000)