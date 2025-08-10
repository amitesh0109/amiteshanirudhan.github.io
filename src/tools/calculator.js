export const calculatorTool = {
  name: 'calculator',
  description: 'Performs basic math operations (add, subtract, multiply, divide)',
  triggers: ['calculate', 'math', 'add', 'subtract', 'multiply', 'divide', '+', '-', '*', '/'],
  argPattern: { number: true },
  
  async execute(args, message) {
    if (!args.numbers || args.numbers.length < 2) {
      return '❌ Please provide at least two numbers for calculation.';
    }
    
    const messageText = message.toLowerCase();
    const numbers = args.numbers;
    
    let result;
    let operation;
    
    if (messageText.includes('add') || messageText.includes('+')) {
      result = numbers.reduce((a, b) => a + b);
      operation = 'addition';
    } else if (messageText.includes('subtract') || messageText.includes('-')) {
      result = numbers.reduce((a, b) => a - b);
      operation = 'subtraction';
    } else if (messageText.includes('multiply') || messageText.includes('*')) {
      result = numbers.reduce((a, b) => a * b);
      operation = 'multiplication';
    } else if (messageText.includes('divide') || messageText.includes('/')) {
      if (numbers.some(n => n === 0 && numbers.indexOf(n) > 0)) {
        return '❌ Cannot divide by zero!';
      }
      result = numbers.reduce((a, b) => a / b);
      operation = 'division';
    } else {
      result = numbers.reduce((a, b) => a + b);
      operation = 'addition (default)';
    }
    
    return `🧮 ${operation.charAt(0).toUpperCase() + operation.slice(1)} of ${numbers.join(', ')} = ${result}`;
  }
};