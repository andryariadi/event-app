import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.action";
import { SearchParamProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";

  const events = await getAllEvents({
    query: searchText,
    category: category,
    limit: 6,
    page: page,
  });

  console.log(events, "<-----dihomepage");

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="h1-bold bg-gradient-to-r from-blue-500 to-rose-500 bg-clip-text text-transparent">Host, Connect, Celebrate : Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <div data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
            <Image src="/assets/images/hero.png" alt="hero" width={1000} height={1000} className="object-contain object-center max-h-[50vh] 2xl:max-h-[70vh]" />
          </div>
        </div>
      </section>

      <section id="events" className="wrapper my-8 gap-8 md:gap-12 flex flex-col">
        <div data-aos="zoom-in-up" data-aos-duration="1000">
          <h2 className="h2-bold">
            Trust by <br /> Thousands of Events
          </h2>
        </div>
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="w-full" data-aos="fade-up-right" data-aos-duration="1000">
            <Search />
          </div>
          <div className="w-full" data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="400">
            <CategoryFilter />
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Collection data={events?.data} emptyTitle="Sorry, we could not find any events" emptyStateSubtext="Come back latter" collectionType="All_Events" limit={6} page={page} totalPages={events?.totalPages} />
        </div>
      </section>
    </>
  );
}
