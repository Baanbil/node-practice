const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl.question("Enter yoyr first number ", (num1) => {
  rl.question("Enter your second number ", (num2) => {
    rl.question("Enter your operation ", (op) => {
      num1 = parseFloat(num1)
      num2 = parseFloat(num2)
      let result;
      switch(op) {
        case "+":
          result =  num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          result = num1 / num2;
          break;
      }
      console.log(result)
      rl.close()
    })
  })
})
