import Head from 'next/head';
import { Interweave } from 'interweave';

import Layout from '@/wrappers/Layout';
import SubHeader from '@/components/commons/SubHeader';
import privacy from '@/data/privacy';

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - monieworx</title>
      </Head>

      <div className="w-full">
        <SubHeader header="Privacy Policy" />

        <section className="w-full bg-white">
          <div className="content py-20">
            <div className="w-full">
              <Interweave className="leading-[1.7]" content={privacy || ''} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

PrivacyPolicy.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default PrivacyPolicy;
