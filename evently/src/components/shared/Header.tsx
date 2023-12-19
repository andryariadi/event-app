import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
          <Link href="/" className="w-36">
            <Image src="/assets/images/evently.svg" alt="Evently" width={128} height={38} />
          </Link>
          <div className="flex w-32 justify-end gap-3 bg-orange-800">
            <div>1</div>
            <div>2</div>
          </div>
        </div>
      </header>
    </>
  );
}
