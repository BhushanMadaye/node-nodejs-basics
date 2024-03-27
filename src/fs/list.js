import { readdir } from 'node:fs/promises';

const list = async () => {
    // Write your code here
    const dirPath = 'src/fs/files';
    try {
        const files = await readdir(dirPath);
        console.table(files);
    } catch (error) {
        throw new Error(`FS operation failed`);
    }
};

await list();