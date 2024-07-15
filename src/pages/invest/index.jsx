import Head from "next/head";

import LinkButton from "@/components/inputs/LinkButton";
import Layout from "../../wrappers/Layout";
import IntroSection from "@/components/commons/IntroSection";
import Deals from "@/components/pages/invest/Deals";

const Invest = () => {
  return (
    <>
      <Head>
        <title>Invest - monieworx</title>
      </Head>

      <div className="w-full">
        <IntroSection
          breadcrumbText="Investors"
          bg="bg-[url('../assets/images/headers/invest.png')]"
        >
          <div className="w-full max-w-2xl mx-auto text-center ">
            <div className="w-full text-white mb-10">
              <h1 className="text-3xl sm:text-[50px] sm:leading-normal font-bold mb-5">
                Investing made simple.
              </h1>
              <div className="font-barlow">
                <p className="text-sm font-light mb-5">
                  We make it simple to invest in and back Africa&apos;s most
                  exciting high-growth businesses.
                </p>
                <p className="text-sm font-light">
                  Whether you&apos;re a beginner or experienced investor, you
                  can join our growing community who are putting their monie to
                  work by building a portfolio of crowd-funded deals with the
                  potential to deliver significant returns.
                </p>
              </div>
            </div>
            <LinkButton
              href="https://app.monieworx.com/sign-up"
              target="_blank"
              bgColor="bg-[#dcfe0b]"
              fontSize="text-base"
              paddingX="px-10"
              className="!inline-block"
            >
              Get Started
            </LinkButton>
          </div>
        </IntroSection>
        <Deals />
      </div>
    </>
  );
};

Invest.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Invest;
