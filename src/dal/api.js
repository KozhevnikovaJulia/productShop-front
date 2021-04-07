import Axios from "axios";

export const ShopAPI = {
    getProducts() {
        return Axios.get("https://product-shop-back.herokuapp.com/shop");
    },
    createProduct(productTitle, productPrise, productDescription, productImg) {
        return Axios.post("https://product-shop-back.herokuapp.com/shop", {
            productTitle,
            productPrise,
            productDescription,
            productImg,
        });
    },
};
