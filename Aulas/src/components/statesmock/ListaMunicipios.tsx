// ListaMunicipios.tsx
import { useEffect, useState } from "react";
import { InputFiltroMunicipios } from "./InputFiltroMunicipios";
import type { Estado } from "./types";
import api from "../../shared/services/api/StateAPI";

interface ListaMunicipiosProps {
  estadoSelecionado: string;
}

export function ListaMunicipios({ estadoSelecionado }: ListaMunicipiosProps) {
  const [municipios, setMunicipios] = useState<string[]>([]);
  const [filtrados, setFiltrados] = useState<string[]>([]);

  useEffect(() => {
    if (estadoSelecionado) {
      api.get<Estado[]>("/estados").then((res) => {
        const estado = res.data.find((e) => e.grupo === estadoSelecionado);
        if (estado) {
          setMunicipios(estado.itens);
          setFiltrados(estado.itens);
        }
      });
    }
  }, [estadoSelecionado]);

  const handleFiltrar = (valor: string) => {
    setFiltrados(
      municipios.filter((m) =>
        m.toLowerCase().includes(valor.toLowerCase())
      )
    );
  };

  const handleLimpar = () => setFiltrados(municipios);
  const handleListar = () => setFiltrados(municipios);

  if (!estadoSelecionado) return null;

  return (
    <div>
      <h3>Municípios de {estadoSelecionado}</h3>
      <InputFiltroMunicipios
        municipios={municipios}
        onFiltrar={handleFiltrar}
        onLimpar={handleLimpar}
        onListar={handleListar}
      />
      <ul>
        {filtrados.map((m, index) => (
          <li key={index}>{m}</li>
        ))}
      </ul>
    </div>
  );
}
