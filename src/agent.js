export class Agent {
  constructor(name, description, tools = []) {
    this.name = name;
    this.description = description;
    this.tools = new Map();
    this.conversationHistory = [];
    
    tools.forEach(tool => this.addTool(tool));
  }

  addTool(tool) {
    if (!tool.name || !tool.execute) {
      throw new Error('Tool must have name and execute properties');
    }
    this.tools.set(tool.name, tool);
  }

  async processMessage(message) {
    this.conversationHistory.push({ role: 'user', content: message });
    
    console.log(`\n🤖 ${this.name}: Processing your request...`);
    
    const toolUse = this.detectToolUse(message);
    
    if (toolUse) {
      return await this.executeTool(toolUse.toolName, toolUse.args, message);
    } else {
      const response = this.generateResponse(message);
      this.conversationHistory.push({ role: 'assistant', content: response });
      return response;
    }
  }

  detectToolUse(message) {
    const lowerMessage = message.toLowerCase();
    
    for (const [toolName, tool] of this.tools) {
      if (tool.triggers && tool.triggers.some(trigger => lowerMessage.includes(trigger))) {
        const args = this.extractArguments(message, tool);
        return { toolName, args };
      }
    }
    
    return null;
  }

  extractArguments(message, tool) {
    if (!tool.argPattern) return {};
    
    const args = {};
    
    if (tool.argPattern.number) {
      const numbers = message.match(/-?\d+\.?\d*/g);
      if (numbers) {
        args.numbers = numbers.map(Number);
      }
    }
    
    if (tool.argPattern.location) {
      const locationMatch = message.match(/(?:weather (?:in|for) |temperature in )([a-zA-Z\s,]+)/i);
      if (locationMatch) {
        args.location = locationMatch[1].trim();
      }
    }
    
    if (tool.argPattern.filename) {
      const fileMatch = message.match(/(?:file |read |write |create )([a-zA-Z0-9._/-]+)/i);
      if (fileMatch) {
        args.filename = fileMatch[1].trim();
      }
    }
    
    return args;
  }

  async executeTool(toolName, args, originalMessage) {
    const tool = this.tools.get(toolName);
    if (!tool) {
      return `❌ Tool '${toolName}' not found.`;
    }

    try {
      console.log(`🔧 Using tool: ${toolName}`);
      const result = await tool.execute(args, originalMessage);
      
      this.conversationHistory.push({ 
        role: 'assistant', 
        content: `Used ${toolName}: ${result}` 
      });
      
      return result;
    } catch (error) {
      const errorMsg = `❌ Error using ${toolName}: ${error.message}`;
      this.conversationHistory.push({ role: 'assistant', content: errorMsg });
      return errorMsg;
    }
  }

  generateResponse(message) {
    const responses = [
      `I understand you said: "${message}". How can I help you with that?`,
      `Thanks for your message. I have ${this.tools.size} tools available to help you.`,
      `I'm ${this.name}. I can help you with: ${Array.from(this.tools.keys()).join(', ')}`,
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
  }

  listTools() {
    console.log(`\n🛠️  Available tools for ${this.name}:`);
    this.tools.forEach((tool, name) => {
      console.log(`  • ${name}: ${tool.description}`);
    });
    console.log('');
  }

  getHistory() {
    return this.conversationHistory;
  }
}