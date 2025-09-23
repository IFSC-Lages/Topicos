import { createServer, Model } from "miragejs";

createServer({
  models: {
    todos: Model,
  },
  //Seeds executa sempre que o server for inicializado
seeds(server){
  const todosAssString = localStorage.getItem('MOCK_TODOS');
  if(todosAssString === null) return;

  const todos = JSON.parse(todosAssString);
  
  // para cada item cria-se ele dentro do server
  todos.models.forEach((todo: {}) => server.schema.create('todos', todo));
},
  // Definição das rotas simuladas
  routes() {
    this.namespace = "api";

    //Retorna todos os registros do todos
    this.get("/todos", (schema) => {
      return schema.all("todos");
    });

    // cria um novo item
    this.post("/todos", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const todo = schema.create("todos", attrs);

      //quando atualiza a lista de todos pega-se todos os valores
      const todos = schema.all("todos");
      //Joga para dentro da localStorage
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));
      return todo;
    });

    //atualiza um registro
    this.put("/todos/:id", (schema, request) => {
      const id = request.params.id;

      const newAttrs = JSON.parse(request.requestBody);

      const todo = schema.find("todos", id);
      todo?.update(newAttrs);

      //quando atualiza a lista de todos pega-se todos os valores
      const todos = schema.all("todos");
      //Joga para dentro da localStorage
      localStorage.setItem("MOCK_TODOS", JSON.stringify(todos));

      return {};
    });

    //Apagar o registro
    this.delete("/todos/:id", (schema, request) => {
      const id = request.params.id;
      const todo = schema.find("todos", id);
      todo?.destroy();
      //quando atualiza a lista de todos pega-se todos os valores
      const todos = schema.all('todos');
      //Joga para dentro da localStorage 
      localStorage.setItem('MOCK_TODOS', JSON.stringify(todos));

      return { message: `Todo ${id} deleted` };
    });
  },
});
