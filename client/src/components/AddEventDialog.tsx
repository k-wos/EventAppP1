import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { EventModel } from "../models/event";
import { useForm } from "react-hook-form";
import { EventInput } from "../network/events.api";
import * as EventApi from "../network/events.api";

interface AddEventDialogProps {
  onDismiss: () => void;
  onEventSave: (event: EventModel) => void;
}

export const AddEventDialog = ({
  onDismiss,
  onEventSave,
}: AddEventDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventInput>();

  async function onSubmit(input: EventInput) {
    try {
      const eventResponse = await EventApi.createEvent(input);
      onEventSave(eventResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>Dodaj Wydarzenie</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="addEventForm" onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Label>Nazwa wydarzenia</Form.Label>
            <Form.Control
              type="text"
              isInvalid={!!errors.name}
              {...register("name", { required: "Wymagane" })}
            />
            <Form.Control.Feedback type="invalid">
              {errors.name?.message}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Opis</Form.Label>
            <Form.Control as="textarea" rows={5} {...register("description")} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" form="addEventForm" disabled={isSubmitting}>
          {" "}
          Dodaj
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
