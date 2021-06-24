import React from "react";
import { useState } from "react";
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

  function recipeModalHandler() {
    setShowRecipeModal(true);
  }

  function ingredientModalHandler() {
    setShowIngredientModal(true);
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
                  <Button onClick={recipeModalHandler} variant="secondary">
                    Recipe
                  </Button>
                  <Button onClick={ingredientModalHandler} variant="light">
                    Ingredient
                  </Button>
                  <RecipeModal
                    showRecipeModal={showRecipeModal}
                    setShowRecipeModal={setShowRecipeModal}
                  />
                  <IngredientsModal
                    showIngredientModal={showIngredientModal}
                    setShowIngredientModal={setShowIngredientModal}
                  />
                </Card.Footer>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    );
  }
  return <DefaultView />;
};

export default PrimaryView;
