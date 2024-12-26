import { Response } from "express";

type Tresponce<T> = {
  statusCode: number;
  message: string;
  success: boolean;
  data?: T;
};

const sendResponce = <T>(res: Response, data: Tresponce<T>) => {
  res.status(data.statusCode).json({
    success: data.success,
    message: data.message || "No message provided",
    statusCode: data.statusCode,
    data: data.data || null,
  });
};

export default sendResponce;
