const express = require('express')
const app = express()

//  req => middleware => res

// logger can also save in seperate JS file as normal functions
const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  // will get the method, which url and year client access
  console.log(method, url, time)
  // pass the middleware with next()
  next()
}

// logger is the middleware function
app.get('/', logger, (req, res) => {
  res.send('Home Page')
})
app.get('/about', logger, (req, res) => {
  res.send('About Page')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
