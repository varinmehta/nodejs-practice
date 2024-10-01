const http = require("http");

const server = http.createServer((req, res) => {
    console.log("New Request received");
    res.end("Hello from Server");
});

server.listen(8000, (err, res) => {
    if (err) throw err;
    console.log("Server is running on port 8000");
});
