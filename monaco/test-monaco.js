// Simple test to verify Monaco Editor setup
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function runTests() {
    console.log('Testing BoxLang Monaco Editor setup...');

    // Check if all required files exist
    const requiredFiles = [
        'src/index.html',
        'src/index.js',
        'src/boxlang-language-config.js',
        'src/boxlang-monarch-tokens.js',
        'src/boxlang-theme.js',
        'package.json',
        'vite.config.js'
    ];

    let allFilesExist = true;

    requiredFiles.forEach(file => {
        const filePath = path.join(__dirname, file);
        if (fs.existsSync(filePath)) {
            console.log(`✓ ${file} exists`);
        } else {
            console.log(`✗ ${file} missing`);
            allFilesExist = false;
        }
    });

    if (allFilesExist) {
        console.log('\n✓ All required files are present!');
        console.log('\nNext steps:');
        console.log('1. Run: npm install');
        console.log('2. Run: npm run dev');
        console.log('3. Open: http://localhost:3000');
    } else {
        console.log('\n✗ Some files are missing. Please check the setup.');
        process.exit(1);
    }

    // Test language configuration
    try {
        const langConfig = await import('./src/boxlang-language-config.js');
        console.log('✓ Language configuration loads successfully');
    } catch (error) {
        console.log('✗ Error loading language configuration:', error.message);
    }

    // Test monarch tokens
    try {
        const monarchTokens = await import('./src/boxlang-monarch-tokens.js');
        console.log('✓ Monarch tokens load successfully');
    } catch (error) {
        console.log('✗ Error loading monarch tokens:', error.message);
    }

    // Test theme
    try {
        const theme = await import('./src/boxlang-theme.js');
        console.log('✓ Theme configuration loads successfully');
    } catch (error) {
        console.log('✗ Error loading theme configuration:', error.message);
    }
}

// Run the tests
runTests().catch(console.error);
