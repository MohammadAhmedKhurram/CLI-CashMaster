#!/usr/bin/env node
// import inquirer from "inquirer";
// console.log("Welcome To The Only Choice ATM");
//     const card = await inquirer.prompt([
//         {
//             type: "input",
//             message: "Please Insert Your Card",
//             name: "Card"
//         }
//     ]);
//     const input = await inquirer.prompt([
//         {
//             type: "input",
//             message: "Please Enter Your PIN! (Your PIN Is 123.)",
//             name: "pin",
//         }
//     ]);
//     const pin = input.pin;
//     let attempts = 1;
//     while (attempts <= 3) {
//         if (pin === "123") {
//             console.log("PIN Verified. You are logged in.");
//             const input2 = await inquirer.prompt([
//                 {
//                     type: "list",
//                     message: "What would you like to proceed?",
//                     name: "choice",
//                     choices: ["Withdrawal", "Check Balance"]
//                 }
//             ]);
//             const selectedChoice = input2.choice;
//             if (selectedChoice === "Withdrawal") {
//                 const withdrawalAmount = await inquirer.prompt([
//                     {
//                         type: "list",
//                         message: "How much would you like to withdraw? (Your balance = 50,000)",
//                         name: "amount",
//                         choices: ["1000", "5000", "10000", "20000"]
//                     }
//                 ]);
//                 const selectedAmount = (withdrawalAmount.amount);
//                 let balance = 50000
//                 if (selectedAmount > balance) {
//                     console.log("Insufficient balance. Please enter a lower amount.");
//                 } else {
//                     const newBalance = balance - selectedAmount;
//                     console.log(`Successfully withdrew ${selectedAmount}. Current balance: ${newBalance}`);
//                     console.log("Thank you!");
//                 }
//             } else if (selectedChoice === "Check Balance") {
//                 console.log("Your Account Balance is 50,000.");
//                 console.log("Thank you!");
//             } else {
//                 console.log("Invalid choice.");
//             }
//             break;
//         } else {
//             if (attempts === 3) {
//                 console.log("Too many incorrect attempts. Account locked. Please contact customer support.");
//                 break;
//             }
//             console.log(`Incorrect PIN. Attempts left: ${3 - attempts}`);
//             attempts++;
//         }
//     }
import inquirer from "inquirer";
console.log("Welcome To The Only Choice ATM");
const card = await inquirer.prompt([
    {
        type: "input",
        message: "Please Insert Your Card",
        name: "Card"
    }
]);
let attempts = 1;
while (attempts <= 3) {
    const input = await inquirer.prompt([
        {
            type: "input",
            message: "Please Enter Your PIN! (Your PIN Is 123.)",
            name: "pin",
        }
    ]);
    const pin = input.pin;
    if (pin === "123") {
        console.log("PIN Verified. You are logged in.");
        const input2 = await inquirer.prompt([
            {
                type: "list",
                message: "What would you like to proceed?",
                name: "choice",
                choices: ["Withdrawal", "Check Balance"]
            }
        ]);
        const selectedChoice = input2.choice;
        if (selectedChoice === "Withdrawal") {
            const withdrawalAmount = await inquirer.prompt([
                {
                    type: "list",
                    message: "How much would you like to withdraw? (Your balance = 50,000)",
                    name: "amount",
                    choices: ["1000", "5000", "10000", "20000"]
                }
            ]);
            const selectedAmount = parseInt(withdrawalAmount.amount); // Convert selectedAmount to integer
            let balance = 50000;
            if (selectedAmount > balance) {
                console.log("Insufficient balance. Please enter a lower amount.");
            }
            else {
                const newBalance = balance - selectedAmount;
                console.log(`Successfully withdrew ${selectedAmount}. Current balance: ${newBalance}`);
                console.log("Thank you!");
            }
        }
        else if (selectedChoice === "Check Balance") {
            console.log("Your Account Balance is 50,000.");
            console.log("Thank you!");
        }
        else {
            console.log("Invalid choice.");
        }
        break;
    }
    else {
        if (attempts === 3) {
            console.log("Too many incorrect attempts. Account locked. Please contact customer support.");
            break;
        }
        console.log(`Incorrect PIN. Attempts left: ${3 - attempts}`);
        attempts++;
    }
}
