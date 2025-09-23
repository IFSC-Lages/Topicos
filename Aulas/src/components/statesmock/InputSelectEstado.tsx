// InputSelectEstado.tsx
import { useEffect, useState } from "react";
import type { Estado, InputSelectEstadoProps } from "./types";
import api from "../../shared/services/api/StateAPI";

export function InputSelectEstado({ onSelectEstado }: InputSelectEstadoProps) {
  const [estados, setEstados] = useState<Estado[]>([]);

  useEffect(() => {
    api
      .get<Estado[]>("/estados")
      .then((res) => {
        setEstados(res.data);
      })
      .catch((err) => console.error("Erro ao buscar estados:", err));
  }, []);

  return (
    <select onChange={(e) => onSelectEstado(e.target.value)}>
      <option value="">Selecione um estado</option>
      {estados.map((estado) => (
        <option key={estado.id} value={estado.grupo}>
          {estado.grupo}
        </option>
      ))}
    </select>
  );
}
