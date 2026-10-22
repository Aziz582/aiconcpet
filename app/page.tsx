import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CorePillars from "@/components/CorePillars";
import FutureServices from "@/components/FutureServices";
import WaitlistCTA from "@/components/WaitlistCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#070A11] text-slate-100 flex flex-col selection:bg-[#00F2FE]/25 selection:text-[#00F2FE]">
      <Navbar />
      <Hero />
      <CorePillars />
      <FutureServices />
      <WaitlistCTA />
      <Footer />
    </main>
  );
}
