import React from "react";
import { useState } from "react";

import Container from "react-bootstrap/Container";
// import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CardColumns from "react-bootstrap/CardColumns";

import DefaultView from "./DefaultView";

function SearchFood() {
  const [searchedFood, setSearchedFood] = useState("");
  const [resultFood, setResultFood] = useState([]);
  const [resultFound, setResultFound] = useState(false);

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
      })
      .catch((error) => {
        console.log(error);
        setSearchedFood("");
        setResultFood([]);
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
                  placeholder="Enter the food name"
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

      {resultFound === true ? (
        <Container fluid>
          <CardColumns>
            {resultFood !== [] ? (
              resultFood.map((item) => {
                return (
                  <Card key={item.id}>
                    <Card.Img variant="top" src={item.image} />
                    <Card.Body>
                      <Card.Title>{item.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted">{Date()}</small>
                    </Card.Footer>
                  </Card>
                );
              })
            ) : (
              <div>Found Food results 0</div>
            )}
          </CardColumns>
        </Container>
      ) : (
        <DefaultView />
      )}
    </div>
  );
}

export default SearchFood;
