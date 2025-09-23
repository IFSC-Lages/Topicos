import { useState } from "react";
import { InputSelectEstado } from "./InputSelectEstado";
import { ListaMunicipios } from "./ListaMunicipios";

// Componente principal para integrar tudo
export default function AppEstadosEMunicipioMock() {
  const [estadoSelecionado, setEstadoSelecionado] = useState<string>("");

  return (
    <div>
      <h1>Seleção de Estados e Municípios</h1>

      {/* InputSelectEstado */}
      <InputSelectEstado onSelectEstado={setEstadoSelecionado} />

      {/* ListaMunicipios */}
      <ListaMunicipios estadoSelecionado={estadoSelecionado} />
    </div>
  );
}
