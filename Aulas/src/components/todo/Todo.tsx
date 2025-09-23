import { useEffect, useState } from "react";
import { InputAdd } from "./InputAdd";
import { TodoAPI, type ITodo } from "../../shared/services/TodoAPI";
import { List } from "./List";
import { TodoItem } from "./TodoItem";
// import { TodoAPI } from "../../shared/services/TodoAPI";

// Comandos para testar os dados que foram Mocados
// TodoAPI.getAll().then((data) => {
//   console.log("1", data);
// });
// TodoAPI.create({ label: "Fazer Almoço" });
// TodoAPI.create({ label: "Fazer Lanche" });

// TodoAPI.getAll().then((data) => {
//   console.log("2", data);
// });

// TodoAPI.updateById("1", { label: "Fazer Janta" });

// TodoAPI.getAll().then((data) => {
//   console.log("3", data);
// });

// TodoAPI.deleteById("1");

// TodoAPI.getAll().then((data) => {
//   console.log("4", data);
// });

export function TodoApp() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoAPI.getAll().then((data) => setList(data));
  }, []);

  const handleAdd = (value: string) => {
    //chamada do back-end para adicionar
    TodoAPI.create({ label: value }).then((data) => setList([...list, data]));
  };

  const handleRemove = (id: string) => {
    //chamada do back-end para remover
    TodoAPI.deleteById(id).then(() => {
      setList([...list.filter((item) => item.id !== id)]);
    });
  };

  return (
    <div>
      <InputAdd onAdd={handleAdd} />
      <List>
        {list.map((listItem) => (
          <TodoItem
            key={listItem.id}
            id={listItem.id}
            label={listItem.label}
            onRemove={() => handleRemove(listItem.id)}
          />
        ))}
      </List>
    </div>
  );
}
