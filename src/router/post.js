import express from "express";
import { createPost } from "../controllers/postControllers.js";
import { s3uploader } from "../config/multerConfig.js";
import { getAllPosts } from "../controllers/postControllers.js";
import { validate } from "../validators/zodValidator.js";
import { zodPostSchema } from "../validators/zodPostSchema.js";

const router = express.Router();

router.post("/",  s3uploader.single("image"),validate(zodPostSchema), createPost);
router.get("/", getAllPosts);

export default router;