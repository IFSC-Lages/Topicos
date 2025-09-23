import { useState } from "react";
import type { Estado, ListaMunicipiosProps } from "./types";
import { InputFiltroMunicipios } from "./InputFiltroMunicipios";
import estadosMunicipios from "./data/estados_municipios.json";

// 3. Componente ListaMunicipios que usa o filtro como children
export function ListaMunicipios({ estadoSelecionado }: ListaMunicipiosProps) {
  const estado = (estadosMunicipios as Estado[]).find(
    (e) => e.grupo === estadoSelecionado
  );

  const [lista, setLista] = useState<string[]>(estado ? estado.itens : []);

  const filtrar = (texto: string) => {
    if (!estado) return;
    const filtrados = estado.itens.filter((m) =>
      m.toLowerCase().includes(texto.toLowerCase())
    );
    setLista(filtrados);
  };

  const limpar = () => {
    if (estado) setLista([]);
  };
const listTodos = ()=>{
      if (estado) setLista(estado.itens);

}
  if (!estado) return <p>Selecione um estado...</p>;

  return (
    <div>
      <InputFiltroMunicipios
        municipios={estado.itens}
        onFiltrar={filtrar}
        onLimpar={limpar}
        onListar={listTodos}
      />

      <ul>
        {lista.map((municipio) => (
          <li key={municipio}>{municipio}</li>
        ))}
      </ul>
    </div>
  );
}
