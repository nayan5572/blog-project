import express, { Application, Request, Response } from "express";
import cors from "cors";
import globalErrorHandler from "./app/middlewars/globalErrorHandler";
import notFound from "./app/middlewars/notFound";

const app: Application = express();

// parsers
app.use(express.json());
// app.use(cookieParser());
app.use(cors({ origin: ["http://localhost:5000"] }));

// application routes
// app.use("/api/v1", router);

const test = async (req: Request, res: Response) => {
  res.send("Blog Server is Running");
  Promise.reject();
};
app.get("/", test);

app.use(globalErrorHandler);

// not found
app.use(notFound);

export default app;
