export interface Estado {
  id: number;
  grupo: string; // nome do estado
  itens: string[]; // lista de municípios
}

export interface InputSelectEstadoProps {
  onSelectEstado: (estado: string) => void;
}

export interface InputFiltroMunicipiosProps {
  municipios: string[];
  onFiltrar: (texto: string) => void;
  onLimpar: () => void;
  onListar: () => void;
}

export interface ListaMunicipiosProps {
  estadoSelecionado: string;
}
