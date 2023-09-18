import { NextApiRequest, NextApiResponse } from "next";
import { addEval } from "@/lib/addEval";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, studentEval } = req.body;
  addEval(id, studentEval);
  res.status(200).end();
}
