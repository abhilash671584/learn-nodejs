const http = require('http')
const srvr = http.createServer((req, res)=>{
       
    if(req.url === '/'){
        res.write('<html>');
        res.write('<body><form action="/create-user" method="POST"><input name="username"><button type="submit">Send</button></form></body>')
        res.write('</html>');
    }else if(req.url === '/users'){
        res.write('<html>');
        res.write('<body><h5>List of users</h5><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>');
    }else if(req.url === '/create-user' && req.method === 'POST'){
        const tmp  = [];
        req.on('data', (chunk) => {
            tmp.push(chunk);
        })
        req.on('end', ()=>{
            console.log(Buffer.concat(tmp).toString());
        })
        res.statusCode = 302
        res.setHeader('Location', "/users")
    }else if(req.url === '/404'){
        res.statusCode = 404
        res.write('Page you are looking for is not found !!');
    }else {
        res.statusCode = 404
        res.setHeader('Location', "/404")
    }
    res.end();
        return;
})

srvr.listen(9090);