export interface EventModel {
  _id: string;
  name: string;
  description?: string;
  address?: string;
  town?: string;
  date?: string;
  organizer?: string;
  createdAt: string;
  updatedAt: string;
}
