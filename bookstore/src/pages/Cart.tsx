import styled from "styled-components"
import Title from "../components/common/Title"
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { deleteCart } from "../api/carts.api";
import Empty from "../components/books/Empty";
import { FaShoppingCart } from "react-icons/fa";

function Cart() {
    const { carts, isEmpty, deleteCartItem } = useCart();
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
        <>
        <Title size="large">장바구니</Title>
            <CartStyle>
                {!isEmpty && (<>
                    <div className='content'>
                        {
                            carts.map((item) => (
                                <CartItem cart={item} key={item.cart_item_id} checkedItems={checkedItems} onCheck={handleCheckItem} onDelete={handleDeleteItem} />
                            ))
                        }
                        </div>
                        <div className="summary">summary</div>
                    </>
                )}
                {isEmpty && (
                    <Empty title="장바구니가 비었습니다." icon={<FaShoppingCart />} />
                )}
            </CartStyle>
        </>
    )
}

const CartStyle = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    padding: 24px 0 0 0;

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .summary {
        display: flex;
    }
`;

export default Cart;