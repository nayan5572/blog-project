import cors from "cors";
import express, { Application, Request, Response } from "express";
import globalErrorHandler from "./app/error/global__Error";
import notFound from "./app/error/not__found";
import router from "./app/routes";

const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// router
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Blog server is running ...!");
});

app.use(globalErrorHandler);
app.use(notFound);

export default app;
