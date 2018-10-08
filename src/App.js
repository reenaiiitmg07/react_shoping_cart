import React, { Component } from 'react';
import data from './data/products';
import img from './tshirt.jpg';
import {setProductData} from './action/index';
import {setCartData} from './action/index';
import {connect} from 'react-redux';
import Order from './components/order'
import Selsize from './components/selectedsize'
import Cart from './components/cart'
//import Cart from './components/cart'

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        flag:0,
        cart:[],
        openCart:false
      }
  }

manageCart(item,e){
  let addItem=this.state.cart;
  addItem.push(item);
  console.log(addItem);
  this.setState({
    openCart:!this.state.openCart
  })
  this.props.setCartData(addItem);

}
  componentWillMount(){
    this.props.setProductData(data.products);
  }
  render() {
    //console.log(this.props.avlPro);
    let prodlist=[];
    if(this.props.avlPro.length>0){
       prodlist=this.props.avlPro?this.props.avlPro:this.props.data;
    }
    else {
       prodlist=this.props.data;
      }
    //console.log(prodlist);
    return (
        <div className="App row">
          <div className="col-sm-4">
           <Selsize />
          </div>
          <div className="col-sm-8">
               <div className="col-sm-6"><Order /></div>
               <div className="col-sm-6"><Cart /></div>
                <div className="row">
                {prodlist?prodlist.map((item)=>{
                return (
                <div key={item.id} className="col-sm-4">
                <div style={{border: "1px solid gray",padding: "5px 5px 15px 15px"}}>
                {item['isFreeShipping']?"freeshipping":"not freeshipping"}
                <div> <img src={img}style={{width: '50%'}}/></div>
                <div>{item['title']}</div>
                <div className="row">{item['currencyFormat']}{item['price']}</div>
                <div><button onClick={this.manageCart.bind(this,item)} value={item.id}>Add To Cart</button></div>
                </div>
                </div>
                )
            }):null}
            {this.state.openCart?<Cart  show={this.state.openCart}/>:null}
      </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  return {
    data:state.products,
    avlPro:state.sizedata
  }
}

export default connect(mapStateToProps,{setProductData,setCartData})(App);
