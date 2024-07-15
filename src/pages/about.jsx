import Head from 'next/head';

import Layout from '../wrappers/Layout';
import IntroSection from '@/components/commons/IntroSection';
import AboutUsAndTeam from '@/components/pages/about-us/AboutUsAndTeam';

const About = () => {
  return (
    <>
      <Head>
        <title>About us - monieworx</title>
      </Head>

      <div className="w-full">
        <IntroSection breadcrumbText="About" bg="bg-[url('../assets/images/headers/raise.png')]">
          <div className="w-full max-w-xl mx-auto text-center ">
            <div className="w-full text-white mb-10">
              <h1 className="text-3xl sm:text-[40px] sm:leading-normal font-bold mb-5">
                Everyone can invest.
              </h1>
              <div className="font-barlow">
                <p className="text-sm font-light">
                  Join us in making finance work for all.
                </p>
                <p className="text-sm font-light">
                  We harness the power of the collective wealth of Africans to create individual wealth and meaningful lives for the vast majority.
                </p>
              </div>
            </div>
          </div>
        </IntroSection>

        <AboutUsAndTeam />
      </div>
    </>
  );
};

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default About;
