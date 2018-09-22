export const SET_DATA='SET_DATA';
export function setProductData(data){
  return{
    type:SET_DATA,
    payload:data
  }
}
