import { copyFile, mkdir, readdir, access } from 'fs/promises';
import { join } from 'path/win32';


const copy = async () => {
    // Write your code here
    const sourceDir = "src/fs/files";
    const targetDir = "src/fs/files_copy";

    try {
        await access(sourceDir);
        console.log(`Source directory exists`);
        await mkdir(targetDir);
        console.log(`Target directory created`);
        const fileNames = await readdir(sourceDir, 'utf8');
        for (const name of fileNames) {
            await copyFile(join(sourceDir, name), join(targetDir, name));
        }
        console.log(`Directory copied successfully`);
    } catch (error) {
        throw new Error('FS operation failed: '+ error);
    }

    // const doesFileExists = await access(sourceDir, constants.F_OK);
    // console.log(doesFileExists);

    // mkdir(targetDir, (err) => {
    //     if (err) {
    //         throw new Error('FS operation failed');
    //     }

    //     readdir(sourceDir, 'utf8', (err, fileNames) => {
    //         console.log(fileNames);
    
    //         fileNames.forEach(name => {
    //             console.log(name);
    //             copyFile(join(sourceDir, name), join(targetDir, name), (err) => {
    //                 if (err) {
    //                     console.log(err);
    //                 }
    //             });
    //         });
    //         console.log(`Directory copid successfully`);
    //     });
    // });
};

await copy();
