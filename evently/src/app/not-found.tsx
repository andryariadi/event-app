"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 5000);
  }, [router]);

  return (
    <>
      <div className="h-screen flex-center">
        <Image src="/assets/icons/error.svg" alt="error" fill />
      </div>
    </>
  );
}
