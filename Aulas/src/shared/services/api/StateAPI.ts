// api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "/api", // Mirage expõe as rotas nesse namespace
});

export default api;
