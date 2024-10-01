const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch (req.url) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                res.end("I am Varin Mehta");
                break;
            default:
                res.end("404 Not Found");
        }
    });
});

server.listen(8000, (err, res) => {
    if (err) throw err;
    console.log("Server is running on port 8000");
});
