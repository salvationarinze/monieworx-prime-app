import Head from 'next/head';
import { Interweave } from 'interweave';

import Layout from '@/wrappers/Layout';
import SubHeader from '@/components/commons/SubHeader';
import howItWorksFundraisers from '@/data/howItWorksFundraisers';

const HowItWorksFundraisers = () => {
  return (
    <>
      <Head>
        <title>How it works - Fundraisers - monieworx</title>
      </Head>

      <div className="w-full">
        <SubHeader
          header='How it works'
          sub="monieworx is where micro, small and medium-sized businesses take flight. With thousands of investors ready to fund the next big thing, there is no better platform to grow your business."
        />

        <section className="w-full bg-white">
          <div className="content py-24">
            <div className="w-full flex flex-wrap">
              {howItWorksFundraisers?.map((item) => (
                <div className="w-full md:flex even:flex-row-reverse md:even:text-right items-center mb-10 last:mb-0" key={item?.title}>
                  <div className="w-full md:w-[30%] md:h-full flex bg-[#ffedf5] p-5 items-center">
                    <h3 className="w-full text-lg font-bold">{item?.title}</h3>
                  </div>
                  <div className="w-full md:w-[70%] items-center text-sm font-medium p-5">
                    <Interweave className="leading-relaxed" content={item?.desc || ''} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

HowItWorksFundraisers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HowItWorksFundraisers;
