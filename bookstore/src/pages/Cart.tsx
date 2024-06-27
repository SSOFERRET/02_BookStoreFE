import styled from "styled-components"
import Title from "../components/common/Title"
import CartItem from "../components/cart/CartItem";

function Cart() {
    return (
        <CartStyle>
            <Title size="large">장바구니</Title>
            <div className='content'>
                <CartItem />
            </div>
            <div className="summary">summary</div>
        </CartStyle>
    )
}

const CartStyle = styled.div`
    
`;

export default Cart;