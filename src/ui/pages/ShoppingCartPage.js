import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { ShoppingCartItem } from "../components/ShoppingCartItem";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { OrderForm } from "../../ui/components/OrderForm";

export const ShoppingCartPage = () => {
    const shoppingCart = useSelector((state) => state.app.shoppingCart);
    const totalPrice = useSelector((state) => state.app.totalPrice);

    return (
        <div className="shoppingCart">
            <div className="shoppingListWrapper">
                <div className="shoppingList">
                    {shoppingCart.length === 0 ? (
                        <h1>Сart is empty</h1>
                    ) : (
                        shoppingCart.map((item) => {
                            return (
                                <Grid item>
                                    <Paper
                                        elevation={3}
                                        style={{
                                            width: "100%",
                                            padding: "15px",
                                            margin: "10px",
                                            backgroundSize: "100% auto",
                                        }}
                                        key={item.product.id}
                                    >
                                        <ShoppingCartItem
                                            product={item.product}
                                            count={item.count}
                                        />
                                    </Paper>
                                </Grid>
                            );
                        })
                    )}
                </div>
                <div className="order">
                    <OrderForm />
                </div>
            </div>

            <h1>Total: {totalPrice} </h1>
        </div>
    );
};
