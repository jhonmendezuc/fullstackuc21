import taskService from "../services/taskService.js";

async function getTasks(req, res) {
  const data = await taskService.getTask();
  res.status(200).json({
    message: "list task",
    data: data,
  });
}

async function creatTask(req, res) {
  const body = req.body;
  const data = await taskService.createTask(body);
  res.status(201).json({ message: "Task created", data: data });
}

async function updateTasks(req, res) {
  const body = req.body;
  const id = req.params.id;
  const data = await taskService.updateTask(id, body);
  res.status(200).json({ message: "Task update", data: data });
}

async function deleteTasks(req, res) {
  const id = req.params.id;
  const data = await taskService.deleteTask(id);
  res.status(200).json({ message: "Task delete", data: data });
}

export default {
  getTasks,
  creatTask,
  updateTasks,
  deleteTasks,
};
