import React,{Component} from 'react';
import Modal from 'react-responsive-modal';
 
export default class App extends Component {
constructor(props){
  super(props);
  this.state = {
    open: this.props.show,
  }
} 
 
  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };
 
  render() {
    const { open } = this.state;
    return (
      <div>
        <button onClick={this.onOpenModal}>Open modal</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    );
  }
}