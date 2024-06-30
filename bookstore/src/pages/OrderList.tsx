import styled from 'styled-components';
import Title from '../components/common/Title';
import { useOrders } from '../hooks/useOrders';
import { formatDate } from '../utils/format';

function OrderList () {
    const { orders } = useOrders();
    console.log(orders);
    console.log(typeof orders);
    return (
        <>
            <Title size='large'>주문 내역</Title>
            <OrderListStyle>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>주문일자</th>
                            <th>주소</th>
                            <th>수령인</th>
                            <th>전화번호</th>
                            <th>대표상품명</th>
                            <th>수량</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <tr>
                                    <td>{order.order_id}</td>
                                    <td>{formatDate(order.created_at)}</td>
                                    <td>{order.address}</td>
                                    <td>{order.receiver}</td>
                                    <td>{order.contact}</td>
                                    <td>{order.book_title}</td>
                                    <td>{order.total_quantity}</td>
                                    <td>{order.total_price}</td>
                                    </tr>
                            ))
                        }
                        <tr></tr>
                    </tbody>
                </table>
            </OrderListStyle>
        </>
        
    );
}

const OrderListStyle = styled.div`

`;

export default OrderList;