import taskService from "../services/task.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Task, TaskState } from "../interfaces/task.interface";


const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null
}


export const getTask = createAsyncThunk(
  "task/getTask",
  async () => {
    const response = await taskService.getTasks()
    return response
  }
)

export const createTask = createAsyncThunk(
  "task/createTask",
  async (task: Omit<Task, 'id'>) => {
    const response = await taskService.addTask(task)
    return response
  }
)

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async (task: Task) => {
    const response = await taskService.updateTask(task)
    return response
  }
)

export const deleteTask = createAsyncThunk(
  "task/deleteTask",
  async (id: string) => {
    const response = await taskService.deleteTask(id)
    return response
  }
)

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTask.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = action.payload.data
    })
    builder.addCase(getTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string || "Error al obtener las tareas"
    }).addCase(createTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks.push(action.payload.data)
    }).addCase(createTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string || "Error al crear la tarea"
    }).addCase(updateTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = state.tasks.map(task => task.id === action.payload.data.id ? action.payload.data : task)
    }).addCase(updateTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string || "Error al actualizar la tarea"
    }).addCase(deleteTask.fulfilled, (state, action) => {
      state.loading = false
      state.tasks = state.tasks.filter(task => task.id !== action.payload.data.id)
    }).addCase(deleteTask.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message as string || "Error al eliminar la tarea"
    })
  },
})

export default taskSlice.reducer