import inquirer from "inquirer";
import chalk from "chalk";
let arr = [23, 45, 67, 89, 10];
let found;
let answer = await inquirer.prompt([{
        name: "userInput",
        type: "number",
        message: "please enter your number"
    }]);
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i] === answer.userInput) {
        console.log(chalk.blueBright("Found " + answer.userInput + " on index =" + i));
        found = true;
        break;
    }
}
if (!found) {
    console.log(chalk.red(" Not found tha number. please enter  correct number."));
}
