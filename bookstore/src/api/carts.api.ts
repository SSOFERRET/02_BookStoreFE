import { Cart } from "@/models/cart.model";
import { httpClient } from "@/api/http";

interface AddToCartParams {
    book_id: number;
    quantity: number;
}

export const addToCart = async(params: AddToCartParams) => {
    const response = await httpClient.post("/carts", params);
    return response.data;
}

export const fetchCart = async () => {
    const response = await httpClient.get<Cart[]>("/carts");
    return response.data;
}

export const deleteCart = async (cartId: number) => {
    const response = await httpClient.delete(`/carts/${cartId}`);
    return response.data;
}