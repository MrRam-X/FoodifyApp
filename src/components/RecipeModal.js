import React from "react";
import Modal from "react-bootstrap/Modal";
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalTitle from 'react-bootstrap/ModalTitle'

function RecipeModal(props) {
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
            The recipe goes here
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

export default RecipeModal;
