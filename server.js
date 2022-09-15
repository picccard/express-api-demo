const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).json('Hello world');
})

app.get('/site', (req, res) => {
    res.status(200).json(req.headers)
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})