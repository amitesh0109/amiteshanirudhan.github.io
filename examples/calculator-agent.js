import { Agent } from '../src/agent.js';
import { calculatorTool } from '../src/tools/calculator.js';

console.log('🧮 Calculator Agent Example\n');

// Create a specialized calculator agent
const calculatorAgent = new Agent(
  'Calculator Bot',
  'A specialized agent focused on mathematical calculations',
  [calculatorTool]
);

// Demonstrate calculator functionality
const examples = [
  'Add 10 and 25',
  'Multiply 7 and 8',
  'Divide 100 by 4',
  'Subtract 50 from 75'
];

console.log('Running calculator examples:\n');

for (const example of examples) {
  console.log(`🔸 Input: "${example}"`);
  try {
    const result = await calculatorAgent.processMessage(example);
    console.log(`   Result: ${result}\n`);
  } catch (error) {
    console.log(`   Error: ${error.message}\n`);
  }
}

console.log('✅ Calculator agent examples completed!');