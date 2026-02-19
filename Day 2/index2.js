import fs from 'fs/promises';
const writeFile = async (path, data) => {
      try {
      await fs.writeFile(path,data);
      console.log("Data has been written successfully");
        } catch (error) {
            console.log("Unable to write file:", error);
        }
    }
const readFile = async (path) => {
    try {
        const data = await fs.readFile(path, 'utf-8');
        console.log(data);
    } catch (error) {
        console.log("Unable to read file:", error);
    }
}

const appendFile = async (path, data) => {
    try {
        await fs.appendFile(path, data);
        console.log("Data has been appended successfully");
    } catch (error) {
        console.log("Unable to append file:", error);
    }
}

const main = async () => {
    await writeFile("example.txt", "This is write text");
    await readFile("example.txt");
    await appendFile("example.txt", " This is appended text.");
    await readFile("example.txt");
}

main();
