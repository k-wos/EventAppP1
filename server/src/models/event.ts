import { InferSchemaType, Schema, model } from "mongoose";

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    address: { type: String },
    town: { type: String },
    date: { type: Date },
    organizer: { type: String },
  },
  { timestamps: true }
);

type Event = InferSchemaType<typeof eventSchema>;

export default model<Event>("Event", eventSchema);
