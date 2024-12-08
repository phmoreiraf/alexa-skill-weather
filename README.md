# Alexa Skill: Weather Info
## Descrição
Este projeto implementa uma Skill para Alexa que fornece informações meteorológicas em tempo real. A aplicação permite ao usuário consultar o clima de qualquer cidade, definir uma cidade preferida para consultas rápidas e interagir com a assistente de maneira natural e fluida. O backend foi desenvolvido utilizando AWS Lambda, DynamoDB para persistência de dados e integração com a API externa OpenWeatherMap.

## Funcionalidades
- Consulta de clima: Obtenha informações meteorológicas detalhadas de qualquer cidade.
- Cidade preferida: Configure uma cidade favorita para facilitar consultas futuras.
- Interações naturais: Fluxo de diálogo interativo para uma experiência intuitiva.
- Persistência de dados: Armazena preferências dos usuários utilizando AWS DynamoDB.

## Tecnologias Utilizadas
- AWS Lambda: Backend serverless para processar as requisições da Alexa.
- DynamoDB: Banco de dados NoSQL para armazenamento de preferências dos usuários.
- OpenWeatherMap API: Fonte de dados para informações meteorológicas.
- Alexa Skills Kit: Configuração e integração da Skill no Amazon Developer Console.
- Node.js: Linguagem de programação utilizada no backend.

## Como Funciona
- O usuário ativa a skill e solicita informações climáticas.
- A skill utiliza a API do OpenWeatherMap para buscar os dados meteorológicos.
- As preferências do usuário, como a cidade preferida, são armazenadas e recuperadas do DynamoDB.
- Respostas formatadas são enviadas para a Alexa, que as apresenta ao usuário.
Configuração

## Requisitos
- Conta AWS com permissões para criar funções Lambda e tabelas DynamoDB.
- Chave de API da OpenWeatherMap.
- Conta Amazon Developer para configurar a Skill.

## Instruções
- Clone este repositório.
- Configure sua chave da OpenWeatherMap em lambda/config/config.json.
- Crie a tabela no DynamoDB utilizando o script scripts/dynamodb-setup.sh.
- Compacte a pasta lambda e faça o upload no AWS Lambda.
- Configure a Skill no Amazon Developer Console e vincule-a ao endpoint Lambda.

## Testes
- Testes automatizados disponíveis no diretório tests/ para simular intents e validar o comportamento da aplicação.
- Teste a skill diretamente no Alexa Developer Console para verificar a integração completa.
