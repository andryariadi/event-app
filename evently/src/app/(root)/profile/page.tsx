import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.action";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function ProfilePage() {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const organizedEvent = await getEventsByUser({ userId, page: 1 });

  return (
    <>
      {/* My Ticket */}
      <section className="bg-primary-50 bg-dotted-pattern bg-center bg-cover py-5 md:py-10">
        <div className="wrapper flex items-center justify-center md:justify-between">
          <h3 className="h3-bold text-center md:text-left">My Ticket</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">Explore More Events</Link>
          </Button>
        </div>
      </section>
      {/* <section className="wrapper my-8">
        <Collection
          data={events?.data}
          emptyTitle="Sorry, no event tickets purchased yet"
          emptyStateSubtext="No worries - plenty  of existing events to explore!"
          collectionType="My_Tickets"
          limit={6}
          page={1}
          urlParamName="ordersPage"
          totalPages={2}
        />
      </section> */}

      {/* Events  Organized */}
      <section className="bg-primary-50 bg-dotted-pattern bg-center bg-cover py-5 md:py-10">
        <div className="wrapper flex items-center justify-center md:justify-between">
          <h3 className="h3-bold text-center md:text-left">Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">Create New Event</Link>
          </Button>
        </div>
      </section>
      <section className="wrapper my-8">
        <Collection data={organizedEvent?.data} emptyTitle="Sorry, no event  have been created yet" emptyStateSubtext="Go and create some now!" collectionType="Events_Organized" limit={6} page={1} urlParamName="eventsPage" totalPages={2} />
      </section>
    </>
  );
}
