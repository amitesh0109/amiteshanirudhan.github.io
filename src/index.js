import { Agent } from './agent.js';
import { calculatorTool } from './tools/calculator.js';
import { weatherTool } from './tools/weather.js';
import { fileOperationsTool } from './tools/file-operations.js';
import readline from 'readline';

console.log('🚀 Welcome to the Beginner AI Agent Framework!\n');

// Create a multi-purpose agent with all tools
const generalAgent = new Agent(
  'General Assistant',
  'A helpful AI agent with calculator, weather, and file management capabilities',
  [calculatorTool, weatherTool, fileOperationsTool]
);

// Display available tools
generalAgent.listTools();

// Interactive command line interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('💬 Type your message (or "quit" to exit, "tools" to see available tools):');
console.log('Examples:');
console.log('  • "Add 15 and 25"');
console.log('  • "What\'s the weather in London?"');
console.log('  • "Read file package.json"');
console.log('  • "Create file hello.txt with content Hello World"');
console.log('');

const askQuestion = () => {
  rl.question('You: ', async (input) => {
    if (input.toLowerCase() === 'quit' || input.toLowerCase() === 'exit') {
      console.log('\n👋 Goodbye! Thanks for using the AI Agent Framework!');
      rl.close();
      return;
    }
    
    if (input.toLowerCase() === 'tools') {
      generalAgent.listTools();
      askQuestion();
      return;
    }
    
    if (input.toLowerCase() === 'history') {
      console.log('\n📝 Conversation History:');
      generalAgent.getHistory().forEach((msg, idx) => {
        console.log(`${idx + 1}. ${msg.role}: ${msg.content}`);
      });
      console.log('');
      askQuestion();
      return;
    }
    
    if (input.trim()) {
      try {
        const response = await generalAgent.processMessage(input);
        console.log(`\n${response}\n`);
      } catch (error) {
        console.log(`\n❌ Error: ${error.message}\n`);
      }
    }
    
    askQuestion();
  });
};

askQuestion();