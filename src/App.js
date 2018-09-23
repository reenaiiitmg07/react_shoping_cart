import React, { Component } from 'react';
import data from './data/products';
import img from './tshirt.jpg';
import {setProductData} from './action/index';
import {connect} from 'react-redux';
import Order from './components/order'
class App extends Component {
  constructor(props){
    super(props);
      this.state={
        flag:0,
        sizes:[]
      }
   this.showSize=this.showSize.bind(this);
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
   this.setState({size:size});
  }
  componentWillMount(){
    this.props.setProductData(data.products);
  }
  render() {
         console.log(this.state.size);
    return (
        <div className="App row">
          <div className="col-sm-4">
          <button onClick={this.showSize}>Show Size</button>
          {this.state.size}
          </div>
          <div className="col-sm-8">
            <Order />
            <div className="row">
                {this.props.data?this.props.data.map((item)=>{
                return (
                <div key={item.id} className="col-sm-4">
                {item['isFreeShipping']?"freeshipping":"not freeshipping"}
                <div> <img src={img}style={{width: '50%'}}/></div>
                <div>{item['title']}</div>
                <div className="row">{item['currencyFormat']}{item['price']}</div>
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
