import { rename } from 'fs/promises';

const renameFile = async () => {
    // Write your code here 
    const oldPath = 'src/fs/files/wrongFilename.txt';
    const newPath = 'src/fs/files/properFilename.md';

    try {
        await rename(oldPath, newPath);
    } catch (error) {
        throw new Error(`FS operation failed`, error);
    }
    
};

await renameFile();