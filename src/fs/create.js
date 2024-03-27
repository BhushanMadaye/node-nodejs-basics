import { writeFile, access, constants } from "fs";
import { dirname, join } from "path";

const create = async () => {
    // Write your code here
    const fileName = `fresh.txt`;
    const filePath = join(`${dirname('src/fs/files')}/files/${fileName}`);

    access(filePath, constants.F_OK, (err) => {
        if (err) {
            writeFile(filePath, 'I am fresh and young', 'utf8', (err) => {
                if(err) {
                    throw err;
                }
                console.log(`file has been created.`);
            })
        } else {
            throw new Error(`FS operation failed`);
        }
    })
};

await create();