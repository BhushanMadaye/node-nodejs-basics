const parseEnv = () => {
    // Write your code here 
    let rssKeys = [];
    let finalOuput = '';
    for (const key in process.env) {
        if (Object.hasOwnProperty.call(process.env, key)) {
            const value = process.env[key];
            if (key.startsWith('RSS_')) {
                console.log(key);
                rssKeys.push(key);
                finalOuput += `${key}=${value}; `;
            }
        }
    }
    // removing '; ' from last
    const trimmedString = finalOuput.slice(0, -2);
    console.log({trimmedString})
};

parseEnv();