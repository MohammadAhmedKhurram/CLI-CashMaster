#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.blue.bold("Welcome to the ATM!"));

await inquirer.prompt({
    type: "input",
    message: chalk.yellow("Please insert your card..."),
    name: "Card"
});

let accountBalance = 50_000;
let loggedIn = false;

while (!loggedIn) {
    const randomNum1: number = Math.floor(Math.random() * 9 + 1);
    const randomNum2: number = Math.floor(Math.random() * 9 + 1);
    const randomNum3: number = Math.floor(Math.random() * 9 + 1);
    const randomNum4: number = Math.floor(Math.random() * 9 + 1);
    const pin: string = `${randomNum1}${randomNum2}${randomNum3}${randomNum4}`;

    let attempts = 1;

    while (attempts <= 3) {
        const password = await inquirer.prompt({
            type: "input",
            name: "Password",
            message: chalk.cyan(`Please enter your PIN (Your PIN is ${chalk.green(pin)})`)
        });

        const code = password.Password;
        if (code === pin) {
            console.log(chalk.green("You are logged in!"));
            loggedIn = true;
            break;
        } else {
            console.log(chalk.red("Incorrect PIN!"));
            attempts += 1;
            if (attempts <= 3) {
                console.log(chalk.yellow(`Attempts left: ${4 - attempts}`));
            }
        }
    }

    if (attempts > 3) {
        console.log(chalk.bgRed.white("Maximum attempts reached! You are locked out."));
        process.exit();
    }
}

let exit = false;

while (!exit) {
    const operation = await inquirer.prompt({
        type: "list",
        message: chalk.blue("What would you like to do?"),
        choices: ["Withdrawal", "Check Balance", "Exit"],
        name: "Operation"
    });

    const selectedChoice = operation.Operation;

    if (selectedChoice === "Withdrawal") {
        const amount = await inquirer.prompt({
            type: "list",
            message: chalk.cyan(`How much would you like to withdraw? Your account balance: ${chalk.green(accountBalance)}`),
            choices: ["1000", "5000", "10000", "20000"],
            name: "Amount"
        });

        const selectedAmount = parseInt(amount.Amount, 10);
        if (selectedAmount > accountBalance) {
            console.log(chalk.red("Insufficient balance."));
        } else {
            accountBalance -= selectedAmount;
            console.log(chalk.green(`Successfully withdrew ${selectedAmount}. Current balance: ${accountBalance}`));
        }
    } else if (selectedChoice === "Check Balance") {
        console.log(chalk.green(`Your account balance is ${accountBalance}`));
    } else if (selectedChoice === "Exit") {
        console.log(chalk.magenta("Thank you for using the ATM. Goodbye!"));
        exit = true;
    }
}
