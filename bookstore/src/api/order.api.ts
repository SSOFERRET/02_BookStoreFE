import { Order, OrderDetailItem, OrderSheet } from "@/models/order.model";
import { httpClient, requestHandler } from "@/api/http";

export const order = async (orderData: OrderSheet) => {
    return await requestHandler("post", "/orders", orderData)
}

export const fetchOrders = async () => {
    const response = await httpClient.get<Order[]>("/orders");
    return response.data;
};

export const fetchOrderDetail = async (orderId: number) => {
    const response = await httpClient.get<OrderDetailItem[]>(`/orders/${orderId}`);
    return response.data;
}