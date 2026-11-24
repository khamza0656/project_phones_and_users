import { Router } from "express";

import ProductController from "../controllers/ProductController.js";

const router = Router();

router.get("/" , ProductController.GetAll)
router.post("/create", ProductController.Create);


export default router;
