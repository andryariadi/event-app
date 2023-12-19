import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 md:grid-cols-2 gap-5 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Celebrate : Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <div>
            <Image src="/assets/images/hero.png" alt="hero" width={1000} height={1000} className="object-contain object-center max-h-[50vh] 2xl:max-h-[70vh]" />
          </div>
        </div>
      </section>

      <section id="events" className="wrapper my-8 gap-8 md:gap-12 flex flex-col">
        <div>
          <h2 className="h2-bold">
            Trust by <br /> Thousands of Events
          </h2>
        </div>
        <div className="bg-rose-500 flex flex-col md:flex-row gap-5">
          <div>Search</div>
          <div>CategoryFilter</div>
        </div>
      </section>
    </>
  );
}
