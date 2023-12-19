import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex-center flex-col md:flex-row min-h-screen w-full gap-5 md:gap-10 bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
        <div>
          <Image src="/assets/images/login.svg" alt="login" width={500} height={500} />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
