import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { EventModel } from "../models/event";
import { useForm } from "react-hook-form";
import { EventInput } from "../network/events.api";
import * as EventApi from "../network/events.api";

interface AddEditEventDialogProps {
  onDismiss: () => void;
  onEventSave: (event: EventModel) => void;
}

export const AddEditEventDialog = ({
  onDismiss,
  onEventSave,
}: AddEditEventDialogProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EventInput>({
    defaultValues: {
      name: "",
      description: "",
      town: "",
      address: "",
      organizer: "",
    },
  });

  async function onSubmit(input: EventInput) {
    try {
      let eventResponse: EventModel;

      eventResponse = await EventApi.createEvent(input);

      onEventSave(eventResponse);
    } catch (error) {
      console.error(error);
      alert(error);
    }
  }
  return (
    <Modal show onHide={onDismiss}>
      <Modal.Header closeButton>
        <Modal.Title>"Dodaj wydarzenie"</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form id="addEditEventForm" onSubmit={handleSubmit(onSubmit)}>
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
          <Form.Group className="mb-3">
            <Form.Label>Adres</Form.Label>
            <Form.Control type="text" {...register("address")} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Miasto</Form.Label>
            <Form.Control type="text" {...register("town")} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Data</Form.Label>
            <Form.Control type="datetime-local" {...register("date")} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Organizator</Form.Label>
            <Form.Control type="text" {...register("organizer")} />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button type="submit" form="addEditEventForm" disabled={isSubmitting}>
          Dodaj
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
