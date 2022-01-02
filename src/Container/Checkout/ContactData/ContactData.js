import React, { Component } from "react";
import Button from "../../../Components/UI/Button/Button";
import classes from "./ContactData.module.css";
import axios from "../../../axios-orders";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import Input from "../../../Components/UI/Input/Input";
import { connect } from "react-redux";

export class ContactData extends Component {
  state = {
    form: {
      name: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your name"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "your email"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your street"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your country"
        },
        value: "",
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      postalCode: {
        elementType: "input",
        elementConfig: {
          type: "text",
          placeholder: "your zip code"
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
          maxLength: 6
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: "select",
        elementConfig: {
          options: [
            { value: "Fastest", displayValue: "Fastest" },
            { value: "Cheapest", displayValue: "Cheapest" }
          ]
        },
        validation: {},
        value: "Fastest",
        valid: true
      }
    },
    formIsValid: false,
    loading: false
  };
  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {};
    for (let item in this.state.form) {
      formData[item] = this.state.form[item].value;
    }
    const orders = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData
    };
    axios
      .post("/orders.json", orders)
      .then((response) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(this.setState({ loading: false }));
  };

  onChangeHandler = (e, inputIdentifier) => {
    const updatedOrderForm = { ...this.state.form };
    const updatedOrder = { ...updatedOrderForm[inputIdentifier] };
    updatedOrder.value = e.target.value;
    updatedOrder.valid = this.checkValidity(
      updatedOrder.value,
      updatedOrder.validation
    );
    updatedOrder.touched = true;
    console.log(updatedOrder);
    updatedOrderForm[inputIdentifier] = updatedOrder;
    let formValid = true;
    for (let item in updatedOrderForm) {
      formValid = updatedOrderForm[item].valid && formValid;
    }
    this.setState({ form: updatedOrderForm, formIsValid: formValid });
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  };
  render() {
    const InputArray = [];
    for (let key in this.state.form) {
      InputArray.push({
        id: key,
        config: this.state.form[key]
      });
    }
    return (
      <div className={classes.ContactData}>
        <h4>Contact Details</h4>
        {this.state.loading ? (
          <Spinner />
        ) : (
          <form onSubmit={this.orderHandler}>
            {InputArray.map((item) => (
              <Input
                id={item.id}
                invalid={!item.config.valid}
                validation={item.config.validation}
                elementType={item.config.elementType}
                elementConfig={item.config.elementConfig}
                value={item.config.value}
                touched={item.config.touched}
                changed={(e) => this.onChangeHandler(e, item.id)}
              />
            ))}

            <Button btnType="Success" disabled={!this.state.formIsValid}>
              Submit
            </Button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price:state.totalPrice
  };
};

export default connect(mapStateToProps) (ContactData);
