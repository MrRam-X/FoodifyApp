import React from "react";
import Modal from "react-bootstrap/Modal";
import IngredientList from "./IngredientList";
import ListGroup from "react-bootstrap/ListGroup";

function IngredientsModal(props) {
  const allIngredients = props.allIngredients;

  return (
    <div>
      <Modal
        size="lg"
        show={props.showIngredientModal}
        onHide={() => props.setShowIngredientModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Ingredients for {props.foodTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable>
          {props.isIngredient && (
            <ListGroup variant="flush">
              {allIngredients[0].extendedIngredients.map((item) => {
                return (
                  <ListGroup.Item key={item.id}>{item.original}</ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default IngredientsModal;
