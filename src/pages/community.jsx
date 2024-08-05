import Head from "next/head";

import Layout from "../wrappers/Layout";
import IntroSection from "@/components/commons/IntroSection";
import LinkButton from "@/components/inputs/LinkButton";
import InvestingBenefits from "@/components/pages/community/InvestingBenefits";

const Community = () => {
  return (
    <>
      <Head>
        <title>Community - monieworx</title>
      </Head>

      <div className="w-full">
        {/* <IntroSection breadcrumbText="Community" bg="bg-[url('../assets/images/headers/community.png')]">
          <div className="w-full max-w-2xl mx-auto text-center ">
            <div className="w-full text-white mb-10">
              <h1 className="text-3xl sm:text-[40px] sm:leading-normal font-bold mb-5">
                Let your monie do the work.
              </h1>
              <p className="text-sm font-barlow font-light">
                Achieve your life goals by investing your way towards it.
                We are advocates of investing over savings, creating an easier way
                for Africans to grow wealth without having to accumulate large sums.
              </p>
            </div>
            <LinkButton
              bgColor="bg-[#dcfe0b]"
              target="_blank"
              fontSize="text-base"
              paddingX="px-10"
              className="!inline-block"
              href="https://t.me/+_lgmiHJLLTs0MDM8"
            >
              Join the Community
            </LinkButton>
          </div>
        </IntroSection> */}

        <InvestingBenefits />
      </div>
    </>
  );
};

Community.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Community;
