import userService from "../services/userService.js";

async function getUsers(req, res) {
  const data = await userService.getUser();
  res.status(200).json({
    message: "list users",
    data: data,
  });
}
/*
crear usuarios
{
"name" :  "{{$randomFullName}}",
"email" : "{{$randomEmail}}",
"password": "123"
}
*/
async function creatUsers(req, res) {
  const body = req.body;
  const data = await userService.createUser(body);
  res.status(201).json({ message: "Users created", data: data });
}
async function updateUsers(req, res) {
  const body = req.body;
  const id = req.params.id;
  const data = await userService.updateUser(body, id);
  res.status(201).json({ message: "Users updated", data: data });
}
async function deleteUsers(req, res) {
  const id = req.params.id;
  const data = await userService.deleteUser(id);
  res.status(201).json({ message: "User delete", data: data });
}

async function logIn(req, res) {
  const body = req.body;
  const data = await userService.login(body);
  if (data.data) {
    res.status(200).json(data);
  } else {
    res.status(401).json(data);
  }
}
async function logOut() {}

export default {
  getUsers,
  creatUsers,
  updateUsers,
  deleteUsers,
  logIn,
};
