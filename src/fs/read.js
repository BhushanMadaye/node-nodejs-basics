import { readFile } from 'node:fs/promises';

const read = async () => {
    // Write your code here
    const fileToBeRead = 'src/fs/files/fileToRead.txt';
    try {
        const fileContent = await readFile(fileToBeRead, { encoding: 'utf8' });
        console.log(fileContent);
    } catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();