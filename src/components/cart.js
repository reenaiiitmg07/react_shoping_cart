import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setProductData} from '../action/index'
import {setCartData} from '../action/index';
import { Modal,Button,OverlayTrigger,Tooltip,Popover} from 'react-bootstrap'
class Cart extends Component {
  constructor(props){
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };

  }

  handleClose() {
    this.setState({ show: false });
    console.log("close");
  }

  handleShow() {
    this.setState({ show: true });
    console.log("open");
  }

  render(){
    console.log(this.props.data);
    console.log("cart");
    return (
        <div>
          <Button onClick={this.handleShow}>cart</Button>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
        </div>
      );
  }
}
function mapStateToProps(state){
  return {
    data:state.cartdata
  }
}
export default connect(mapStateToProps,{setCartData})(Cart);
