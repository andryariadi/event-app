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
      <h1>collection component</h1>
    </>
  );
}
