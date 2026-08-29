const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Remove single line comments that are on their own line (ignoring leading whitespace)
  content = content.replace(/^\s*\/\/.*$/gm, '');
  
  // Remove empty lines that might have been left behind (optional, but keeps it clean)
  content = content.replace(/\n\s*\n/g, '\n\n');

  fs.writeFileSync(filePath, content, 'utf8');
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next') {
        walkDir(fullPath);
      }
    } else {
      if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.js') || fullPath.endsWith('.mjs') || fullPath.endsWith('.prisma')) {
        processFile(fullPath);
      }
    }
  }
}

walkDir(path.join(__dirname, 'src'));
walkDir(path.join(__dirname, 'prisma'));
console.log('Comments removed successfully!');
