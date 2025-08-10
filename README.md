# Beginner AI Agent Framework

A simple, educational framework for building AI agents with tool capabilities. Perfect for learning how AI agents work and building your first intelligent assistants.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the interactive agent:**
   ```bash
   npm start
   ```

3. **Try example agents:**
   ```bash
   npm run example:calculator
   npm run example:weather  
   npm run example:file
   ```

## 📚 What You'll Learn

- How AI agents process messages and decide which tools to use
- Tool detection and argument extraction from natural language
- Building modular, reusable tools for agents
- Creating specialized vs. general-purpose agents
- Basic conversation history management

## 🛠️ Built-in Tools

### Calculator Tool
- **Triggers:** calculate, math, add, subtract, multiply, divide, +, -, *, /
- **Example:** "Add 15 and 25" or "Multiply 7 by 8"

### Weather Tool  
- **Triggers:** weather, temperature, forecast, climate
- **Example:** "What's the weather in London?"

### File Operations Tool
- **Triggers:** read file, write file, create file, file
- **Example:** "Create file hello.txt with content Hello World"

## 🏗️ Architecture

```
src/
├── agent.js              # Main Agent class
├── tools/                # Tool implementations
│   ├── calculator.js
│   ├── weather.js
│   └── file-operations.js
└── index.js              # Interactive CLI

examples/                 # Example implementations
├── calculator-agent.js
├── weather-agent.js
└── file-agent.js
```

## 🎯 How It Works

1. **Agent Creation:** Create an agent with a name, description, and tools
2. **Message Processing:** Agent analyzes user input to detect tool usage
3. **Tool Execution:** Matching tools are executed with extracted arguments
4. **Response Generation:** Results are formatted and returned to user

## 🔧 Creating Custom Tools

Tools must have these properties:

```javascript
export const myTool = {
  name: 'tool_name',
  description: 'What this tool does',
  triggers: ['keyword1', 'keyword2'],  // Words that activate this tool
  argPattern: { number: true },        // What arguments to extract
  
  async execute(args, message) {
    // Your tool logic here
    return 'Tool response';
  }
};
```

## 📖 Example Usage

```javascript
import { Agent } from './src/agent.js';
import { calculatorTool } from './src/tools/calculator.js';

const myAgent = new Agent(
  'My Calculator Bot',
  'A helpful calculator assistant',
  [calculatorTool]
);

const response = await myAgent.processMessage('Add 10 and 20');
console.log(response); // "🧮 Addition of 10, 20 = 30"
```

## 🎓 Next Steps

1. **Modify existing tools** to add new capabilities
2. **Create your own tools** for specific tasks
3. **Experiment with tool triggers** and argument patterns
4. **Build specialized agents** for different use cases
5. **Add persistent memory** to agents
6. **Integrate with real APIs** (replace mock weather data)

## 🔒 Security Notes

- File operations are restricted to the project directory
- No external API calls by default (weather uses mock data)
- Input validation on all tool arguments

## 📄 License

MIT - Feel free to learn, modify, and build upon this framework!