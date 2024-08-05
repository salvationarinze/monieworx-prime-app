import Head from 'next/head';

import Layout from '../../wrappers/Layout';
import LinkButton from '@/components/inputs/LinkButton';
import IntroSection from '@/components/commons/IntroSection';
import TrackRecords from '@/components/pages/raise/TrackRecords';

const Raise = () => {
  return (
    <>
      <Head>
        <title>Raise - monieworx</title>
      </Head>

      <div className="w-full">
        <IntroSection breadcrumbText="Raise" bg="bg-[url('../assets/images/headers/raise.png')]">
          <div className="w-full max-w-2xl mx-auto text-center ">
            <div className="w-full text-white mb-10">
              <h1 className="text-3xl sm:text-[40px] sm:leading-normal font-bold mb-5">
                Raise finance through crowdfunding
              </h1>
              <p className="text-sm font-barlow font-light">
                We make it easy for investors to find and invest in businesses just like yours.
                Our community of investors fund businesses that create real impact in Africa.
              </p>
            </div>
            <LinkButton bgColor="bg-[#dcfe0b]" fontSize="text-base" paddingX="px-10" className="!inline-block" href="/contact">
              Get Started
            </LinkButton>
          </div>
        </IntroSection>

        <TrackRecords />
      </div>
    </>
  );
};

Raise.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Raise;
