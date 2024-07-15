import Image from "next/image";
import LinkButton from "../../inputs/LinkButton";
import UnderLine from "../../../../public/images/under-line-lg.svg";

const items = [
  "Market-leading returns",
  "Zero-fee everything",
  "No lock-up period (available on-demand)",
  "Exclusive social community",
  "Programmable cash-in (Automated Direct Debit, ADD)",
  "Stamped financial account statements in real-time",
  "The rewards of  a rigorous wealth creation strategy; without the effort",
];
const PrimeSection = () => {
  return (
    <section id="prime" className="rounded-[2rem] bg-[#f7faf6] content mb-20">
      <div className="py-8 md:py-16 px-3 xl:px-12">
        <p className="text-base font-mono text-[#5E9942] pt-5">What is Prime</p>

        <h2 className="font-bold text-3xl md:text-4xl text-black mt-4 leading-[40px] md:leading-[45px] relative">
          {" "}
          Ease. Freedom. Market-leading returns. A community <br /> of
          like-minded MVPs
          <Image
            src={UnderLine}
            alt="right-arrow"
            className="absolute -bottom-2 left-[210px] md:left-[256px]"
          />
        </h2>

        <p className="pt-5 text-base text-black font-bold">
          Welcome to the Prime side of life!
        </p>

        <div
          className="mt-8 flex flex-wrap xl:items-center justify-between"
          data-aos="zoom-in"
          data-aos-duration={500}
        >
          <div className="w-full md:w-1/2 xl:w-[42%] text-black text-base">
            <p>
              <strong className="italic">monieworx® Prime </strong>
              is an SEC-licensed solution for financial growth, designed with
              your ease and freedom in mind.
            </p>

            <p className="pt-3">
              {" "}
              Here, you leverage your money to its fullest potential — earning
              not just a standard{" "}
              <strong className="italic">20% interest</strong>, but also
              unlocking the immense power of{" "}
              <strong className="italic">compound interest</strong> . That means
              your money doesn't just grow; it multiplies exponentially over
              time, earning interest on top of interest and propelling your
              wealth to new heights.
            </p>

            <p className="pt-3">
              {" "}
              And the best part? It couldn't be easier. With{" "}
              <strong className="italic"> Omni®</strong>, monieworx® Prime puts
              the power of smart financial management right at your fingertips.
              <strong className="italic">
                No complicated steps, no hidden fees,
              </strong>{" "}
              and definitely{" "}
              <strong className="italic"> no lockup periods</strong>. Just
              seamless, hassle-free moves.
            </p>
          </div>

          <div className="w-full md:w-[45%] mt-10 md:mt-0">
            <div className="flex flex-wrap gap-8">
              {items.map((item, index) => (
                <div
                  key={item}
                  className={`bg-[#EBF6E3] rounded-lg p-3 flex gap-3 ${
                    items.length - 1 === index ? "w-full" : "w-full xl:w-[47%]"
                  }`}
                >
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3ZM5 5V19H19V5H5ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"
                        fill="#5E9942"
                      />
                    </svg>
                  </span>
                  <p className="text-[#1B1E21] text-base font-semibold">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className="md:w-[178px] mt-7"
          data-aos="zoom-in"
          data-aos-delay={300}
        >
          <LinkButton bgColor="bg-primary" className="rounded-lg h-[52px]">
            <span className="text-base font-semibold text-white">
              Try it out today
            </span>
          </LinkButton>
        </div>
      </div>
    </section>
  );
};

export default PrimeSection;
