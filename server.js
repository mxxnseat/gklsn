const fs = require("fs");
const http = require("http");


const server = http.createServer((req, res)=>{
    const publicPath = './public';

    let body = null;
    try {
      body = fs.readFileSync(`${publicPath}${req.url}`);
    } catch (e) {
      console.log(e);
      body = fs.readFileSync(`${publicPath}/index.html`);
    }
  
    res.end(body);
});


const PORT = process.env.PORT || 12512;
server.listen(PORT);