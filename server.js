const fs = require("fs");
const http = require("http");


const server = http.createServer((request, response) => {
    let file;
    let regExp = /^\/\w+.\w{1,4}$/i.exec(request.url);
    switch (request.url) {
        case '/':
            file = fs.readFileSync('./public/index.html');
            break;
        case regExp !== null && regExp.input:
                try {
                    file = fs.readFileSync(`./public${regExp.input}`);                    
                } catch (e) {
                    console.log(e.message);
                }
            break;
    }

    response.end(file);
})

const PORT = process.env.PORT || 3322;

server.listen(PORT);