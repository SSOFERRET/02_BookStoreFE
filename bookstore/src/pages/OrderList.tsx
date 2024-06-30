import styled from 'styled-components';
import Title from '../components/common/Title';
import { useOrders } from '../hooks/useOrders';
import { formatDate, formatNumber } from '../utils/format';
import Button from '../components/common/Button';

function OrderList () {
    const { orders, selectedItemId, selectOrderItem } = useOrders();

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
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order) => (
                                <>
                                <tr>
                                    <td>{order.order_id}</td>
                                    <td>{formatDate(order.created_at, "YYYY.MM.DD")}</td>
                                    <td>{order.address}</td>
                                    <td>{order.receiver}</td>
                                    <td>{order.contact}</td>
                                    <td>{order.book_title}</td>
                                    <td>{order.total_quantity} 권</td>
                                    <td>{formatNumber(order.total_price)} 원</td>
                                    <td>
                                        <Button size="small" scheme='normal' onClick={() => {selectOrderItem(order.order_id)}}>
                                            자세히
                                        </Button>
                                    </td>
                                    </tr>
                                    {
                                        selectedItemId === order.order_id && (
                                            <tr>
                                                <td></td>
                                                <td colSpan={8}>
                                                    {
                                                        order.detail &&
                                                        order.detail.map((item) => (
                                                            <li key={item.book_id}>
                                                                <div>
                                                                    <span>{item.book_id}</span>
                                                                    <span>{item.author}</span>
                                                                    <span>{formatNumber(item.price)}원</span>
                                                                </div>
                                                            </li>
                                                        ))
                                                    }
                                                </td>
                                            </tr>
                                        )
                                    }
                                </>
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
    padding: 24px 0 0 0;

    table {
        width: 100%;
        border-collapse: collapse;
        border-top: 1px solid ${({theme}) => theme.color.border};
        border-bottom: 1px solid ${({theme}) => theme.color.border};
        font-size: 14px;
        
        th, 
        td {
            padding: 16px;
            border-bottom: 1px solid ${({theme}) => theme.color.border};
            text-align: center;
            min-width: 90px;
        }
    }
`;

export default OrderList;