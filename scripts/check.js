// Config Checker validation script
const fs = require('fs');
const path = require('path');

const envDir = path.join(__dirname, '../env');
const files = fs.readdirSync(envDir).sort();

console.log('Checking environment files...');
files.forEach(file => {
  const content = fs.readFileSync(path.join(envDir, file), 'utf8').trim();
  console.log(`✓ ${file}: ${content.length} chars`);
});

console.log('Check complete');
