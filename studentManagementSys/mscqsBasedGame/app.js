import inquirer from "inquirer";
let questions = await inquirer.prompt([
    {
        name: "question1",
        message: "What is the sign of NOT ??",
        type: "list",
        choices: ["&", "^", "!", "~"]
    },
    {
        name: "question2",
        message: "What is the sign of And operator ??",
        type: "list",
        choices: ["&", "^", "?", "~"]
    },
    {
        name: "question3",
        message: "What is the sign of checking euqality with type check",
        type: "list",
        choices: ["===", "^=", "==", "~==="]
    },
    {
        name: "question4",
        message: "What is the sign of not equal to  with type check??",
        type: "list",
        choices: ["===!", "^==!", "!==", "!==="]
    }
]);
let score = 0;
switch (questions.question1) {
    case "!":
        console.log("Congrates!!You guessed right");
        score += 10;
        console.log(`your score is =${score}`);
        break;
    default:
        console.log("you guessed wrong");
        break;
}
switch (questions.question2) {
    case "&":
        console.log("Congrates!!You guessed right");
        score += 10;
        console.log(`your score is =${score}`);
        break;
    default:
        console.log("you guessed wrong");
        break;
}
switch (questions.question3) {
    case "===":
        console.log("Congrates!!You guessed right");
        score += 10;
        console.log(`your score is =${score}`);
        break;
    default:
        console.log("you guessed wrong");
        break;
}
switch (questions.question4) {
    case "!==":
        console.log("Congrates!!You guessed right");
        score += 10;
        console.log(`your score is =${score}`);
        break;
    default:
        console.log("you guessed wrong");
        break;
}
