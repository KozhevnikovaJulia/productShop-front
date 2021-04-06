import React, { useEffect } from "react";
import "../App.css";
import Button from "@material-ui/core/Button";
import { useDispatch, useSelector } from "react-redux";
import { setCountOfProduct, setTotalPrice } from "../../bll/reducer";

export const ShoppingCartItem = ({ product, count }) => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state) => state.app.shoppingCart);
    const sum = product.price * count;

    const increaseOnClick = () => {
        dispatch(setCountOfProduct(product.id, "increase"));
    };
    const decreaseOnClick = () => {
        dispatch(setCountOfProduct(product.id, "decrease"));
    };
    const currentTotalPrice = shoppingCart.reduce((acc, value) => {
        return acc + value.product.price * value.count;
    }, 0);
    useEffect(() => {
        dispatch(setTotalPrice(currentTotalPrice));
    }, [count]);

    return (
        <div className="itemShoppingCart">
            <div>
                <img src={product.img} />
            </div>
            <div>
                {product.title}
                {product.description}
            </div>
            <div>{product.description}</div>
            <h1>{sum} $</h1>
            <Button
                disabled={count < 2 ? true : false}
                onClick={decreaseOnClick}
                color="inherit"
                type={"submit"}
                variant={"contained"}
            >
                -
            </Button>
            <div>{count}</div>
            <Button
                onClick={increaseOnClick}
                color="inherit"
                type={"submit"}
                variant={"contained"}
            >
                +
            </Button>
        </div>
    );
};
