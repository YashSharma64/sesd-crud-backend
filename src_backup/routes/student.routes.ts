import { Router } from "express";
import { StudentController } from "../controllers/student.controller";

const router = Router();
const studentController = new StudentController();

router.post("/", studentController.create);
router.get("/:id", studentController.getById);
router.get("/", studentController.getAll);
router.put("/:id", studentController.update);
router.delete("/:id", studentController.delete);

export default router;
