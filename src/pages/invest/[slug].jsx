import Head from 'next/head';
import { useRouter } from 'next/router';
import { Interweave } from 'interweave';

import Placeholder from '@/assets/images/placeholder.png';

import Layout from '@/wrappers/Layout';
import LinkButton from '@/components/inputs/LinkButton';
import Loading from '@/components/commons/Loading';

import { formatCurrency } from '@/utilities/general';
import useGetQuery from '@/hooks/useGetQuery';

const Company = () => {
  const { query } = useRouter();

  const { data, status } = useGetQuery({ endpoint: 'offers', param: query?.slug, queryKey: ['offer-details', query?.slug] });

  if (status === 'loading') return (
    <Loading />
  );

  if (status === 'error') return (
    <div className="w-full py-32">
      <p className="text-center text-error">Unable to fetch offer details at the moment.</p>
    </div>
  );

  return (
    <>
      <Head>
        <title>{`${data?.data?.series} - monieworx`}</title>
      </Head>

      <div className="w-full">
        <section className="w-full bg-white">
          <div className="content pb-10">
            <div className="relative w-full h-[176px] bg-[url(https://site-v1.monieworx.com/wp-content/uploads/2023/04/Jishu-header.jpg)] bg-cover bg-no-repeat" />

            <div className="w-full flex flex-wrap items-center">
              <div className="w-full mdx2:w-1/5 p-5 relative text-center mdx2:-mt-[250px]">
                <div className="inline-block -mt-[400px] mdx2:mt-0">
                  <div className="rounded-full bg-white shadow-lg p-1.5">
                    <div
                      style={{ backgroundImage: `url(${data?.data?.issuer_logo || Placeholder})` }}
                      className="w-[130px] h-[130px] rounded-full bg-contain bg-center bg-no-repeat"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full mdx2:w-3/5 p-5">
                <h2 className="text-3xl font-semibold mb-2">{data?.data?.series}</h2>
                <div className="w-full sm:w-[70%] flex items-center mb-5">
                  <div className="relative w-full h-6 rounded-full bg-[#e7ebe4] overflow-hidden">
                    <div style={{ width: `${data?.data?.percent_raised}%` }} className="absolute left-0 top-0 bg-primary w-[10%] h-full rounded-full" />
                  </div>
                  <p className="text-xs font-bold pl-2">{`${data?.data?.percent_raised}%`}</p>
                </div>
                <div className="w-full flex flex-wrap justify-center xs:mb-5">
                  <div className="w-full xs:w-1/5 mb-5 xs:border-r xs:pr-2">
                    <p className="text-sm text-primary font-barlow font-medium mb-1">Raising</p>
                    <p className="text-base font-semibold">{data?.data?.max_amount_formatted}</p>
                  </div>
                  <div className="w-full xs:w-1/5 mb-5 xs:border-r xs:px-2">
                    <p className="text-sm text-primary font-barlow font-medium mb-1">Investors</p>
                    <p className="text-base font-semibold">{data?.data?.investors_count}</p>
                  </div>
                  <div className="w-full xs:w-1/5 mb-5 xs:border-r xs:px-2">
                    <p className="text-sm text-primary font-barlow font-medium mb-1">Interest Rate</p>
                    <p className="text-base font-semibold">{`${data?.data?.interest_rate}%`}</p>
                  </div>
                  <div className="w-full xs:w-1/5 mb-5 xs:border-r xs:px-2">
                    <p className="text-sm text-primary font-barlow font-medium mb-1">Tenor</p>
                    <p className="text-base font-semibold">{`${data?.data?.tenure} days`}</p>
                  </div>
                  <div className="w-full xs:w-1/5 mb-5 xs:pl-2">
                    <p className="text-sm text-primary font-barlow font-medium mb-1">Minimum Investment</p>
                    <p className="text-base font-semibold">{formatCurrency(data?.data?.min_investment ?? 1000)}</p>
                  </div>
                </div>
              </div>
              <div className="w-full mdx2:w-1/5 p-5 text-center font-barlow">
                <LinkButton
                  href="https://app.monieworx.com/home"
                  className="!inline-block"
                  target="_blank"
                >
                  Invest Now
                </LinkButton>
                <p className="text-xs font-light mt-2">Join our community to invest</p>
              </div>
            </div>

            <div className="w-full mb-10">
              <Interweave content={data?.data?.overview} className="font-medium" />
            </div>

            <div className="w-full flex flex-wrap">
              <div className="w-full mdx2:w-1/2 p-5">
                <h3 className="text-2xl font-medium mb-5">About</h3>
                <Interweave content={data?.data?.about_issuer} className="text-sm font-light" />
              </div>
              <div className="w-full mdx2:w-1/2 p-5">
                <div className="relative w-full max-w-lg mx-auto h-full xl:px-10">
                  <picture className="w-full">
                    <img
                      src="https://site-v1.monieworx.com/wp-content/uploads/2022/11/q21-featured-slider.png"
                      alt="cover photo"
                      className="w-full h-auto bg-gray-400"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full">
          <div className="content">
            <div className="w-full my-14">
              <h3 className="text-2xl font-medium mb-5">Company Highlights</h3>
              <Interweave content={data?.data?.company_highlights} className="font-light" />
            </div>
            <hr className="text-black" />
            <div className="w-full mt-5">
              <Interweave content={data?.data?.risk_warning} className="text-xs font-light leading-relaxed" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

Company.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Company;
