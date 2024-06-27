import styled from "styled-components"
import Title from "../components/common/Title"
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";

function Cart() {
    const { carts } = useCart();

    console.log(carts);
    console.log(typeof carts)
    return (
        <CartStyle>
            <Title size="large">장바구니</Title>
            <div className='content'>
                {
                    carts.map((item) => (
                        <CartItem cart={item} key={item.cart_item_id} />
                    ))
                }
            </div>
            <div className="summary">summary</div>
        </CartStyle>
    )
}

const CartStyle = styled.div`
    
`;

export default Cart;