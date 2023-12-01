import express, {Request, Response} from "express";
import { MONGO_COLLECTIONS, aboutParams } from "../common/common";
import { generateImage, generatePrompt, getMongoData } from "../services/services";
import { createAboutPrompt } from "../utils/utils";


const router = express.Router();

router.get("/workExperience", async (_req:Request, res:Response) => {
  let results = await getMongoData([MONGO_COLLECTIONS.WORKEXPERIENCE]);
  res.send(results).status(200);
});

router.get("/education", async (_req:Request, res:Response) => {
  let results = await getMongoData([MONGO_COLLECTIONS.EDUCATION]);
  res.send(results).status(200);
});

router.get("/default", async (_req:Request, res:Response) => {
  let results = await getMongoData([MONGO_COLLECTIONS.DEFAULT]);
  res.send(results).status(200);
});

router.post("/about", async (req:Request, res:Response) => {
  const aboutParams: aboutParams = req.body;
  const data = await getMongoData(["education", "workExperience", "skills", "history"]);
  const prompt = createAboutPrompt({data, type:"about", ...aboutParams})
  const text = await generatePrompt(prompt, "about");
  res.send(text).status(200);
});

router.post("/home", async (req:Request, res:Response) => {
  const aboutParams: aboutParams = req.body;
  const data = await getMongoData(["education", "workExperience", "skills", "history"]);
  const prompt = createAboutPrompt({data, type:"home", ...aboutParams})
  const words = await generatePrompt(prompt, "about");
  const image =  await generateImage(words);
  res.send({words, image}).status(200);
});

export default router;