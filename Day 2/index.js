import fs from 'fs';

const writeFileSync = (path, data) => {
      try {
      fs.writeFileSync(path,data);
       console.log("Data has been written successfully");
        } catch (error) {
            console.log("Error writing file:", error);
        }
}
const readFileSync = (path) => {
    try {
    const data = fs.readFileSync(path, 'utf-8');
    console.log(data);
    } catch (error) {
        console.log("Unable to read file");
    }
}
const appendFileSync = (path, data) => {
      try {
      fs.appendFileSync(path,data);
       console.log("Data has been appended successfully");
        } catch (error) {
            console.log("Error appending file:", error);
        }
}
console.log("Before write");
writeFileSync("example.txt","This is an example of writeFileSync method");
console.log("After write");

console.log("Before read");
readFileSync("./example.txt", "This is an example of readFileSync method");
console.log("After read");

console.log("Before append");
appendFileSync("example.txt"," This is an example of appendFileSync method");
console.log("After append");