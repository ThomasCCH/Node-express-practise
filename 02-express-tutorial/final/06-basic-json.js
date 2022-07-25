const express = require('express');
const app = express()
const {products} = require('./data')

// create the api(JSON) using data in data.js
app.get('/', (req, res) => {
    res.json(products)
}
)

app.listen(5000, () => {
    console.log('server is on port')
})