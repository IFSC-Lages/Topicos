// server.ts
import { createServer, Response } from "miragejs";
import estadosMunicipios from "./estados_municipios.json";

export interface Estado {
  id: number;
  grupo: string; // nome do estado
  itens: string[]; // lista de municípios
}
createServer({
  routes() {
    this.namespace = "api";

    // 🔹 GET - Lista todos os estados
    this.get("/estados", (): Estado[] => {
      return estadosMunicipios as Estado[];
    });

    // 🔹 GET - Busca um estado pelo ID
    this.get("/estados/:id", (schema, request): Estado | Response => {
      const id = Number(request.params.id);
      const estado = (estadosMunicipios as Estado[]).find((e) => e.id === id);
      return (
        estado || new Response(404, {}, { error: "Estado não encontrado" })
      );
    });

    // 🔹 POST - Adiciona um novo estado
    this.post("/estados", (schema, request): Estado => {
      const attrs = JSON.parse(request.requestBody) as Estado;
      const estados = estadosMunicipios as Estado[];

      const novoEstado: Estado = {
        ...attrs,
        id: estados.length + 1,
      };

      estados.push(novoEstado);
      return novoEstado;
    });

    // 🔹 PUT - Atualiza estado existente
    this.put("/estados/:id", (schema, request): Estado | Response => {
      const id = Number(request.params.id);
      const attrs = JSON.parse(request.requestBody) as Partial<Estado>;
      const estados = estadosMunicipios as Estado[];

      const index = estados.findIndex((e) => e.id === id);
      if (index !== -1) {
        estados[index] = { ...estados[index], ...attrs };
        return estados[index];
      }

      return new Response(404, {}, { error: "Estado não encontrado" });
    });

    // 🔹 DELETE - Remove estado
    this.delete("/estados/:id", (schema, request): Estado | Response => {
      const id = Number(request.params.id);
      const estados = estadosMunicipios as Estado[];

      const index = estados.findIndex((e) => e.id === id);
      if (index !== -1) {
        const [removido] = estados.splice(index, 1);
        return removido;
      }

      return new Response(404, {}, { error: "Estado não encontrado" });
    });
  },
});
