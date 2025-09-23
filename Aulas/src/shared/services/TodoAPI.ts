import axios from "axios";

// Cria uma instância de Axios, que pode ser configurada com baseURL, headers etc.
// Aqui está vazia, mas poderia ter { baseURL: "/api" }
const axiosInstance = axios.create();

export interface ITodo {
    id: string;
    label: string;
}

// Interface para criar um Todo sem id (o id é gerado pelo servidor)
interface ITodoWithoutId {
    label: string;
}

// Objeto que centraliza todas as funções relacionadas à API de Todos
export const TodoAPI = {

    // --- GET /api/todos ---
    // Busca todos os registros de Todos
    async getAll() {
        const response = await axiosInstance.get('api/todos'); // faz GET
        return response.data.todos; // retorna lista de todos
    },

    // --- POST /api/todos ---
    // Cria um novo Todo a partir de um objeto sem id
    async create(data: ITodoWithoutId) {
        const response = await axiosInstance.post('api/todos', data); // faz POST
        return response.data.todos as ITodo; // força o retorno para ITodo
    },

    // --- PUT /api/todos/:id ---
    // Atualiza um Todo existente pelo id
    async updateById(id: string, data: Partial<ITodoWithoutId>) {
        // Usa crase para interpolar o id na URL
        await axiosInstance.put(`api/todos/${id}`, data); 
        return; // não retorna nada
    },

    // --- DELETE /api/todos/:id ---
    // Remove um Todo existente pelo id
    async deleteById(id: string) {
        await axiosInstance.delete(`api/todos/${id}`);
        return id; // retorna apenas o id removido
    }
}