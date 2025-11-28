import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const validateRequest = (req, res, next) => {
  const headerAuth = req.headers.authorization;
  if (!headerAuth) {
    return res.status(401).json({ message: "No se proporcionó un token" });
  }
  const token = headerAuth.split(" ")[1];

  try {
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verifyToken;
    console.log(verifyToken);
    next();
  } catch (error) {
    return res.status(401).json({ message: "Token no válido" });
  }
};

const validateRol = (rolesAuth) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ message: "No se proporcionó un usuario" });
    }

    if (!rolesAuth.includes(req.user.rol)) {
      return res
        .status(401)
        .json({ message: "No tienes permisos para acceder a esta ruta" });
    }
    next();
  };
};

export default {
  validateRequest,
  validateRol,
};
