var http = require('http');
http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('BikaCalc will be created and published here ...\n');
}).listen(process.env.C9_PORT, "0.0.0.0");
console.log('Server running at http://0.0.0.0:' + process.env.C9_PORT + '/');
