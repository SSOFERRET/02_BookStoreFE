import styled from "styled-components"
import { OrderSheet } from "../models/order.model";
import { useLocation } from "react-router-dom";

interface Props {
    orderData?: Omit<OrderSheet, "delivery">;
}

function Order({ orderData }: Props) {
    const location = useLocation();
    const orderDataFromCart = location.state;

    console.log(orderDataFromCart)

    return (
        <OrderStyle>
            
        </OrderStyle>
    )
}

const OrderStyle = styled.div``;

export default Order;