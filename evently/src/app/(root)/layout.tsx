import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen bg-primary-50 bg-dotted-pattern bg-contain">
      <Header />
      <main className="flex-1 mt-[86px]">{children}</main>
      <Footer />
    </div>
  );
}
