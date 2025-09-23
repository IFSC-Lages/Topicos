
// Exemplo 1: Counter com Redux puro - App sem react

/*
1. Aplicações em Node.js
  Ex.: um bot de chat, uma API ou um processo em background.
  Você quer logar ou reagir automaticamente a cada mudança de estado.
2. Aplicações Vanilla JS (sem frameworks)
  Imagine um app web simples, só com HTML + JS puro.
  Quando o estado muda, você pode atualizar o DOM manualmente.
3. Monitoramento e Debugging
  Útil em ambientes de aprendizado ou debug.
  Você pode inspecionar cada alteração de estado no console, sem precisar de ferramentas externas.
4. Integração com serviços externos
  Sempre que o estado mudar, enviar dados para outro sistema.
  Exemplo: atualizar cache, disparar evento para Kafka, WebSocket ou salvar no banco.
*/

import { createStore } from 'redux';

// Reducer
function counter(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

// Criar store
const store = createStore(counter);

// Subscribing → "escutando" mudanças
store.subscribe(() => console.log("Estado atual:", store.getState()));

// Dispatch
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
