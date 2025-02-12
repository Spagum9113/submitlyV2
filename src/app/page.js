import Header from "@/app/components/Header";
import HeroSection from "@/app/components/HeroSection";
import ReviewSection from "@/app/components/ReviewSection";
import InfoSection from "@/app/components/InfoSection";
import HowItWorksSection from "@/app/components/HowItWorksSection";
import BenefitsSection from "@/app/components/BenefitsSection";
import WhyChooseUsSection from "@/app/components/WhyChooseUsSection";
import Pricing from "@/app/components/Pricing";
import FAQSection from "@/app/components/FAQSection";
import CTASection from "@/app/components/CTASection";
import Footer from "@/app/components/Footer";
import './globals.css';

export const metadata = {
  title: "My Next.js App",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="bg-[#FAF8EF]">
      <Header />
      <HeroSection />
      <ReviewSection />
      <InfoSection />
      <HowItWorksSection />
      <BenefitsSection />
      <WhyChooseUsSection />
      <Pricing />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}
