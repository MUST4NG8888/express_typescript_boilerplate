import { safeParse } from "../utility/safeParse";
import express, { NextFunction, Request, Response } from "express";
import { z } from "zod";

export const verify = <Schema extends z.ZodTypeAny>(schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
  const result = safeParse(schema, req.body)
  if (!result) return res.status(400).json("Invalid request")
  next()
};
