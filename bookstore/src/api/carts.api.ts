import { httpClient } from "./http";

interface AddToCartParams {
    book_id: number;
    quantity: number;
}

export const addToCart = async(params: AddToCartParams) => {
    const response = await httpClient.post("/carts", params);
    return response.data;
}