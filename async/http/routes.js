const fs = require("fs");

const requestHandler = (req, res) => {
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
//This is one way of exporting from a JS file
module.exports = {
    requestHandler: requestHandler,
    APP_CONSTANT_MESSAGE: "Test"
}
//Even these are valid
// module.exports.requestHandler = requestHandler;
// module.exports.APP_CONSTANT_MESSAGE = "Helloo"