const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askQuestion() {
  rl.question("Enter your first number (or type 'exit' to quit, 'history' to view): ", (num1) => {
    if (num1.toLowerCase() === "exit") {
      console.log("Goodbye 👋");
      rl.close();
      return;
    }

    if (num1.toLowerCase() === "history") {
      try {
        const history = fs.readFileSync("history.txt", "utf8");
        console.log("\n--- Calculation History ---");
        console.log(history);
        console.log("---------------------------\n");
      } catch (err) {
        console.log("No history found yet.");
      }
      askQuestion(); // loop back after showing history
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

        // Save to history
        const log = `${num1} ${op} ${num2} = ${result}\n`;
        fs.appendFileSync("history.txt", log, "utf8");
        console.log("Saved to history.txt");
        console.log("--------------------------");

        askQuestion(); // loop back
      });
    });
  });
}

askQuestion();
