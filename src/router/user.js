import { getProfile } from "../controllers/userControllers.js";
import { signup } from "../controllers/userControllers.js";
import { zodSignUpSchema} from "../validators/zodSignUpSchema.js";
import { zodSigninSchema } from "../validators/zodSigninSchema.js";
import { validate } from "../validators/zodValidator.js";
import { signin } from "../controllers/userControllers.js";
import express from "express";

const router = express.Router();

router.post('/signup', validate(zodSignUpSchema), signup);
router.post('/signin',validate(zodSigninSchema), signin);
router.get('/profile', getProfile);
export default router;