import Head from 'next/head';
import { Interweave } from 'interweave';

import Layout from '@/wrappers/Layout';
import SubHeader from '@/components/commons/SubHeader';
import howItWorks from '@/data/howItWorks';

const HowItWorksInvestors = () => {
  return (
    <>
      <Head>
        <title>How it works - Investors - monieworx</title>
      </Head>

      <div className="w-full">
        <SubHeader
          header='How it works'
          sub="With both active campaigns and exclusive deals that often come with limited-time perks for the earliest backers, there's no better place to begin your investment journey."
        />

        <section className="w-full bg-white">
          <div className="content py-24">
            <div className="w-full flex flex-wrap">
              {howItWorks?.map((item) => (
                <div className="md:flex even:flex-row-reverse md:even:text-right items-center mb-10 last:mb-0" key={item?.title}>
                  <div className="w-full md:w-[30%] md:h-full flex items-center bg-[#e1ffc9] p-5">
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

HowItWorksInvestors.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default HowItWorksInvestors;
