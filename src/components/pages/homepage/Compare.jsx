import Image from "next/image";

import Copy from "../../../../public/images/copy.svg";
import Danger from "../../../../public/images/danger.svg";
import ComparisonTable from "../../../../public/images/comparison-table.svg";

const Compare = () => {
  return (
    <section id="standout" className="mb-1 md:mb-20 mt-10 xl:mt-28 bg-primary">
      <div className="content pb-32 pt-24">
        <p className="text-base font-mono text-white">How We Compare</p>

        <h5 className="font-bold text-white pt-5 text-4xl">
          Why monieworx® Prime <i>just works</i>
        </h5>

        <div className="mt-10 flex flex-wrap justify-between gap-2">
          <div className="md:w-[46%]">
            <p className="text-white text-base">
              We know what’s on your mind right now. “How can monieworx® Prime
              help me achieve my financial goals?”
            </p>

            <p className="text-white text-base pt-1">
              {" "}
              And the simple answer is this: The power of{" "}
              <span className="font-semibold italic"> Compounding.</span>
            </p>

            <p className="text-white pt-4 text-base">
              At monieworx® Prime, we believe in the power of compounding. It's
              not just about the returns you earn; it's about what you do with
              those returns over time.
            </p>

            <p className="text-white pt-4 text-base">
              By making deposits in your wallet and giving your money an
              extended period of time to work for you, you could grow your
              wealth and hit your financial goals sooner than you think.
            </p>

            <div className="mt-8 bg-[#264E13] p-4 rounded-lg">
              <p className="font-mono text-white leading-[22px]">
                Amount = Principal * (1 + (annual interest rate/365 * 30)) ^
                number of times interest is compounded during the tenor
              </p>
            </div>

            <div className="mt-6 bg-[#74a75c] p-4 rounded-lg flex gap-2.5 items-start">
              <Image src={Copy} alt="copy" />

              <p className="font-mono text-white leading-[22px] text-base">
                Wealth creation is not a sprint; it's a marathon – and what sets
                monieworx® Prime apart is our commitment to delivering
                consistent, high-yield returns.
              </p>
            </div>

            <div className="mt-6 bg-[#74a75c] p-4 rounded-lg flex gap-2.5 items-start">
              <Image src={Copy} alt="copy" />

              <p className="font-mono text-white leading-[22px] text-base">
                With a compound interest rate of 20% or more per year, your
                money will grow steadily over time, providing you with the
                financial security and peace of mind you deserve.
              </p>
            </div>
          </div>

          <div className="md:w-[48%] mt-8  md:mt-0">
            <div className="comparison-table">
              <div className="bg-[#B2E195] px-6 py-4 rounded-t-[15px] border-b border-b-[#679E4E]">
                <p className="text-base text-[#1B1E21]">
                  If you deposited <strong className="italic">N100,000</strong>{" "}
                  on the{" "}
                  <strong className="italic"> 1st of January 2024</strong>, In
                  these options, how much will you earn today, at the end of{" "}
                  <strong className="italic">3 months</strong> ?
                </p>
              </div>

              <div className="px-6 py-4">
                <div className="disclaimer">
                  <Image src={Danger} alt="danger" />
                  <p className="font-medium">
                    The values indicated on this table are subject to change{" "}
                  </p>
                </div>

                <div className="mt-4">
                  <Image src={ComparisonTable} alt="table" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Compare;
