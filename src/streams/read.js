import { createReadStream, createWriteStream } from 'node:fs';

const read = async () => {
    // Write your code here 
    const readableStream = createReadStream('src/streams/files/fileToRead.txt', { encoding: 'utf8' });
    readableStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();