const transform = async () => {
    // Write your code here 
    process.stdin.on('data', (chunk) => {
        const stringifiedChunk = chunk.toString();
        process.stdout.write(stringifiedChunk.split('').reverse().join(''));
    })
};

await transform();