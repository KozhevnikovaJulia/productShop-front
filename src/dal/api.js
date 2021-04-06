import Axios from "axios";

export const ShopAPI = {
    getProducts() {
        return Axios.get("https://lit-springs-31711.herokuapp.com/shop");
    },
    createProduct(productTitle, productPrise, productDescription, productImg) {
        return Axios.post("https://lit-springs-31711.herokuapp.com/shop", {
            productTitle,
            productPrise,
            productDescription,
            productImg,
        });
    },
};
