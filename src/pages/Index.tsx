import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Cities from "@/components/Cities";
import Safety from "@/components/Safety";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Cities />
        <Safety />
      </main>
      <Footer />
    </div>
  );
};

export default Index;