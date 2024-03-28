import { createWriteStream } from 'node:fs';

const write = async () => {
    // Write your code here 

    process.stdin.on('data', (chunk) => {
        const writeableStream = createWriteStream('src/streams/files/fileToWrite.txt', { encoding: 'utf8', flags: 'a' });
        writeableStream.write(chunk);
        writeableStream.end();
    });
};

await write();