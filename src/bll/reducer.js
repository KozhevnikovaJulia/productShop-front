import { ShopAPI } from '../dal/api'

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT_SHOPPING_CART= 'ADD_PRODUCT_SHOPPING_CART';
const CHANGE_TOTAL_PRISE = 'CHANGE_TOTAL_PRISE';
const SET_TOTAL_PRISE = 'SET_TOTAL_PRISE'

const initialState = {
    products: [],
    shoppingCart: [],
    itemsCount:0,
    totalPrise:0
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return { ...state, products: action.products }
        case ADD_PRODUCT_SHOPPING_CART:
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, action.product],
                itemsCount: state.itemsCount + 1
            }
        case SET_TOTAL_PRISE:
            return {
                ...state, totalPrise: action.totalPrise
            }
        case CHANGE_TOTAL_PRISE:
            if (action.direction === 'increase') {
                return {
                    ...state, totalPrise: state.totalPrise + action.sum
                }
            } else {
                return {
                    ...state, totalPrise: state.totalPrise - action.sum
                }
            }
        default:
            return state;
    }
}

export const setProducts = (products) => ({ type: SET_PRODUCTS, products })
export const addProductToShoppingCart = (product) => ({ type: ADD_PRODUCT_SHOPPING_CART, product })
export const setTotalPrise = (totalPrise) => ({ type: SET_TOTAL_PRISE, totalPrise })
export const changeTotalPrise = (sum, direction) => ({ type: CHANGE_TOTAL_PRISE, sum, direction})

export const getProducts = () => {
    return async (dispatch) => {
        const promise = await ShopAPI.getProducts();      
                dispatch(setProducts(promise.data))           
        }
    }