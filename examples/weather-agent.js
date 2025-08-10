import { Agent } from '../src/agent.js';
import { weatherTool } from '../src/tools/weather.js';

console.log('🌤️  Weather Agent Example\n');

// Create a specialized weather agent
const weatherAgent = new Agent(
  'Weather Assistant',
  'A specialized agent for weather information',
  [weatherTool]
);

// Demonstrate weather functionality
const examples = [
  'What\'s the weather in New York?',
  'Temperature in London',
  'Weather forecast for Tokyo',
  'Climate in Sydney'
];

console.log('Running weather examples:\n');

for (const example of examples) {
  console.log(`🔸 Input: "${example}"`);
  try {
    const result = await weatherAgent.processMessage(example);
    console.log(`${result}\n`);
  } catch (error) {
    console.log(`   Error: ${error.message}\n`);
  }
}

console.log('✅ Weather agent examples completed!');