import React from "react";
import CartLogo from "../../assets/cart-image.svg";
import { Container, CartImg } from "./styles";
import CartItems from "../../components/CartItens";

function Cart() {
    return (
        <Container>
            <CartImg src={CartLogo} alt="logo-do-carrinho" />
            <CartItems />
        </Container>
    )
}
export default Cart;