import styled from "styled-components"
import { Cart } from "../../models/cart.model";
import Title from "../common/Title";
import { formatNumber } from "../../utils/format";
import Button from "../common/Button";
import CheckIconButton from "../common/CheckIconButton";
import { useMemo } from "react";

interface Props {
    cart: Cart;
    checkedItems: number[];
    onCheck: (id: number) => void;
}

function CartItem({ cart, checkedItems, onCheck }: Props) {
    // checkedItems 목록에 내가 있나 ? isChecked : !isChecked
    const isChecked = useMemo(() => {
        return checkedItems.includes(cart.cart_item_id);
    }, [checkedItems, cart.cart_item_id]);

    const handleCheck = () => {
        onCheck(cart.cart_item_id);
    };

    return (
        <CartItemStyle>
            <div className="info">
                <div>
                    <CheckIconButton isChecked={isChecked} 
                    onCheck={handleCheck}/>
                </div>
                <div>
                    <Title size="medium">{cart.title}</Title>
                    <p className="summary">{cart.summary}</p>
                    <p className="price">{formatNumber(cart.price)}원</p>
                    <p className="quantity">{cart.quantity}권</p>
                </div>
            </div>

            <Button size="medium" scheme="normal">
                장바구니 삭제
            </Button>
        </CartItemStyle>
    )
}

const CartItemStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    border: 1px solid ${({ theme }) => theme.color.border};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 12px;

    p {
        padding: 0 0 8px 0;
        margin: 0;
    }
`;

export default CartItem;