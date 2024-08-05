import Head from 'next/head';
import { Interweave } from 'interweave';

import Layout from '@/wrappers/Layout';
import SubHeader from '@/components/commons/SubHeader';
import termsOfService from '@/data/termsOfService';

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service - monieworx</title>
      </Head>

      <div className="w-full">
        <SubHeader header="Terms of Service" />

        <section className="w-full bg-white">
          <div className="content py-20">
            <div className="w-full">
              <Interweave className="leading-[1.7]" content={termsOfService || ''} />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

TermsOfService.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default TermsOfService;
