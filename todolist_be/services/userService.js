import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

const prisma = new PrismaClient();
dotenv.config();

async function getUser() {
  const data = await prisma.user.findMany();
  return data;
}

async function createUser(body) {
  const data = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      rol: body.rol,
      password: await passwordHash(body.password),
    },
  });
  return data;
}
async function updateUser(body, id) {
  const data = await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: body.name,
      email: body.email,
      rol: body.rol,
      password: await passwordHash(body.password),
    },
  });
  return data;
}
async function deleteUser(id) {
  const data = await prisma.user.delete({
    where: {
      id: id,
    },
  });
  return data;
}
async function login(body) {
  const data = await prisma.user.findUnique({
    where: {
      email: body.email,
    },
  });

  if (data) {
    const matchPassword = await passwordCompare(body.password, data.password);
    if (matchPassword) {
      data.password = "";
      const token = jwt.sign(data, process.env.SECRET_KEY);
      return { message: "Inicio de sesión Exitoso", data: token };
    }
    return { message: "Contraseña incorrecta", data: null };
  }

  return { message: "Usuario no existe", data: data };
}
async function logOut() {}

async function passwordHash(password) {
  const hash = await bcrypt.hash(password, 10);
  return hash;
}

async function passwordCompare(password, hash) {
  const compare = await bcrypt.compare(password, hash);
  return compare;
}

export default {
  getUser,
  createUser,
  updateUser,
  deleteUser,
  login,
  logOut,
};
