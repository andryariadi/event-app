import CheckoutButton from "@/components/shared/CheckoutButton";
import Collection from "@/components/shared/Collection";
import { getEventById, getRelatedEventsByCategory } from "@/lib/actions/event.action";
import { formatDateTime } from "@/lib/utils";
import { SearchParamProps } from "@/types";
import Image from "next/image";

export default async function EventDetailPage({ params: { id }, searchParams }: SearchParamProps) {
  const event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  console.log(event, "<---didetailpage");
  console.log(relatedEvents, "<---didetailpage");

  return (
    <>
      <section className="flex justify-center bg-primary-50 bg-dotted-pattern bg-center bg-contain py-5 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:max-w-7xl md:flex-center gap-20">
          <div className="w-full" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
            <Image src={event.imageUrl} alt="event" width={500} height={500} className="h-full min-h[300px] object-cover object-center" />
          </div>
          <div className="flex flex-col w-full gap-8" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
            <div className="flex flex-col gap-6">
              <h2 className="h3-bold">{event.title}</h2>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex gap-3">
                  <p className="p-bold-20 rounded-full bg-green-500/10 py-2 px-5 text-green-700">{event.isFree ? "Free" : `$${event.price}`}</p>
                  <p className="p-medium-16 rounded-full bg-grey-500/10 text-grey-500 px-4 py-2.5">{event.category.name}</p>
                </div>
                <p className="p-medium-18 ml-2 mt-2 sm:mt-0">
                  by{" "}
                  <span className="text-primary-500">
                    {event.organizer.firstName} {event.organizer.lastName}
                  </span>
                </p>
              </div>
            </div>
            {/* Checkout Button */}
            <CheckoutButton event={event} />
            <div className="flex flex-col gap-5">
              <div className="flex gap-2 md:gap-3">
                <Image src="/assets/icons/calendar.svg" alt="calendar" width={32} height={32} />
                <div className="flex flex-wrap items-center gap-1 p-medium-16 lg:p-regular-20">
                  <p>
                    {formatDateTime(event.startDateTime).dateOnly} - {formatDateTime(event.startDateTime).timeOnly}
                  </p>
                  -
                  <p>
                    {formatDateTime(event.endDateTime).dateOnly} - {formatDateTime(event.endDateTime).timeOnly}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-regular-20">
                <Image src="/assets/icons/location.svg" alt="location" width={32} height={32} className="" />
                <p className="p-medium-16 lg:p-regular-20">{event.location}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="p-bold-20 text-grey-600">What You Will Learn:</p>
              <p className="p-medium-16 lg:p-regular-18">{event.description}</p>
              <p className="p-medium-16 lg:p-regular-18 truncate text-primary-500 cursor-pointer">{event.url.length > 30 ? `${event.url.substring(0, 30)}...` : event.url}</p>
            </div>
          </div>
        </div>
      </section>
      {/* Events from same category */}
      <section className="wrapper flex flex-col my-8 gap-8 md:gap-12">
        <h2 className="h2-bold bg-gradient-to-r from-blue-500 to-rose-500 bg-clip-text text-transparent" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
          Related Events
        </h2>
        <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" data-aos-once="true">
          <Collection
            data={relatedEvents?.data}
            emptyTitle="Sorry, we could not find any events"
            emptyStateSubtext="Come back latter"
            collectionType="All_Events"
            limit={3}
            page={searchParams?.page as string}
            totalPages={relatedEvents?.totalPages}
          />
        </div>
      </section>
    </>
  );
}
