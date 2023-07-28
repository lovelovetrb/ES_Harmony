// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getData } from "@/lib/getData";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.body.id;
  if (id === undefined) {
    const data = await getData(id);
    res.status(200).json(data);
  } else {
    const data = await getData();
    res.status(200).json(data);
  }
}
