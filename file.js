require("dotenv").config();

// const fs = require("fs");

// //fs.writeFileSync("./test.txt", "Hello world")

const result = fs.readFileSync("./contacts.txt", "utf-8");
console.log(result);
fs.readFile("./contacts.txt", "utf-8", (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

fs.appendFileSync("./test.txt", new Date().getTime().toLocaleString());
