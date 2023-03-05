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
    } else if(req.url === "/message" && req.method === 'POST') {
        //to capture data coming through the request
        //whenever there is a chunk of data, we need to capture it
        const reqData = [];
        req.on('data', (chunk)=> {
            reqData.push(chunk);
        })
        //once the data stream ends, we need to consolidate using Buffer
        //later we write the request data into text file
        req.on('end', ()=> {
            const data = Buffer.concat(reqData).toString();
            //here we are writing into a file synchronously which blocks the flow 
            //until the file is created and data is written. Refer appv3.js for updates
            fs.writeFileSync('message.txt', data);
        })
        
        res.statusCode = 302;
        res.setHeader('Location', "/");
        res.end();
        return;
    }
}
);

server.listen(8090);