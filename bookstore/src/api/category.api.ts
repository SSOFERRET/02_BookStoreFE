import { Category } from "../models/category.model";
import { httpClient } from "./http";

export const fecthCategory = async () => {
    const response = await fetch('http://localhost:9999/category', {
    //httpClient.get<Category[]>('/category');
        method: "get",
        headers: {
            "content-type": "application/json"
        }
    })
    const resJson = await response.json();
    return resJson;
}