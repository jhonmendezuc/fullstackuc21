import { axiosInstance } from "./axios.config";
import type { Task, TaskResponse } from "../interfaces/task.interface";


const taskService = {
  getTasks: async (): Promise<TaskResponse<Task[]>> => {
    const response = await axiosInstance.get("/task")
    return response.data
  },
  addTask: async (task: Omit<Task, 'id'>): Promise<TaskResponse<Task>> => {
    task.dueDate = new Date(`${task.dueDate}T12:00:00Z`).toISOString();
    const response = await axiosInstance.post<TaskResponse<Task>>('/task', task);
    return response.data;
  },

  updateTask: async (task: Task): Promise<TaskResponse<Task>> => {
    task.dueDate = new Date(`${task.dueDate}T12:00:00Z`).toISOString();
    const response = await axiosInstance.put<TaskResponse<Task>>(`/task/${task.id}`, task);
    return response.data;
  },

  deleteTask: async (id: string): Promise<TaskResponse<Task>> => {
    const response = await axiosInstance.delete<TaskResponse<Task>>(`/task/${id}`);
    return response.data;
  },
}


export default taskService