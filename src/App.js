import React, { Component } from 'react';
import data from './data/products';
import img from './tshirt.jpg';
import {setProductData} from './action/index';
import {connect} from 'react-redux';
import Order from './components/order'
//import Cart from './components/cart'

class App extends Component {
  constructor(props){
    super(props);
      this.state={
        flag:0,
        sizes:[],
        cart:[]
      }
   this.showSize=this.showSize.bind(this);
   this.manageCart=this.manageCart.bind(this);
  }
  showSize(e){
    let size = new Set();
    this.props.data.map((item)=>{
     let asize=[];
     asize=item['availableSizes'];
     asize.map((x)=>{
       size.add(x);
     })
    })
   this.setState({sizes:size});
}
manageCart(e){
 console.log(e.target.value);
}
  componentWillMount(){
    this.props.setProductData(data.products);
  }
  render() {
    return (
        <div className="App row">
          <div className="col-sm-4">
          <button onClick={this.showSize}>Show Size</button>
          {this.state.sizes.forEach((value)=>{return(
            <div><button>{value}</button></div>
          )
          })}
          </div>
          <div className="col-sm-8">
               <div className="col-sm-6"><Order /></div>
               <div className="col-sm-6">cart</div>
                <div className="row">
                {this.props.data?this.props.data.map((item)=>{
                return (
                <div key={item.id} className="col-sm-4">
                <div style={{border: "1px solid gray",padding: "5px 5px 15px 15px"}}>
                {item['isFreeShipping']?"freeshipping":"not freeshipping"}
                <div> <img src={img}style={{width: '50%'}}/></div>
                <div>{item['title']}</div>
                <div className="row">{item['currencyFormat']}{item['price']}</div>
                <div><button onClick={this.manageCart} value={item.id}>Add To Cart</button></div>
                </div>
                </div>
                )
            }):null}
      </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state){
  console.log(state)
  return {
    data:state.products
  }
}

export default connect(mapStateToProps,{setProductData})(App);
