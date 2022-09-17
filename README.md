# Aplicação para enviar mensagens via whatsapp utilizando o Venon

https://github.com/orkestral/venom

## Instalação

1. Instalar o `nodejs` versão LTS disponível https://nodejs.org/en/download/

2. Copiar o código do projeto para um diretório na máquina. O código do projeto pode ser baixado em: https://github.com/marquesmarcelo/whatsappclient/releases/

3. Para instalar as dependências do programa clique no arquivo `instalar.bat` que se encontra na pasta do projeto e aguarde até que o `Prompt de Comando` seja encerrado.

# Execução

1. Para executar a aplicação você deve criar 2 arquivos no formato utf-8 conforme explicado abaixo:

- telefones.txt - contem uma lista dos telefones que irão receber a mensagem. O formato deve ser apenas números sendo: PAIS(dois dígitos sendo 55 Brasíl)DDD(dois dígitos)NUMERO.
  Exemplo:

```
5561989999999
5561988888888
```

- mensagem.txt - digite a mensagem que deseja enviar

2. A cada execução a aplicação irá atualizar o arquivo application.log onde será possível verificar quais mensagens foram enviadas com sucesso e eventuais erros.

3. Para executar a aplicação clique duas vezes no arquivo `venon.bat` que se encontra na pasta do projeto.

4. Na primeira execução será necessário escanear o código de autenticação do `whatsapp web` para vincular a sua conta do celular a aplicação. Essa configuração só será necessária na primeira execução.

4.1. Não é necessário ter em sua agenda de contatos os números de telefones do arquivo `telefones.txt` para enviar mensagens.

5. Para encerrar a aplicação verifique no arquivo `application.log`, que se encontra na pasta do projeto, se todos os números cadastrados no arquivo `telefones.txt` receberam a mensagem e então utilize as teclas `Ctrl+C`.
