const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.status(200).json('Hello world');
})

app.get('/site', (req, res) => {
    res.status(200).json(req.headers)
})

app.get('/env', (req, res) => {
    const host = process.env.MY_NAME
    res.status(200).json({
      'sitename': process.env.WEBSITE_SITE_NAME || 'sitename not found',
      'resourcegroup': process.env.WEBSITE_RESOURCE_GROUP || 'resourcegroup not found',
      'hostname': process.env.WEBSITE_HOSTNAME || 'hostname not found',
      'picccardrandom': process.env.PICCCARD_RANDOM || 'hostname not found',
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
