import EventForm from "@/components/shared/EventForm";
import { getEventById } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";

type UpdateEventProps = {
  params: {
    id: string;
  };
};

export default async function UpdateEventPage({ params: { id } }: UpdateEventProps) {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  const event = await getEventById(id);

  console.log(event, "<----- diupdatepage");

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-center bg-cover py-5 md:py-10">
        <h3 className="wrapper h3-bold text-center sm:text-left bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent" data-aos="fade-right" data-aos-duration="1000">
          Update Event
        </h3>
      </section>
      <div className="wrapper my-8 bg-white">
        <EventForm userId={userId} type="Update" event={event} eventId={event._id} />
      </div>
    </>
  );
}
