import Express from "express";
import {generateShortUrl,handleRedirecUrl} from "../controllers/url.js";

const router = Express.Router();

router.post("/",generateShortUrl);
router.get("/:shortId",handleRedirecUrl);

export default router;