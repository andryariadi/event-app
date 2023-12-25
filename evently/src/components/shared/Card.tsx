import { IEvent } from "@/lib/database/models/event.model";
import { formatDateTime } from "@/lib/utils";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { DeleteConfirmation } from "./DeleteConfirmation";

type CardProps = {
  event: IEvent;
  hasOredrLink?: boolean;
  hidePrice?: boolean;
};

export default function Card({ event, hasOredrLink, hidePrice }: CardProps) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();
  return (
    <>
      <div className="group relative flex flex-col min-h-[380px] md:min-h-[438px] w-full max-w-[400px] rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300">
        <Link href={`/events/${event._id}`} style={{ backgroundImage: `url(${event.imageUrl})` }} className="flex-center flex-grow bg-cover bg-center bg-grey-50 text-grey-500" />

        {isEventCreator && !hidePrice && (
          <div className="absolute flex flex-col gap-4 right-2 top-2 bg-white rounded-xl p-3 shadow-sm transition-all duration-300">
            <Link href={`/events/${event._id}/update`}>
              <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
            </Link>
            <DeleteConfirmation eventId={event._id} />
          </div>
        )}

        <Link href={`/events/${event._id}`} className="flex flex-col min-h-[230px] gap-3 md:gap-4 p-5">
          {!hidePrice && (
            <div className="flex gap-2">
              <span className="p-semibold-14 rounded-full bg-green-500/10 text-green-500 px-4 py-1">{event.isFree ? "Free" : `$${event.price}`}</span>
              <p className="p-semibold-14 rounded-full bg-grey-500/10 text-grey-500 px-4 py-1 ">{event.category.name}</p>
            </div>
          )}
          <p className="p-medium-16 p-medium-18 text-grey-500">{formatDateTime(event.startDateTime).dateTime}</p>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
          <div className="flex-between w-full bg-amber-600">
            <p className="p-medium-14 md:p-medium-16 text-grey-600">
              {event.organizer.firstName} {event.organizer.lastName}
            </p>
            {hasOredrLink && (
              <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
                <p className="text-primary-500">Order Details</p>
                <Image src="/asstes/icons/arrow.svg" alt="arrow" width={10} height={10} className="self-center" />
              </Link>
            )}
          </div>
        </Link>
      </div>
    </>
  );
}
