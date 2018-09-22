import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setProductData} from '../action/index'
class Order extends Component {
  constructor(props){
    super(props);

      this.handleSelect=this.handleSelect.bind(this);

  }
  handleSelect(e){

  let  order=this.props.data;
    if(e.target.value=='highest')
    {
      order.sort((a, b) => (b.price - a.price))
    }
    else if(e.target.value=='lowest'){
      order.sort((a, b) => (a.price - b.price));
    }
    else{
    }
    this.props.setProductData(order);
   //console.log(this.props.data);
  }
  render(){
    console.log("order");
    return(
      <div className="row">
      <select onChange={this.handleSelect}>
      <option  value="select">select</option>
      <option value="lowest" selected>lowest to highest</option>
      <option value="highest">highest to lowest</option>
     </select>
     </div>
    )
  }
}
function mapStateToProps(state){
  return {
    data:state.products
  }
}

export default connect(mapStateToProps,{setProductData})(Order);
