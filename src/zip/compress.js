import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    // Write your code here 
    const readableStream = createReadStream('src/zip/files/fileToCompress.txt', { encoding: 'utf8' });
    const writeableStream = createWriteStream('src/zip/files/archieve.gz');
    const compressionStream = createGzip();
    readableStream.pipe(compressionStream).pipe(writeableStream);
    
};

await compress();