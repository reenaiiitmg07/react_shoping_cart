export const SET_DATA='SET_DATA';
export const SET_SIZE='SET_SIZE';
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
