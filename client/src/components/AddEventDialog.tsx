import React from "react";
import { Modal } from "react-bootstrap";

interface AddEventDialogProps {
  onDismiss: () => void;
}

export const AddEventDialog = ({ onDismiss }: AddEventDialogProps) => {
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Dodaj Wydarzenie</Modal.Title>
      </Modal.Header>
    </Modal>
  );
};
