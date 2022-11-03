// let's build number guessing game !!!
import inquirer from 'inquirer';

let randomNumber = Math.floor(Math.random() * 100) + 1;


function startGame(): void {
    inquirer.prompt([
    {
        type: 'input',
        name: 'result',
        message: ' 🎁 Enter number between 1 to 100'
    }
    ]).then((ans: { result: string}) => {
        console.log('________________');
        const guess = Number(ans.result);
        if(!isNaN(guess)) {
            if(guess < randomNumber) {
            console.log(`Your guess is too low ${guess}\n_________________`);
                startGame();
            }
            if(guess > randomNumber) {
                console.log(`Your guess is too high ${guess}\n_________________`);
                startGame();
            }
            if(guess === randomNumber) {
                console.log(` 🥳 🥳 Congrat. Your guess ${guess} is correct 🎉 🎉 \n_________________`);
                inquirer.prompt([
                    {
                        type: 'confirm',
                        name: 'continue',
                        message: 'Do you wanna start again ? 🔥 '
                    }
                ]).then(ans => {
                    if(ans.continue) {
                        randomNumber = Math.floor(Math.random() * 100) + 1;
                        startGame();
                    }
                })
            }
        }else {
            console.log(' 🌚 🌚  please avoid typing string....\n_________________');
            startGame();
        }
        
    }).catch((err: string) => console.log(err))
}

startGame();