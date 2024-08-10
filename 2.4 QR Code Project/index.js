/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

console.log('Hi, welcome to QR Code Generator');
console.log(' ');

const questions = [
    {
        type: 'input',
        name: 'url',
        message: "Enter the url for qr code: ",
    }
];

inquirer.prompt(questions).then((answers) => {
    var qr_image = qr.image(answers.url, { type: 'png' });
    qr_image.pipe(fs.createWriteStream('QR_Code.png'));

    const data = new Uint8Array(Buffer.from(answers.url));
    fs.writeFile("URL.txt", data, (err) => {
        if (err) throw err;
    });
});