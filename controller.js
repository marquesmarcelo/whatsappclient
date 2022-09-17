const venom = require('venom-bot');

const loggerConfig = require('./logger');
const {getMessage, getPhones} = require('./files');

const logger = new loggerConfig().getLogger();

venom
  .create({
    //headless: false, //mostrar o navegador aberto
    session: 'whatsappclient',
    multidevice: true // para versão não multidispositivo, use false.(default: true)
  })
  .then((client) => start(client))
  .catch((erro) => {
    logger.error(erro);
  });

 /**
 * Iniciar o envio das mensagens
 * @constructor
 * @param {client} client - Cliente que será utilizado para enviar as mensagens
 */ 
function start(client) {
  var linesCount = 0;
  const message = getMessage();  
  const rl = getPhones();
  rl.on('line', function (line) {
      const cleanNumber = line.replace(/\D/,'');
      if (!cleanNumber) return;
      
      const number = cleanNumber+'@c.us';
      client.sendText(number, message).then(response => {
        logger.info(number, true);
        }).catch(err => {
            logger.error(number,false, err.text)
        })
        linesCount++;
  });
  rl.on('close', function () {
    logger.info('Enviando '+linesCount +' mensagens.');
  });
}