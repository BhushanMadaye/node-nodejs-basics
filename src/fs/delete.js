import { unlink } from 'node:fs/promises'

const remove = async () => {
    // Write your code here
    const fileToBeRemoved = 'src/fs/files/fileToRemove.txt';

    try {
        await unlink(fileToBeRemoved);
    } catch (error) {
        throw new Error(`FS operation failed`);
    }
};

await remove();