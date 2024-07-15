import Head from 'next/head';

import Layout from '../../wrappers/Layout';
import RaiseFormProvider from '@/providers/RaiseForm';

import FormGroup from '@/components/pages/raise/form/FormGroup';

const RaiseApplication = () => {
  return (
    <>
      <Head>
        <title>Raise Application - monieworx</title>
      </Head>

      <div className="w-full">
        <section className="w-full bg-white">
          <div className="w-full max-w-[1250px] mx-auto pb-14">
            <div className="w-full bg-gradient-to-r from-[#8CD867] to-[#6bb349] px-10 sm:px-20 py-14">
              <div className="w-full max-w-2xl mx-auto text-center font-barlow">
                <h1 className="text-[40px] font-bold mb-6">Source for alternative financing</h1>
                <p className="text-xl font-medium">
                  Tell us about your funding needs - fill in our enquiry form.
                  We will review your enquiry and one of our team will be in touch to discuss your options.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-white">
          <RaiseFormProvider>
            <div className="w-full max-w-[1000px] mx-auto px-6 pb-20">
              <FormGroup />
            </div>
          </RaiseFormProvider>
        </section>

      </div>
    </>
  );
};

RaiseApplication.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default RaiseApplication;
