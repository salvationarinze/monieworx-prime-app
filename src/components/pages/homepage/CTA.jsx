import LinkButton from "../../inputs/LinkButton";
const CTA = () => {
  return (
    <section id="resources" className="content mb:20 xl:mb-32">
      <div
        className="bg-[#fefbf7] px-4 md:px-8 pb-16 rounded-[32px]"
        data-aos="zoom-in"
        data-aos-duration={500}
      >
        <p className="text-base text-[#FAA74A] font-mono pt-16">Get Started</p>
        <h2 className="pt-4 text-black font-bold text-4xl leading-[45px] w-full md:w-5/6">
          Ready to get started? monieworx® Prime is making wealth creation
          easier than ever before.
        </h2>

        <p className="pt-4 text-base">
          With monieworx® Prime, you make the most of your money — with{" "}
          <span className="italic font-semibold">high</span>
          returns of <span className="italic font-semibold">
            20% per annum
          </span>{" "}
          and managed deposits. Our platform is easy to use; and there are{" "}
          <span className="italic font-semibold">
            no fees, no waiting periods,
          </span>{" "}
          and <span className="italic font-semibold">no losses.</span>{" "}
        </p>

        <div className="mt-8 flex flex-wrap gap-4 xl:w-2/5">
          <input
            type="email"
            placeholder="Enter your email..."
            className="cta w-full md:w-1/2 xl:w-3/5"
          />

          <LinkButton bgColor="bg-[#222529]" className="w-full md:w-[unset]">
            <span className="text-base font-semibold text-white">
              Get started
            </span>
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default CTA;
