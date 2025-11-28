import { Router } from "express";
import taskController from "../controllers/taskController.js";
import validate from "../midlewares/validate.js";
const router = Router();
router.use(validate.validateRequest);
router.get(
  "/",
  validate.validateRol(["administrador", "estudiante"]),
  taskController.getTasks
);
router.post(
  "/",
  validate.validateRol(["administrador", "profesor"]),
  taskController.creatTask
);
router.put("/:id", taskController.updateTasks);
router.delete("/:id", taskController.deleteTasks);

export default router;
