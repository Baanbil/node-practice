const fs = require("fs")
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question("Enter your first number (or type 'exit' to quit): ", (num1) => {
    if (num1.toLowerCase() === "exit") {
      console.log("Goodbye 👋");
      rl.close();
      return;
    }

    rl.question("Enter your second number: ", (num2) => {
      rl.question("Enter your operation (+, -, *, /): ", (op) => {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        let result;
        switch (op) {
          case "+":
            result = num1 + num2;
            break;
          case "-":
            result = num1 - num2;
            break;
          case "*":
            result = num1 * num2;
            break;
          case "/":
            result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero";
            break;
          default:
            result = "Invalid operator! Please use +, -, *, or /";
        }

        console.log("Result:", result);
	const log = `${num1} ${op} ${num2} = ${result}\n`
	fs.appendFileSync("history.txt", log, "utf8")
        console.log("--------------------------");
        askQuestion(); // loop back
      });
    });
  });
}

askQuestion();
