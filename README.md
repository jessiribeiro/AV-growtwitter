# GrowTwitter

**GrowTwitter** é uma aplicação simples de rede social no estilo Twitter, desenvolvida para aplicar conceitos de **Programação Orientada a Objetos (POO)** utilizando **TypeScript**.

---

## 📋 Funcionalidades

- **Cadastro de usuários** com identificador único, nome, e-mail, username e senha.
- **Criação de tweets** (normais ou respostas a outros tweets).
- **Mecanismo de seguidores**: os usuários podem seguir uns aos outros.
- **Likes e replies**: os tweets podem ser curtidos e respondidos.
- **Feed de tweets**: os usuários podem visualizar os tweets das pessoas que seguem.

---

## 🛠️ Regras Implementadas

### Regras para Usuários:
- Devem ter um identificador (`id`) e username únicos.
- Podem criar tweets.
- Podem seguir outros usuários.
- Podem curtir e responder tweets de outros usuários.
- Podem visualizar os tweets das pessoas que estão seguindo (feed).

### Regras para Tweets:
- Devem ter um identificador (`id`) único.
- Possuem um tipo (`Normal` ou `Reply`).
- Devem ser associados a apenas um usuário (autor).
- Podem conter curtidas e respostas.
- São exibidos no console com as curtidas e respostas.

### Mecanismo de Seguidores:
- Um usuário pode seguir outro usuário.
- O feed de um usuário exibe os tweets das pessoas que ele está seguindo.

### Likes e Replies:
- Um usuário pode curtir um tweet específico.
- Um usuário pode responder a um tweet com outro tweet.
- Respostas aparecem diretamente associadas ao tweet original.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos:
- Node.js instalado na máquina.
- Gerenciador de pacotes (npm ou yarn).

### Passos:
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/growtwitter.git
   cd growtwitter
