import { useEffect, useState } from "react"
import { Order, OrderListItems } from "@/models/order.model";
import { fetchOrderDetail, fetchOrders } from "@/api/order.api";

export const useOrders = () => {
    const [orders, setOrders] = useState<OrderListItems[]>([]);
    const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

    console.log(orders);

    useEffect(() => {
        fetchOrders().then((orders) => {
            setOrders(orders);
        })
    }, []);

    const selectOrderItem = (orderId: number) => {
        // 요청 방어
        if (orders.filter((item) => item.order_id === orderId)[0].detail) {
            setSelectedItemId(orderId);
            return;
        }

        fetchOrderDetail(orderId).then((orderDetail) => {
            setSelectedItemId(orderId);
            setOrders(
                orders.map((item) => {
                    if (item.order_id === orderId) {
                        return {
                            ...item,
                            detail: orderDetail
                        }
                    }
                    return item;
                })
            )
        });
    }

    return { orders,  selectedItemId, selectOrderItem };
}