import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";

const urlSuccess = "https://jsonplaceholder.typicode.com/todos?_limit=10";
const urlError = "https://jsonplaceholder.typicode.com/404"; // para testar erro

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch(urlSuccess);
  if (!res.ok) { // gerando um erro para testar o estado de falha - API trata retornando {}
    throw new Error(
      `Erro HTTP ${res.status}: ${res.statusText || "Desconhecido"}`
    );
  }

  return await res.json();
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      // Enquanto carrega
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      // Quando der certo
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      // Quando falhar
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addTodo } = todosSlice.actions;

export const store = configureStore({
  reducer: { todos: todosSlice.reducer },
});
