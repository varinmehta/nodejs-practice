const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    fs.appendFile("log.txt", log, (err, data) => {
        switch (myUrl.pathname) {
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.mname;
                res.end(`Hi, ${username}`);
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
