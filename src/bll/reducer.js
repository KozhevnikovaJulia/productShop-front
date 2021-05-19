import { ShopAPI } from '../dal/api';

const SET_PRODUCTS = 'SET_PRODUCTS';
const ADD_PRODUCT_SHOPPING_CART = 'ADD_PRODUCT_SHOPPING_CART';
const SET_TOTAL_PRICE = 'SET_TOTAL_PRICE';
const CHANGE_PRODUCT_COUNT = 'CHANGE_PRODUCT_COUNT';
const SET_CURRENT_CUSTOMER_INFO = 'SET_CURRENT_CUSTOMER_INFO';

const initialState = {
  products: [],
  shoppingCart: [],
  itemsCount: 0,
  totalPrice: 0,
  currentСustomerInfo: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case ADD_PRODUCT_SHOPPING_CART:
      return {
        ...state,
        shoppingCart: [...state.shoppingCart, action.payload],
        itemsCount: state.itemsCount + 1,
      };
    case SET_TOTAL_PRICE:
      return {
        ...state,
        totalPrice: action.totalPrice,
      };
    case CHANGE_PRODUCT_COUNT:
      return {
        ...state,
        shoppingCart: state.shoppingCart.map(item => {
          if (item.product.id === action.id) {
            if (action.operation === 'increase') {
              return {
                product: item.product,
                count: item.count + 1,
              };
            } else if (action.operation === 'decrease') {
              return {
                product: item.product,
                count: item.count - 1,
              };
            }
          }
          return item;
        }),
      };
    case SET_CURRENT_CUSTOMER_INFO:
      return {
        ...state,
        currentСustomerInfo: action.currentСustomerInfo,
      };

    default:
      return state;
  }
};

export const setProducts = products => ({ type: SET_PRODUCTS, products });
export const setTotalPrice = totalPrice => ({
  type: SET_TOTAL_PRICE,
  totalPrice,
});
export const addProductToShoppingCart = payload => ({
  type: ADD_PRODUCT_SHOPPING_CART,
  payload,
});
export const setCountOfProduct = (id, operation) => ({
  type: CHANGE_PRODUCT_COUNT,
  id,
  operation,
});
export const getProducts = () => {
  return async dispatch => {
    const promise = await ShopAPI.getProducts();
    dispatch(setProducts(promise.data));
  };
};
export const setCurrentCustomerInfo = currentСustomerInfo => ({
  type: SET_CURRENT_CUSTOMER_INFO,
  currentСustomerInfo,
});
