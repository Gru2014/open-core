import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Resources from "@/components/Resources";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-dmsans bg-white">
      <Header />
      <Resources />
      <Banner />
      <Footer />
    </div>
  );
}
