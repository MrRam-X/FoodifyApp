import React from "react";
import Modal from "react-bootstrap/Modal";

function IngredientsModal(props) {
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
            The Ingredients goes here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default IngredientsModal;
