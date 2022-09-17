# Aplicação para enviar mensagens via whatsapp utilizando o Venon

https://github.com/orkestral/venom

## Instalação

1. Instalar o nodejs versão LTS disponível https://nodejs.org/en/download/

2. Copiar o código do projeto para um diretório na máquina:

3. No prompt de comando, execute o comando abaixo para instalar as dependências:

```
c:\whatsappclient>npm install
```

# Execução

1. Para executar a aplicação você deve criar 2 arquivos no formato utf-8 conforme explicado abaixo:

- telefones.txt - lista contendo os telefones que irão receber a mensagem. O formato deve ser apenas números sendo: PAIS(dois dígitos sendo 55 Brasíl)DDD(dois dígitos)NUMERO.
  Exemplo:

```
5561989999999
5561988888888
```

- mensagem.txt - digite a mensagem que deseja enviar

2. A cada execução a aplicação irá atualizar o arquivo application.log onde será possível verificar quais mensagens foram enviadas com sucesso e eventuais erros.

3. Para executar a aplicação:

```
c:\whatsappclient>venon.bat
```

4. Na primeira execução será necessário escanear o código de autenticação do `whatsapp web` para vincular a sua conta do celular. Não é necessário ter em sua agenda de contatos os números de telefones do arquivo `telefones.txt` para enviar mensagens.

5. Para encerrar a aplicação utilizar "Ctrl+C" no prompt de comando.
