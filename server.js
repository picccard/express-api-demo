const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(JSON.stringify('Hello world'))
})

app.get('/site', (req, res) => {
    res.send(JSON.stringify('Response from the /site endpoint'))
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})