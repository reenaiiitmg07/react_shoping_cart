export const SET_DATA='SET_DATA';
export const SET_SIZE='SET_SIZE';
export const SET_CART='SET_CART';

export function setProductData(data){
  return{
    type:SET_DATA,
    payload:data
  }
}
export function setSizeData(data){
  return{
    type:SET_SIZE,
    payload:data
  }
}
export function setCartData(data){
  return{
    type:SET_CART,
    payload:data
  }
}
