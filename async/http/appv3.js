const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        res.end();
        return;
    } else if (req.url === "/message" && req.method === 'POST') {
        const reqData = [];
        req.on('data', (chunk) => {

            reqData.push(chunk);
        })
        req.on('end', () => {

            const data = Buffer.concat(reqData).toString();
            //here we are writing into a file asynchronously 
            //last param being an arrow function is a callback to be performed, 
            //once writing is done / error occurs
            fs.writeFile('message.txt', data, (err) => {
                //if there is any error, need to add err handling
                if (err)
                    console.log("Error occurred during request processing")
                //basically we are writing asynchronously and once done, we are returning 
                res.statusCode = 302;
                res.setHeader('Location', "/");
                res.end();

                return;
            });
        })


    }
}
);

server.listen(8090);