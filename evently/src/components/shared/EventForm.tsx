"use client";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
};
export default function EventForm({ userId, type }: EventFormProps) {
  return (
    <>
      <h1>EventForm {type}</h1>
    </>
  );
}
