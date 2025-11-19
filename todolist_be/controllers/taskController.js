const tasks = [
  {
    id: 1,
    name: "Task 1",
    description: "This is task 1",
    completed: false,
  },
  {
    id: 2,
    name: "Task 2",
    description: "This is task 2",
    completed: false,
  },
];

function getTasks(req, res) {
  const data = tasks;
  res.status(200).json({
    message: "list task",
    data: data,
  });
}
function creatTask(req, res) {
  const data = req.body;
  tasks.push(data);
  res.status(201).json({ message: "Task created", data: data });
}
function updateTasks(req, res) {
  const data = req.body;
  const id = req.params.id;
  console.log(req);
  console.log(data);
  console.log(id);
}
function deleteTasks(req, res) {
  const id = req.params.id;
  console.log(id);
}

export default {
  getTasks,
  creatTask,
  updateTasks,
  deleteTasks,
};
