import React, { Component } from "react";
import Modal from "../../Components/UI/Modal/Modal";
import Aux from "../Aux";
const ErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    };
    componentWillMount() {
     this.reqInterceptors= axios.interceptors.request.use(null, (req) => {
        this.setState({
          error: null
        });
      });
      this.resInterceptors= axios.interceptors.response.use(null, (error) => {
        this.setState({
          error: error
        });
      });
    }
    componentWillUnmount(){
      axios.interceptors.request.eject( this.reqInterceptors)
      axios.interceptors.request.eject( this.resInterceptors)
    }
    errorConfirmHandler = () => {
      this.setState({
        error: null
      });
    };
    render() {
      return (
        <Aux>
          <Modal show={this.state.error} modalClose={this.errorConfirmHandler}>
          {this.state.error?this.state.error.message:null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Aux>
      );
    }
  };
};

export default ErrorHandler;
