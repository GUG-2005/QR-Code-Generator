/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

const questions = [
  {
    type: "input",
    name: "link",
    message: "Give the link?"
  }
];
var text_link = "";

const prompt = inquirer.createPromptModule();
prompt(questions).then((answers) => {
  var text_link = answers.link;
  fs.writeFile("URL.txt", text_link, (err) => {
    if (err) throw err;
    console.log("The QR-Code is generated for the given link");
  });
  var qr_img = qr.imageSync(text_link, {type: "png"});
  fs.writeFileSync("qr_img.png", qr_img);
});

