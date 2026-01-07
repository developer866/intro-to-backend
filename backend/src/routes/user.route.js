import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = Router();
router.post("/register", registerUser);

router.get("/test", (req, res) => {
  res.json({ message: "Users route working" });
});

export default router;
