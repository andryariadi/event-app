"use client";
import { headerLinks } from "@/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
  const pathName = usePathname();

  // console.log(pathName, "<----dipathName");

  return (
    <>
      <ul className="flex md:flex-between w-full flex-col md:flex-row items-start gap-5">
        {headerLinks.map((link) => {
          const isActive = pathName === link.route;
          return (
            <li key={link.route} className={`${isActive && "bg-rose-600 px-3 py-1 rounded-md text-white"} flex-center  whitespace-nowrap font-medium text-lg`}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
