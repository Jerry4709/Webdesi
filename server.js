const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Hello Web  Programming Technology</h1>')
    res.end('Hello, World!/n');
});

server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});



var url = require('url');

res.statusCode = 200;
res.setHeader ('Content-Type ', 'text/html');

//res.setHeader('Content-Type' , 'application/jion');
//res.setHeader('Content-Type' , 'application/jion');
//res.setHeader('Content-Type' , 'application/jion');

res.write('<h1>Hello Web Programming Techonology</h1>')
var params = url.parse(req.url,true).query;
res.end('Hello , World!\n' + params.name);