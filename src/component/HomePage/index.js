import React from "react";
import CardList from "./CardList";
import Header from "./Header";

export default function HomePage(props) {
  return (
    <>
      <Header searchRecipe={(value) => props.searchRecipe(value)} />
      <CardList
        recipes={props.recipes}
        setRecipes={props.setRecipes}
        changeFav={(id) => props.changeFav(id)}
      />
    </>
  );
}
