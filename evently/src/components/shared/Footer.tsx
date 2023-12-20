import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="border-t">
        <div className="wrapper flex flex-center flex-between flex-col sm:flex-row text-center gap-4 p-5">
          <Image src="/assets/images/evently.svg" alt="evently" width={100} height={38} />
          <p className="text-rose-600 font-medium">AndryAriadi © 2023 Evently App. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
