import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setProductData} from '../action/index'
class Cart extends Component {
  constructor(props){
    super(props);

  }
  render(){
    return(
    )
  }
}
function mapStateToProps(state){
  return {
    data:state.products
  }
}

export default connect(mapStateToProps,{setProductData})(Cart);
