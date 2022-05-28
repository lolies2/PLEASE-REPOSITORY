const http = require("http");
const server = http.createServer((req, res) => {
/* res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    });
    res.end("<h1>hi)))<h1>"); */
    res.writeHead(200,{'Content-type': 'application/json'});
    if(req.url == '/user'){
        res.end(JSON.stringify({id:1, name:"LEN DELAT NAME"}))
    }
    if(req.url == '/admin'){
        res.end(JSON.stringify({id:2, name:"LEN DELAT NAME"}))
    }
    else {
res.end(JSON.stringify({error:"404"}));

    }
    

    console.log("URL = ", req,url);
    console.log("Method =", req,method);
});

const port = 3000


server.listen(port);