import {
  FETCH_DATA,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILED,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
  CREATE_ORDER,
  CLEAR_ORDER,
  FETCH_ORDERS,
  SUB_QUANTITY,
  ADD_QUANTITY,
} from "./constants";
import Axios from "axios";

export const fetchData = (page=1)=>(dispatch)=>{
  dispatch({
    type: FETCH_DATA
  });
  const query = new URLSearchParams(window.location.search);
  query.set("_limit", 6);
  
  Axios.get(process.env.REACT_APP_API_URL + `/products?${query.toString()}`)
    .then(({ data, headers }) => {
      const totalCount = headers["x-total-count"] || data.length
      dispatch(fetchDataSuccess(data, parseInt(totalCount)));
    })
    .catch(err=>{
      dispatch(fetchDataFailed(err));
    })
};

export const fetchDataSuccess = (data, total) => ({
  type: FETCH_DATA_SUCCESS,
  payload: {data, total}
});

export const fetchDataFailed = (err) => ({
  type: FETCH_DATA_FAILED,
  payload: err,
});

export const addProduct = (product) => (dispatch) => {
  Axios.post(process.env.REACT_APP_API_URL + "/products", product)
    .then(() => {
      dispatch(fetchData());
    })
    .catch((err) => dispatch(fetchDataFailed(err)));
};

export const editProduct = (product, cb = () => {}) => (dispatch) => {
  Axios.patch(
    process.env.REACT_APP_API_URL + "/products/" + product.id,
    product
  )
    .then(() => {
      dispatch(fetchData());
      cb();
    })
    .catch((err) => dispatch(fetchDataFailed(err)));
};

export const deleteProduct = (id, cb = () => {}) => (dispatch) => {
  Axios.delete(process.env.REACT_APP_API_URL + "/products/" + id)
    .then(() => {
      dispatch(fetchData());
      cb();
    })
    .catch((err) => dispatch(fetchDataFailed(err)));
};

///cart actions

export const addItemToCart = (item)=> (dispatch, getState)=>{
  const cart = [...getState().products.cart];
  const isInCart = cart.some((cartItem)=>{
    return cartItem.id === item.id;
  });
  if(!isInCart){
    cart.push(item);
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: cart
    })
  };
}

export const removeItemFromCart = (item) => (dispatch, getState) => {
  const cart = getState().products.cart.filter(
    (cartItem) => cartItem.id !== item.id
  );
  dispatch({
    type: REMOVE_ITEM_FROM_CART,
    payload: cart
  });
};

export const clearCart = () => ({
  type: CLEAR_CART,
  payload: []
});

///orders

export const createOrder = (order) => (dispatch) => {
  Axios.post(process.env.REACT_APP_API_URL + "/orders", order)
    .then((response) => {
      dispatch({ type: CREATE_ORDER, payload: response.data });
      localStorage.clear("cart");
      dispatch(clearCart());
    });
};

export const clearOrder = () => (dispatch) => {
  dispatch({ type: CLEAR_ORDER });
};

export const fetchOrders = () => (dispatch) => {
  Axios.get(process.env.REACT_APP_API_URL + "/orders")
    .then((response) => {
      dispatch({ type: FETCH_ORDERS, payload: response.data });
    });
};


//add qt action

 export const addQuantity = (id)=> (dispatch, getState) => {
   const cart = [...getState().products.cart];
   const updated_cart = cart.map(cartItem => 
     cartItem.id === id ? {...cartItem, count: +cartItem.count + 1} : cartItem
   ) 
     dispatch({
       type: ADD_QUANTITY,
       payload: updated_cart,
     });
 };

  export const subQuantity = (id) => (dispatch, getState) => {
    const cart = [...getState().products.cart];
    const updated_cart = cart.map((cartItem) =>
      cartItem.id === id ? { ...cartItem, count: cartItem.count!==1 ? cartItem.count - 1 : 1 } : cartItem
    ); 
    dispatch({
      type: SUB_QUANTITY,
      payload: updated_cart,
    });
  };

  //  if (action.type === SUB_QUANTITY) {
  //    let addedItem = state.items.find((item) => item.id === action.id);
  //    //if the qt == 0 then it should be removed
  //    if (addedItem.quantity === 1) {
  //      let new_items = state.addedItems.filter((item) => item.id !== action.id);
  //      let newTotal = state.total - addedItem.price;
  //      return {
  //        ...state,
  //        addedItems: new_items,
  //        total: newTotal,
  //      };
  //    } else {
  //      addedItem.quantity -= 1;
  //      let newTotal = state.total - addedItem.price;
  //      return {
  //        ...state,
  //        total: newTotal,
  //      };
  //    }
  //  }

// let addedItem = state.items.find(item=> item.id === action.id) 
//         //if the qt == 0 then it should be removed
//         if(addedItem.quantity === 1){
//             let new_items = state.addedItems.filter(item=>item.id !== action.id)
//             let newTotal = state.total - addedItem.price
//             return{
//                 ...state,
//                 addedItems: new_items,
//                 total: newTotal
//             }

// else {
//             addedItem.quantity -= 1
//             let newTotal = state.total - addedItem.price
//             return{
//                 ...state,
//                 total: newTotal
//             }
//         }
