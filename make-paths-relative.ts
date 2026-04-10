import fs from 'fs';
import path from 'path';

const srcDir = './src';

function walk(dir: string, callback: (filePath: string) => void) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, callback);
    } else {
      callback(filePath);
    }
  });
}

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;
    
    // Replace "/images/" with "images/" (relative)
    // We look for src="/images/..." or url("/images/...")
    const regex = /"\/images\//g;
    if (regex.test(content)) {
      content = content.replace(regex, '"images/');
      changed = true;
    }
    
    // Also check for single quotes
    const regexSingle = /'\/images\//g;
    if (regexSingle.test(content)) {
      content = content.replace(regexSingle, "'images/");
      changed = true;
    }

    if (changed) {
      console.log(`Updating paths in ${filePath}...`);
      fs.writeFileSync(filePath, content);
    }
  }
});
console.log('Path update complete.');
