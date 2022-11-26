#!/usr/bin/env node

// let's build number guessing game !!!
import chalk from 'chalk';
import figlet from 'figlet';
import gradient from 'gradient-string';
import inquirer from 'inquirer';
let randomNumber = Math.floor(Math.random() * 100) + 1;
function startGame() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'result',
            message: chalk.bgBlue(' 🎁 Enter number between 1 to 100')
        }
    ]).then((ans) => {
        console.log(chalk.yellow('________________'));
        const guess = Number(ans.result);
        if (!isNaN(guess)) {
            if (guess < randomNumber) {
                console.log(chalk.magenta(`Your guess is too low ${chalk.yellow(guess)}`));
                console.log(chalk.yellow('________________'));
                startGame();
            }
            if (guess > randomNumber) {
                console.log(chalk.magenta(`Your guess is too high ${chalk.yellow(guess)}`));
                console.log(chalk.yellow('________________'));
                startGame();
            }
            if (guess === randomNumber) {
                console.log(chalk.green(` 🥳 🥳 Congrat. Your guess ${chalk.yellow(guess)} is correct 🎉 🎉 `));
                console.log(chalk.yellow('________________'));
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'continue',
                        message: chalk.bgCyan('Do you wanna start again ? 🔥 ')
                    }
                ]).then(ans => {
                    if (ans.continue) {
                        randomNumber = Math.floor(Math.random() * 100) + 1;
                        startGame();
                    }
                });
            }
        }
        else {
            console.log(chalk.red(' 🌚 🌚  please avoid typing string....'));
            console.log(chalk.yellow('________________'));
            startGame();
        }
    }).catch((err) => console.log(err));
}
figlet.text('ts-guess-me', {
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 120,
    whitespaceBreak: true
}, ((err, data) => {
    console.log('\n');
    console.log(gradient.rainbow(data));
    console.log('\n');
    startGame();
}));
