const fs = require("fs");

function writeFile() {
    fs.writeFile("sample.txt", "Hello Deepanshi 👋\nThis is write function.", (err) => {
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("File written successfully!");
    });
}

writeFile();