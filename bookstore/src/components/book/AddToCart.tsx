import styled from "styled-components";
import Button from "../common/Button";
import InputText from "../common/InputText";


function AddToCart() {
    return (
        <AddToCartStyle>
            <InputText inputType="number" />
            <Button size="medium" scheme="normal">
                +
            </Button>
            <Button size="medium" scheme="normal">
                -
            </Button>
            <Button size="medium" scheme="primary">
                장바구니 담기
            </Button>
        </AddToCartStyle>
    )
}

const AddToCartStyle = styled.div`

`;

export default AddToCart;