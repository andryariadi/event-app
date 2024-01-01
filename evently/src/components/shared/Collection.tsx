import { IEvent } from "@/lib/database/models/event.model";
import Card from "./Card";
import Pagination from "./Pagination";

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  collectionType?: "All_Events" | "Events_Organized" | "My_Tickets";
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
};

export default function Collection({ data, emptyTitle, emptyStateSubtext, collectionType, limit, page, totalPages = 0, urlParamName }: CollectionProps) {
  return (
    <>
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5 xl:gap-10">
            {data.map((event) => {
              const hasOrderLink = collectionType === "Events_Organized";
              const hidePrice = collectionType === "My_Tickets";
              return (
                <li key={event._id} className="flex justify-center">
                  <Card event={event} hasOredrLink={hasOrderLink} hidePrice={hidePrice} />
                </li>
              );
            })}
          </ul>

          {totalPages > 1 && <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages} />}
        </div>
      ) : (
        <div className="wrapper flex-center flex-col gap-3 w-full min-h-[200px] py-28 rounded-[14px] bg-grey-50 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
}
