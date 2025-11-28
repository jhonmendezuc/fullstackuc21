import { Router } from "express";
import userController from "../controllers/userController.js";
import validate from "../midlewares/validate.js";
const router = Router();
router.post("/login", userController.logIn);
router.post("/", userController.creatUsers);
//rutas con validacion
router.use(validate.validateRequest);
router.get(
  "/",
  validate.validateRol(["administrador"]),
  userController.getUsers
);
router.put(
  "/:id",
  validate.validateRol(["administrador"]),
  userController.updateUsers
);
router.delete(
  "/:id",
  validate.validateRol(["administrador"]),
  userController.deleteUsers
);

export default router;
