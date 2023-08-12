const { log } = require('console');
const {readFileSync, writeFileSync} =require('fs');
//const fs = require('fs');
//fs.read

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

log(first, second)
writeFileSync(
    './content/result-sync.txt', 
    `\nHere is the result: ${first}, ${second}`, 
    {flag:'a'})