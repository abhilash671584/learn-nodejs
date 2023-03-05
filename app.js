const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        res.end();
        return;
    } else if(req.url === "/message" && req.method === 'POST') {
        fs.writeFileSync('message.txt', "Test");
        res.statusCode = 302;
        res.setHeader('Location', "/");
        res.end();
        return;
    }
}
);

server.listen(8090);