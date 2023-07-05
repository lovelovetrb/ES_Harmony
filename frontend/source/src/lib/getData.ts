import { StudentData } from "@/types/types";

export async function getData(id?: string) {
    const url = id ? `http://backend:5002/data/${id}` : "http://backend:5002/data";
    const data: StudentData[] | StudentData = await fetch(url)
        .then((response) => response.json())
        .then((data) => data);
    return data;
}

