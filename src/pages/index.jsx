import Head from "next/head";

import Layout from "../wrappers/Layout";
import HeroSection from "@/components/pages/homepage/HeroSection";
import PrimeSection from "@/components/pages/homepage/PrimeSection";
import WhyPrime from "@/components/pages/homepage/WhyPrime";
import Compare from "@/components/pages/homepage/Compare";
import Testimonials from "@/components/pages/homepage/Testimonials";
import Faqs from "@/components/pages/homepage/Faqs";
import CTA from "@/components/pages/homepage/CTA";

const Home = () => {
  return (
    <>
      <Head>
        <title>monieworx - people investing in people</title>
      </Head>

      <div className="w-full">
        <HeroSection />
        <PrimeSection />
        <WhyPrime />
        <Compare />
        <Testimonials />
        <Faqs />
        <CTA />
      </div>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Home;
