import styled from 'styled-components';
import Title from '../components/common/Title';

function OrderList () {
    return (
        <>
            <Title size='large'>주문 내역</Title>
            <OrderListStyle>
                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>주문일사</th>
                            <th>주소</th>
                            <th>수령인</th>
                            <th>전화번호</th>
                            <th>대표상품명</th>
                            <th>수량</th>
                            <th>금액</th>
                        </tr>
                    </thead>
                    <tbody>
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