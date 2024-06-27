import styled from "styled-components"
import Title from "../components/common/Title"
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { deleteCart } from "../api/carts.api";

function Cart() {
    const { carts, deleteCartItem } = useCart();
    const [ checkedItems, setCheckedItems ] = useState<number[]>([]);

    const handleCheckItem = (id: number) => {
        if (checkedItems.includes(id)) 
            return setCheckedItems(checkedItems.filter((item) => item !== id));
        return setCheckedItems([...checkedItems, id])
    }

    const handleDeleteItem = (id: number) => {
        deleteCartItem(id);
    }

    return (
        <CartStyle>
            <Title size="large">장바구니</Title>
            <div className='content'>
                {
                    carts.map((item) => (
                        <CartItem cart={item} key={item.cart_item_id} checkedItems={checkedItems} onCheck={handleCheckItem} onDelete={handleDeleteItem} />
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