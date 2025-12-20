export interface Task {
  id: string;
  name: string;
  status: boolean;
  dueDate: string | null;
  userId: string;

}

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

export interface TaskResponse<T> {
  message: string;
  data: T;
}

