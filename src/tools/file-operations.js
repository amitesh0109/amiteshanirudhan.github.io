import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

export const fileOperationsTool = {
  name: 'file_operations',
  description: 'Reads, writes, and manages files in the project directory',
  triggers: ['read file', 'write file', 'create file', 'file'],
  argPattern: { filename: true },
  
  async execute(args, message) {
    const filename = args.filename;
    if (!filename) {
      return '❌ Please specify a filename.';
    }
    
    // Security: Only allow operations in current directory and subdirectories
    const safePath = join(process.cwd(), filename);
    if (!safePath.startsWith(process.cwd())) {
      return '❌ File operations are restricted to the current project directory.';
    }
    
    const messageText = message.toLowerCase();
    
    try {
      if (messageText.includes('read')) {
        if (!existsSync(safePath)) {
          return `❌ File '${filename}' does not exist.`;
        }
        const content = readFileSync(safePath, 'utf8');
        return `📄 Contents of ${filename}:\n\n${content.substring(0, 500)}${content.length > 500 ? '...\n(truncated)' : ''}`;
        
      } else if (messageText.includes('write') || messageText.includes('create')) {
        const contentMatch = message.match(/(?:write|create).*?["'](.+?)["']/i) || 
                            message.match(/content[:\s]+(.+)/i);
        
        const content = contentMatch ? contentMatch[1] : 'Hello from AI Agent Framework!';
        writeFileSync(safePath, content, 'utf8');
        return `✅ File '${filename}' created successfully with content: "${content.substring(0, 100)}${content.length > 100 ? '...' : ''}"`;
        
      } else {
        if (existsSync(safePath)) {
          return `📁 File '${filename}' exists in the project directory.`;
        } else {
          return `❌ File '${filename}' does not exist.`;
        }
      }
    } catch (error) {
      return `❌ File operation failed: ${error.message}`;
    }
  }
};