// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

async function getData() {
    const data = await fetch("http://backend:5000/")
        .then((response) => response.json())
        .then((data) => data);
    return data;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const data = getData();
    res.status(200).json(data);
}
