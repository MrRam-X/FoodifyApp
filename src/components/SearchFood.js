import React from "react";
import { useState } from "react";
// import { Link, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
// import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import PrimaryView from "./PrimaryView";

function SearchFood() {
  const [searchedFood, setSearchedFood] = useState("");
  const [resultFood, setResultFood] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [resultFound, setResultFound] = useState(false);
  const [ingredients, setIngredients] = useState(null);
  const [recipe, setRecipe] = useState(null);

  function foodSearchHandler(e) {
    e.preventDefault();
    fetch(
      `https://api.spoonacular.com/recipes/complexSearch?query=${searchedFood}&apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setSearchedFood("");
        setResultFood(result.results);
        setResultFound(true);
        setIsLoading(false);
        //console.log(resultFood.results.length);
        if (result.results.length === 0) {
          window.alert("No such food found");
          setIsLoading("true");
          setResultFound(false);
        }
      })
      .catch((error) => {
        console.log(error);
        // setSearchedFood("");
        // setResultFood([]);
      });

    // console.log(
    //   `https://api.spoonacular.com/recipes/complexSearch?query=${searchedFood}&apiKey=${process.env.REACT_APP_FOOD_API_KEY}`
  }
  return (
    <div>
      <Container fluid style={{ minWidth: "350px", width: "60%" }}>
        <Card style={{ margin: "10px 0px", padding: "1em" }}>
          <Card.Body>
            <Card.Title>Search Your Food</Card.Title>
            <Form onSubmit={foodSearchHandler}>
              <Form.Group>
                <Form.Label>Food Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="eg :- pasta, burger, etc."
                  required
                  value={searchedFood}
                  onChange={(e) => {
                    setSearchedFood(e.target.value);
                  }}
                />
              </Form.Group>

              <Button type="submit" variant="primary">
                Search Food
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Container>
      <PrimaryView
        resultFound={resultFound}
        resultFood={resultFood}
        searchedFood={searchedFood}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SearchFood;
