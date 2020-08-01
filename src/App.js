import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./component/HomePage";
import DetailsPage from "./component/DetailsPage";

function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://starlord.hackerearth.com/recipe")
      .then((resp) => resp.json())
      .then((result) => setRecipes(result));
  }, []);

  return (
    <div className="App">
      <Router>
        <Route
          path="/"
          exact
          render={() => (
            <HomePage
              recipes={recipes}
              setRecipes={setRecipes}
              changeFav={(id) => setRecipes(changeFav(recipes, id))}
              searchRecipe={(value) => setRecipes(searchRecipe(recipes, value))}
            />
          )}
        />
        <Route
          path="/recipes/:id"
          render={() => {
            return (
              <DetailsPage
                recipes={recipes}
                changeFav={(id) => setRecipes(changeFav(recipes, id))}
              />
            );
          }}
        />
      </Router>
    </div>
  );
}

const changeFav = (recipes, id) => {
  return recipes.map((recipe) => {
    if (recipe.id === id) return { ...recipe, isFav: !recipe.isFav };
    return recipe;
  });
};

const searchRecipe = (recipes, val) => {
  return recipes.map((recipe) => {
    if (val && recipe.name.toLowerCase().includes(val.toLowerCase()))
      return { ...recipe, isSearch: true };
    else return { ...recipe, isSearch: false };
  });
};

export default App;
