import Head from 'next/head';

import Layout from '@/wrappers/Layout';
import Header from '@/components/pages/faqs/Header';
import FaqList from '@/components/pages/faqs/FaqList';

const Contact = () => {
  return (
    <>
      <Head>
        <title>FAQs - monieworx</title>
      </Head>

      <div className="w-full">
        <Header />
        <FaqList />
      </div>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Contact;
