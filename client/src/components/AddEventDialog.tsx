import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

interface AddEventDialogProps {
  onDismiss: () => void;
}

export const AddEventDialog = ({ onDismiss }: AddEventDialogProps) => {
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Dodaj Wydarzenie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="addEventForm">
          <Form.Group className="mb-3">
            <Form.Label>Nazwa wydarzenia</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Opis</Form.Label>
            <Form.Control as="textarea" rows={5} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" form="addEventForm">
          {" "}
          Dodaj
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
