import { argv } from 'node:process';

const parseArgs = () => {
    // Write your code here 
    console.log(argv);
    let finalOutput = '';
    argv.forEach((element, index) => {
        console.log(element);
        if (element.startsWith('--')) {
            finalOutput += `${element} is ${argv[index + 1]}, `;
        }
    });

    finalOutput.trim();
    const trimmedOutput = finalOutput.slice(0, -2);
    console.log({trimmedOutput});
};

parseArgs();