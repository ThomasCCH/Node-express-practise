const http = require('http')
const {readFileSync} = require('fs')

// in place in the initail time, can use Sync
// get the html file with the path and will response it to client as below
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
  const url = (req.url)
  if(url === '/'){
  // HTTP status code 200 shown response sucessful
  // then header for writeHead
  res.writeHead(200,{'content-type' : 'text/html'});
  // end to signal the communication is over
  res.write(homePage)
  res.end()
  }
  else if(url === 'about'){
    res.writeHead(200, {'content-type' : 'text/html'})
    res.write('<h1>about page</h1>')
    res.end()
  }
  else{
    res.writeHead(404, {'content-type' : 'text/html'})
    res.write('<h1>404 Not Found</h1>')
    res.end()
  }
})

// 5000 below is the port only 
// random number like this used in development envirment only(a comunication endpoint)
// etc. 443 is HTTP Secure (HTTPS) HTTP over TLS/SSL
server.listen(5000)
