
const readline = require('readline');
const fs = require('fs');
const path = require('path');

/**
 * Buscar a mensagem para ser enviada a todos os telefones.
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
exports.getMessage = function(){
    const file = path.join(__dirname,'mensagem.txt');
    return fs.readFileSync(file, { encoding: 'utf8' });
}

/**
 * Buscar os telefones que irão receber a mensagem
 */
exports.getPhones = function() { 
    const file = path.join(__dirname,'telefones.txt');    
    return readline.createInterface({
      input: fs.createReadStream(file),
      output: process.stdout,
      terminal: false
    });
}