import React, { Component } from "react";
import Orders from "../../Components/Orders/Orders";
import axios from "../../axios-orders";
import ErrorHandler from "../../Hoc/ErrorHandler/ErrorHandler";
export class OrdersModal extends Component {
  state = {
    orders: [],
    loading: true
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((response) => {
        let localOrders = [];
        for (let key in response.data) {
          localOrders.push({
            ...response.data[key],
            id: key
          });
        }
       this.setState({loading:false,orders:localOrders})
      })
      .catch((error) => {
        this.setState({loading:false})
      });
  }
  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Orders
            id={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        ))}
      </div>
    );
  }
}

export default ErrorHandler(OrdersModal, axios);
