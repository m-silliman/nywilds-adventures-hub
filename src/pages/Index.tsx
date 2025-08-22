import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Adventures from "@/components/Adventures";
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Adventures />
      <Featured />
      <Footer />
    </div>
  );
};

export default Index;
