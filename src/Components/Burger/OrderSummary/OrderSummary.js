import React from 'react'
import Aux from '../../../Hoc/Aux'
import Button from '../../UI/Button/Button'

const OrderSummary=(props)=>{
    const ingredients=Object.keys(props.ingredients).map(item=>{
        return <li key={item}><span style={{textTransform:"capitalize"}}>{item}</span>:{props.ingredients[item]}</li>
    })
    return (
        <Aux>
            <h3>Order Summary</h3>
            <p>Your ingredients follow as:</p>
            <ul>{ingredients}</ul>
            <p><strong>TotalPrice:{props.price.toFixed(2)}</strong></p>
            <Button btnType="Danger" onClick={props.modalClose}>CANCEL</Button>
            <Button btnType="Success" onClick={props.continue}>CHECKOUT</Button>
        </Aux>
    )
}

export default OrderSummary
