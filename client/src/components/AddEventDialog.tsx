import React from "react";
import { Modal } from "react-bootstrap";

export const AddEventDialog = () => {
  return (
    <Modal show>
      <Modal.Header closeButton>
        <Modal.Title>Dodaj Wydarzenie</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};
