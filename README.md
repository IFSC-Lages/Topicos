# Projeto React & Redux – Aulas e Exemplos

Este projeto contém uma coleção de exercícios, exemplos e componentes React, além de aplicações demonstrativas de Redux e Redux Toolkit. Ele foi desenvolvido com o objetivo de estudar conceitos fundamentais e avançados do ecossistema React.

---

## Estrutura do Projeto

O projeto está dividido em duas pastas principais: `Aulas` e `redux-aula`.

### 1. `Aulas`
Contém componentes, mocks e assets utilizados em aulas e exercícios práticos de React.

```
Aulas
├── .vscode             # Configurações do VSCode
├── .yarn               # Configurações do Yarn
│   └── releases
├── assets              # Arquivos estáticos (imagens, ícones, etc.)
├── dist
│   └── assets          # Build final dos assets
├── public              # Arquivos públicos (index.html, favicon, etc.)
└── src
    ├── components
    │   ├── callback       # Componentes com callbacks
    │   ├── hide           # Componentes com visibilidade condicional
    │   ├── states
    │   │   └── data       # Componentes relacionados a estados
    │   ├── statesmock     # Componentes usando dados mockados
    │   ├── todo           # Componentes de lista de tarefas
    │   └── typography     # Componentes de tipografia
    ├── mocks               # Mocks de dados para testes
    └── shared
        └── services
            └── api        # Serviços de API (axios, fetch, etc.)
```

### 2. `redux-aula`
Contém exemplos de aplicações usando Redux e Redux Toolkit, abordando contadores, listas de tarefas (TODOs) e integração com APIs.

```
redux-aula
├── .vscode             # Configurações do VSCode
├── .yarn               # Configurações do Yarn
│   └── releases
├── exemplos            # Exemplos práticos de Redux
│   ├── exemplo1-counter-redux-puro
│   ├── exemplo1.1-redux-puro
│   ├── exemplo2-counter-todo-react-redux
│   ├── exemplo2.1-counter-react-redux
│   ├── exemplo2.2-todo-react-redux
│   ├── exemplo3-counter-todo-redux-toolkit
│   ├── exemplo3.1-counter-redux-toolkit
│   ├── exemplo3.2-todo-redux-toolkit
│   ├── exemplo4-todo-async-api
│   └── exemplo4.1-movies-async-api
├── public              # Arquivos públicos
└── src                 # Código-fonte das aplicações
```

---

## Tecnologias Utilizadas

- **React** – Biblioteca para construção de interfaces.
- **Redux** – Gerenciamento de estado global.
- **Redux Toolkit** – Forma simplificada de usar Redux.
- **Yarn** – Gerenciador de pacotes.
- **Axios / Fetch** – Comunicação com APIs externas.
- **Mock de dados** – Para testes sem backend.

---

## Como Executar

1. Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

2. Navegue até a pasta desejada (`Aulas` ou `redux-aula`):

```bash
cd Aulas
# ou
cd redux-aula
```

3. Instale as dependências:

```bash
yarn install
```

4. Execute o projeto:

```bash
yarn start
```

O projeto será aberto em [http://localhost:3000](http://localhost:3000).

---

## Observações

- Cada pasta de exemplo em `redux-aula/exemplos` contém uma aplicação independente.
- Componentes reutilizáveis estão localizados em `Aulas/src/components`.
- Mocks de dados e serviços de API estão disponíveis para facilitar testes sem backend.

---

## Badges

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)

