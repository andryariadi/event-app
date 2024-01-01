import EventForm from "@/components/shared/EventForm";
import { auth } from "@clerk/nextjs";

export default function CreateEventPage() {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  console.log(userId, "<-----> userId");

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-center bg-cover py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left bg-gradient-to-r from-blue-500 to-rose-500 bg-clip-text text-transparent">Create Event</h3>
      </section>
      <div className="wrapper my-8">
        <EventForm userId={userId} type="Create" />
      </div>
    </>
  );
}
