// 2. Componente InputFiltro para filtrar os municípios

import { useState } from "react";
import type { InputFiltroMunicipiosProps } from "./types";

export function InputFiltroMunicipios({
  municipios,
  onFiltrar,
  onLimpar,
  onListar,
}: InputFiltroMunicipiosProps) {
  const [valor, setValor] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = e.target.value;
    setValor(novoValor);
    onFiltrar(novoValor);
  };

  const handleClear = () => {
    setValor("");
    onLimpar();
  };

  return (
    <div>
      <input
        type="text"
        value={valor}
        onChange={handleChange}
        placeholder="Filtrar municípios"
      />
      <button onClick={handleClear}>Limpar</button>
      <button onClick={onListar}>Listar</button>
    </div>
  );
}
