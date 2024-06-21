import { Category } from "../models/category.model";
import { httpClient } from "./http";

export const fecthCategory = async () => {
    const response = await httpClient.get<Category[]>('/category');
    return response.data;
}