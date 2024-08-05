import Head from 'next/head';

import Layout from '@/wrappers/Layout';
import Header from '@/components/pages/contact/Header';
import FormSection from '@/components/pages/contact/FormSection';

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact - monieworx</title>
      </Head>

      <div className="w-full">
        <Header />
        <FormSection />
      </div>
    </>
  );
};

Contact.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Contact;
