import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip, createUnzip } from 'node:zlib'

const decompress = async () => {
    // Write your code here 
    const readableStream = createReadStream('src/zip/files/archieve.gz');
    const writeableStream = createWriteStream('src/zip/files/fileToCompress.txt');
    const decompressStream = createGunzip();

    readableStream.pipe(decompressStream).pipe(writeableStream);
};

await decompress();