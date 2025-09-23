import {
  configureStore,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";


const API_KEY = import.meta.env.VITE_APP_API_KEY || 'api_key';

const urlSuccess = `http://www.omdbapi.com/?apikey=${API_KEY}&i=tt3896198&t=shrek`;
const urlError = `http://www.omdbapi.com/?apikey=none&i=tt3896198&t=shrek`; // para testar erro

export const fetchTodos = createAsyncThunk("todos/fetchMovie", async () => {
  const res = await fetch(urlSuccess);
  if (!res.ok) { // gerando um erro para testar o estado de falha - API trata retornando {}
    throw new Error(
      `Erro HTTP ${res.status}: ${res.statusText || "Desconhecido"}`
    );
  }

  const data =  await res.json();
  return [data]
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    addMovie: (state, action) => {
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

export const { addMovie } = todosSlice.actions;

export const store = configureStore({
  reducer: { todos: todosSlice.reducer },
});
