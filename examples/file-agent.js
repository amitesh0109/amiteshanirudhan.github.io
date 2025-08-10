import { Agent } from '../src/agent.js';
import { fileOperationsTool } from '../src/tools/file-operations.js';

console.log('📁 File Operations Agent Example\n');

// Create a specialized file management agent
const fileAgent = new Agent(
  'File Manager',
  'A specialized agent for file operations',
  [fileOperationsTool]
);

// Demonstrate file operations
const examples = [
  'Create file test.txt with content "Hello from AI Agent!"',
  'Read file test.txt',
  'Read file package.json'
];

console.log('Running file operation examples:\n');

for (const example of examples) {
  console.log(`🔸 Input: "${example}"`);
  try {
    const result = await fileAgent.processMessage(example);
    console.log(`${result}\n`);
  } catch (error) {
    console.log(`   Error: ${error.message}\n`);
  }
}

console.log('✅ File operations agent examples completed!');