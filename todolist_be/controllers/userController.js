const users = [
  {
    id: 1,
    name: "user 1",
    description: "This is task 1",
    completed: false,
  },
  {
    id: 2,
    name: "user 2",
    description: "This is task 2",
    completed: false,
  },
  {
    id: 2,
    name: "user 2",
    description: "This is task 2",
    completed: false,
  },
  {
    id: 2,
    name: "user 2",
    description: "This is task 2",
    completed: false,
  },
  {
    id: 2,
    name: "user 2",
    description: "This is task 2",
    completed: false,
  },
  {
    id: 2,
    name: "user 2",
    description: "This is task 2",
    completed: false,
  },
  {
    id: 2,
    name: "user 2",
    description: "This is task 2",
    completed: false,
  },
  {
    id: 2,
    name: "user 2",
    description: "This is task 2",
    completed: false,
  },
  {
    id: 2,
    name: "user 2",
    description: "This is task 2",
    completed: false,
  },
];

function getUsers(req, res) {
  const data = users;
  res.status(200).json({
    message: "list task",
    data: data,
  });
}
function creatUsers(req, res) {
  const data = req.body;
  users.push(data);
  res.status(201).json({ message: "Users created", data: data });
}
function updateUsers(req, res) {
  const data = req.body;
  const id = req.params.id;
  console.log(req);
  console.log(data);
  console.log(id);
}
function deleteUsers(req, res) {
  const id = req.params.id;
  console.log(id);
}

function logIn() {}
function logOut() {}

export default {
  getUsers,
  creatUsers,
  updateUsers,
  deleteUsers,
};
