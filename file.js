require("dotenv").config();

// const fs = require("fs");

// //fs.writeFileSync("./test.txt", "Hello world")

// // const result = fs.readFileSync("./contacts.txt", "utf-8")
// //console.log(result)
// // fs.readFile("./contacts.txt", "utf-8", (err, result) => {
// //     if (err) {
// //         console.log(err)
// //     } else {
// //         console.log(result)
// //     }
// // })

// fs.appendFileSync("./test.txt", new Date().getTime().toLocaleString());

const { GoogleGenerativeAI } = require("@google/generative-ai");

// Load environment variables from .env file
require("dotenv").config();

// Initialize the API with your key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

// Create a generative model instance
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Define the prompt
const prompt = "Write a story about a magic backpack.";

// Function to generate content
async function generateContent() {
    try {
        const result = await model.generateContent(prompt);
        console.log(result.response.text());
    } catch (error) {
        console.error("Error generating content:", error);
    }
}

// Call the function
generateContent();
