import Collection from "@/components/shared/Collection";
import { Button } from "@/components/ui/button";
import { getEventsByUser } from "@/lib/actions/event.action";
import { getOrdersByUser } from "@/lib/actions/order.action";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function ProfilePage({ searchParams }: SearchParamProps) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;
  const eventsPage = Number(searchParams?.eventsPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });

  const orderedEvents = orders?.data.map((order: IOrder) => order.event) || [];

  const organizedEvent = await getEventsByUser({ userId, page: eventsPage });

  console.log({ userId, orderedEvents }, "<-----userIdprofile");
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

      <section className="wrapper my-8">
        <Collection
          data={orderedEvents}
          emptyTitle="No event tickets purchased yet"
          emptyStateSubtext="No worries - plenty of exciting events to explore!"
          collectionType="My_Tickets"
          limit={3}
          page={ordersPage}
          urlParamName="ordersPage"
          totalPages={orders?.totalPages}
        />
      </section>

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
        <Collection
          data={organizedEvent?.data}
          emptyTitle="Sorry, no event  have been created yet"
          emptyStateSubtext="Go and create some now!"
          collectionType="Events_Organized"
          limit={6}
          page={eventsPage}
          urlParamName="eventsPage"
          totalPages={organizedEvent?.totalPages}
        />
      </section>
    </>
  );
}
