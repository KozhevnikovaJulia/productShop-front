import Axios from 'axios'

export const ShopAPI = {
    getProducts () {
        return Axios.get("http://localhost:7778/shop")
    },
    createProduct (productTitle, productPrise, productDescription, productImg) {
        return Axios.post("http://localhost:7778/shop", {productTitle, productPrise, productDescription, productImg})
    } 
}
