import Express from "express";
import urlRoute from "./routes/url.js";
import {connectToMongodb} from './connect.js';
import cors from "cors";

const port = 5000;
const app = Express();
app.use(cors());

app.use(Express.json());
connectToMongodb("mongodb://127.0.0.1:27017/shortUrl") 
.then(()=> console.log("Mongo Connected!!"));

app.use("/url",urlRoute);
app.use("/shortId/",urlRoute);
app.listen(port,()=> console.log(`Server running on port ${port}.`));