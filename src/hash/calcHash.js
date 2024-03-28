const { createHash } = await import('node:crypto');
import { createReadStream } from 'node:fs';

const calculateHash = async () => {
    // Write your code here 
    const hash = createHash('sha256', { encoding: 'hex' });
    const readStream = createReadStream('src/hash/files/fileToCalculateHashFor.txt');
    readStream.pipe(hash).pipe(process.stdout);
};

await calculateHash();