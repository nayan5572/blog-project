/* eslint-disable @typescript-eslint/no-explicit-any */
// import mongoose from 'mongoose';
import {
  TErrorSources,
  TGenericErrorResponse,
} from "../interface/err.interface";

const handleDuplicateError = (err: any): TGenericErrorResponse => {
  const match = err.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];

  const errorSources: TErrorSources = [
    {
      path: "",
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 4000;
  return {
    statusCode,
    message: "Invalid ID",
    errorSources,
  };
};

export default handleDuplicateError;
