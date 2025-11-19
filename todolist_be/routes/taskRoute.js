import { Router } from "express";
import taskController from "../controllers/taskController.js";
import validate from "../midlewares/validate.js";
const router = Router();
//router.use(validate.validateRequest);
router.get("/", taskController.getTasks);
router.post("/", taskController.creatTask);
router.put("/:id", taskController.updateTasks);
router.delete("/:id", taskController.deleteTasks);

export default router;
