import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setProductData} from '../action/index'
class Selsize extends Component {
  constructor(props){
    super(props);
    this.state={
      sizes:[]
    }
    this.showSize=this.showSize.bind(this);
    this.selectSize=this.selectSize.bind(this);
    }
    showSize(e){
      let size = new Set();
      //console.log(this.props.data);
      this.props.data.map((item)=>{
       let asize=[];
       asize=item['availableSizes'];
       asize.map((x)=>{
         size.add(x);
       })
      })
     this.setState({sizes:size});
  }
  selectSize(e){
    console.log(e.target.value);
    let avlProd=this.props.data;
    console.log(avlProd);

  }
  render(){
    let array=[...this.state.sizes];
    return(
      <div>
      <button onClick={this.showSize}>Show Size</button>
      <div className="row">
      {array.map((value)=>{
        return(
        <div className="col-sm-3"style={{padding:"5px 0px 0px 0px"}}><button onClick={this.selectSize} value={value} className="btn btn-primary">{value}</button></div>
      )
      })}
      </div>
      </div>
    )
  }
}
function mapStateToProps(state){
  return {
    data:state.products
  }
}

export default connect(mapStateToProps,{setProductData})(Selsize);
