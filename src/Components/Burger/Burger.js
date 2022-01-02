import React from "react";
import {withRouter} from "react-router-dom";
import classes from "./BurgerStyle.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const Burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
  .map((igkey) => {
    return [...Array(props.ingredients[igkey])].map((_, i) => {
      return <BurgerIngredients key={igkey + i} type={igkey} />;
    }); 
  })
  .reduce((arr,el)=>{
    return arr.concat(el);
},[])
  if (!ingredients.length){
    ingredients=<p>Please Start adding Ingredients</p>
  }

  console.log(props);
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {ingredients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};
export default withRouter(Burger);
