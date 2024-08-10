const fs = require('node:fs');

const data = new Uint8Array(Buffer.from('Hello Node.js, this is pkm774'));
fs.writeFile("./message.txt", data, (err) => {
    if (err) throw err;
});

fs.readFile("./message.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
}); 