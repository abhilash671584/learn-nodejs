const http = require('http');
const routes = require('./routes');

const server = http.createServer((req, res) => {
    routes.requestHandler(req, res);
    console.log(routes.APP_CONSTANT_MESSAGE)
}
);

server.listen(8090);