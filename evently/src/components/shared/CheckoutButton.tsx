"use client";

import { IEvent } from "@/lib/database/models/event.model";
import { SignedIn, SignedOut, useUser } from "@clerk/nextjs";
import { Button } from "../ui/button";
import Link from "next/link";
import Checkout from "./Checkout";

export default function CheckoutButton({ event }: { event: IEvent }) {
  const { user } = useUser();
  const userId = user?.publicMetadata.userId as string;

  const hasEventFinished = new Date(event.endDateTime) < new Date();

  console.log({ user, userId }, "<---userdibtnpage");

  return (
    <>
      <div className="flex items-center gap-3">
        {/* Connot buy past event */}
        {hasEventFinished ? (
          <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
        ) : (
          <div>
            <SignedOut>
              <Button asChild size="lg" className="button rounded-full">
                <Link href="/sign-in">Get Tickets</Link>
              </Button>
            </SignedOut>

            <SignedIn>
              <Checkout event={event} userId={userId} />
            </SignedIn>
          </div>
        )}
      </div>
    </>
  );
}
