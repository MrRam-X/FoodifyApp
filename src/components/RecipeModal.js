import React from "react";
import Modal from "react-bootstrap/Modal";
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalTitle from 'react-bootstrap/ModalTitle'

import ListGroup from "react-bootstrap/ListGroup";

function RecipeModal(props) {
  const allRecipe = props.allRecipe;

  return (
    <div>
      <Modal
        size="lg"
        show={props.showRecipeModal}
        onHide={() => props.setShowRecipeModal(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Recipe for {props.foodTitle}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body scrollable>
          {props.isRecipe && (
            <ListGroup variant="flush">
              {allRecipe[0].analyzedInstructions[0].steps.map((item) => {
                return (
                  <ListGroup.Item key={item.number}>
                    Step{` ${item.number} : `}
                    {item.step}
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RecipeModal;
