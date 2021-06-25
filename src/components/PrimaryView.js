import React from "react";
import { useState, useEffect } from "react";
import DefaultView from "./DefaultView";
import RecipeModal from "./RecipeModal";
import IngredientsModal from "./IngredientsModal";

import Container from "react-bootstrap/Container";
// import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import { CardColumns } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const PrimaryView = (props) => {
  const [showRecipeModal, setShowRecipeModal] = useState(false);
  const [showIngredientModal, setShowIngredientModal] = useState(false);
  const [modalFoodId, setModalFoodId] = useState(0);
  const [modalFoodName, setModalFoodName] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [isIngredient, setIsIngredient] = useState(false);
  const [isRecipe, setIsRecipe] = useState(false);

  function foodIngredients(id) {
    fetch(
      `https://api.spoonacular.com/recipes/informationBulk?ids=${id}&apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        setIngredients(result);
        setRecipe(result);
        setIsIngredient(true);
        setIsRecipe(true);
        //console.log(ingredients);
      });
  }

  if (props.resultFound === true && props.resultFood !== []) {
    return (
      <Container fluid>
        <CardColumns>
          {props.resultFood.map((item) => {
            return (
              <Card key={item.id} style={{ padding: "1em" }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <Card.Footer
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button
                    onClick={() => {
                      setShowRecipeModal(true);
                      setModalFoodId(item.id);
                      setModalFoodName(item.title);
                      foodIngredients(item.id);
                    }}
                    variant="secondary"
                  >
                    Recipe
                  </Button>

                  <Button
                    onClick={() => {
                      setShowIngredientModal(true);
                      setModalFoodId(modalFoodId);
                      setModalFoodName(item.title);
                      foodIngredients(item.id);
                    }}
                    variant="light"
                  >
                    Ingredient
                  </Button>
                  <RecipeModal
                    isRecipe={isRecipe}
                    recipeId={modalFoodId}
                    foodTitle={modalFoodName}
                    allRecipe={recipe}
                    showRecipeModal={showRecipeModal}
                    setShowRecipeModal={setShowRecipeModal}
                  />
                  <IngredientsModal
                    isIngredient={isIngredient}
                    ingredientId={modalFoodId}
                    foodTitle={modalFoodName}
                    allIngredients={ingredients}
                    showIngredientModal={showIngredientModal}
                    setShowIngredientModal={setShowIngredientModal}
                  />
                </Card.Footer>
              </Card>
            );
          })}
        </CardColumns>
        {/* {console.log(ingredients)} */}
      </Container>
    );
  }
  return <DefaultView />;
};

export default PrimaryView;
