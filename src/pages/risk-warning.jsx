import Head from 'next/head';
import { Interweave } from 'interweave';

import Layout from '@/wrappers/Layout';
import SubHeader from '@/components/commons/SubHeader';
import riskWarning from '@/data/riskWarning';

const RiskWarning = () => {
  return (
    <>
      <Head>
        <title>Risk Warning - monieworx</title>
      </Head>

      <div className="w-full">
        <SubHeader header="Risk Warning" />

        <section className="w-full bg-white">
          <div className="content pt-14 pb-20">
            <div className="w-full">
              <Interweave className="leading-relaxed" content={riskWarning || ''} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

RiskWarning.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default RiskWarning;
