import estadosMunicipios from "./data/estados_municipios.json";
import type { Estado, InputSelectEstadoProps } from "./types";

// 1. Componente InputSelect para seleção de Estados
export function InputSelectEstado({ onSelectEstado }: InputSelectEstadoProps) {
  return (
    <select
      onChange={(e) => onSelectEstado(e.target.value)}
    >
      <option value="">Selecione um estado</option>
      {(estadosMunicipios as Estado[]).map((estado) => (
        <option key={estado.id} value={estado.grupo}>
          {estado.grupo}
        </option>
      ))}
    </select>
  );
}
