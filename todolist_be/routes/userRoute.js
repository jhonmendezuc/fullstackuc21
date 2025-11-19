import { Router } from "express";
import userController from "../controllers/userController.js";
import validate from "../midlewares/validate.js";
const router = Router();
//router.use(validate.validateRequest);
router.get("/", userController.getUsers);
router.post("/", userController.creatUsers);
router.put("/:id", userController.updateUsers);
router.delete("/:id", userController.deleteUsers);

export default router;
