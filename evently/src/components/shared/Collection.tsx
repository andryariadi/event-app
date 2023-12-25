type CollectionProps = {
  data: any[];
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full gap-5 xl:gap-10"></div>
      ) : (
        <div className="wrapper flex-center flex-col gap-3 w-full min-h-[200px] py-28 rounded-[14px] bg-grey-50 text-center">
          <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
          <p className="p-regular-14">{emptyStateSubtext}</p>
        </div>
      )}
    </>
  );
}
