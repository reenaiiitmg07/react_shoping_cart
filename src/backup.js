import React, { Component } from 'react';
import data from './data/products';
import img from './tshirt.jpg';
import {setProductData} from './action/index';
import {connect} from 'react-redux';
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        order:[],
        flag:0,
        sizes:[]
      }
      this.handleSelect=this.handleSelect.bind(this);

  }
  handleSelect(e){
    let order=[];
    order=this.props.products;
    if(e.target.value=='highest')
    {
      order.sort((a, b) => (b.price - a.price))
      console.log(order);
    }
    else if(e.target.value=='lowest'){
      order.sort((a, b) => (a.price - b.price));
      console.log(order);
    }
    else{
      console.log(order);
    }
    this.props.setProductData(order);

  }

  componentDidMount(){
    this.props.setProductData(data);
  }
  render() {
      console.log(data.products);
      let products=[];
      let i=0;
      let size = new Set();
      data.products.map((item)=>{
        let asize=[];
        asize=item['availableSizes'];
        asize.map((x)=>{
          size.add(x);
        })
      })
      if(this.state.flag){
        products=this.state.order;
      }
      else{products=this.state.data.products;
      }
    return (
      <div className="App row">
      <div className="col-sm-4">heloo</div>
      <div className="col-sm-8">
      <div className="row">
      <select onChange={this.handleSelect}>
      <option  value="select">select</option>
      <option value="lowest" selected>lowest to highest</option>
      <option value="highest">highest to lowest</option>
     </select>
     </div>
      <div className="row">
      {products.map((item)=>{
      return (
      <div className="col-sm-4">
      {item['isFreeShipping']?"freeshipping":"not freeshipping"}
      <div> <img src={img}style={{width: '50%'}}/></div>
      <div>{item['title']}</div>
      <div className="row">{item['currencyFormat']}{item['price']}</div>
      </div>
      )
})}
      </div>
      </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return {
    data:state.products
  }
}

export default connect(mapStateToProps,{setProductData})(App);
