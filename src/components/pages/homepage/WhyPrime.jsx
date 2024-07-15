import Image from "next/image";

import TrendUp from "../../../../public/images/trend-up.svg";
import Blend from "../../../../public/images/blend.svg";
import Percentage from "../../../../public/images/percentage.svg";

import Settings from "../../../../public/images/settings.svg";
import ReceiptText from "../../../../public/images/receipt-text.svg";

import RefreshCircle from "../../../../public/images/refresh-circle.svg";
import SecurityUser from "../../../../public/images/security-user.svg";
import Messages from "../../../../public/images/messsages.svg";

const WhyPrime = () => {
  return (
    <section id="benefits" className="content pt-6 xl:pt-16 mb-20">
      <div className="text-center xl:w-[57%] m-auto">
        <p className="text-primary font-mono text-base pt-5">Why Prime</p>
        <h5 className="text-black font-bold text-4xl pt-4">
          Why choose monieworx® Prime?
        </h5>
        <p className="text-black text-base pt-4">
          Unlike traditional finance platforms, monieworx® Prime is designed
          with simplicity in mind. We handle all of the complexities for you, so
          you can focus on what matters most — less stress, more life! With us,
          you have one less thing to worry about.
        </p>
      </div>

      <div className="flex flex-wrap mt-12 gap-10">
        <div className="why-card" data-aos="zoom-out" data-aos-duration={500}>
          <div className="why-holder animate-pulse">
            <Image src={TrendUp} alt="trend-icon" />
          </div>

          <div className="pt-3">
            <p className="text-black font-bold text-lg">High-Yield Returns</p>
            <p className="pt-1 text-base">
              Earn a solid 20% per annum on your Prime balance; even more with
              the power of <strong className="italic">compounding.</strong>
            </p>
          </div>
        </div>

        <div className="why-card" data-aos="zoom-out" data-aos-duration={500}>
          <div className="why-holder animate-pulse">
            <Image src={Blend} alt="blend-icon" />
          </div>

          <div className="pt-3">
            <p className="text-black font-bold text-lg">Funds Management</p>
            <p className="pt-1 text-base">
              We handle the process  for you, ensuring ease and stability.
            </p>
          </div>
        </div>

        <div className="why-card" data-aos="zoom-out" data-aos-duration={500}>
          <div className="why-holder animate-pulse">
            <Image src={Percentage} alt="percentage-icon" />
          </div>

          <div className="pt-3">
            <p className="text-black font-bold text-lg">Guaranteed Returns</p>
            <p className="pt-1 text-base">
              Rest easy knowing your money is guaranteed to grow; and
              potentially earn interest-on-interest.
            </p>
          </div>
        </div>

        <div
          className="why-card"
          data-aos="zoom-out"
          data-aos-delay={300}
          data-aos-duration={500}
        >
          <div className="why-holder animate-pulse">
            <Image src={Settings} alt="settings-icon" />
          </div>

          <div className="pt-3">
            <p className="text-black font-bold text-lg">No Fees or Lock-In</p>
            <p className="pt-1 text-base">
              Enjoy membership without any fees or lock-up periods, giving you
              full control over your money.
            </p>
          </div>
        </div>

        <div
          className="why-card"
          data-aos="zoom-out"
          data-aos-delay={300}
          data-aos-duration={500}
        >
          <div className="why-holder animate-pulse">
            <Image src={ReceiptText} alt="receipt-icon" />
          </div>

          <div className="pt-3">
            <p className="text-black font-bold text-lg">Instant Statements</p>
            <p className="pt-1 text-base">
              Easily keep track of your investment portfolio with printable and
              downloadable statements.
            </p>
          </div>
        </div>

        <div
          className="why-card"
          data-aos="zoom-out"
          data-aos-delay={300}
          data-aos-duration={500}
        >
          <div className="why-holder animate-pulse">
            <Image src={RefreshCircle} alt="refresh-icon" />
          </div>

          <div className="pt-3">
            <p className="text-black font-bold text-lg">Flexible Deposits</p>
            <p className="pt-1 text-base">
              Start with just <strong className="italic">N10,000</strong> and
              deposit as much as you want into your wallet, with no maximum
              limit.
            </p>
          </div>
        </div>

        <div
          className="why-card"
          data-aos="zoom-out"
          data-aos-delay={500}
          data-aos-duration={500}
        >
          <div className="why-holder animate-pulse">
            <Image src={SecurityUser} alt="settings-icon" />
          </div>

          <div className="pt-3">
            <p className="text-black font-bold text-lg">Personalised Advice</p>
            <p className="pt-1 text-base">
              Get matched with up to{" "}
              <strong className="italic">3 trusted advisors</strong> who tailor
              your wealth creation strategy to your goals.
            </p>
          </div>
        </div>

        <div
          className="why-card"
          data-aos="zoom-out"
          data-aos-delay={500}
          data-aos-duration={500}
        >
          <div className="why-holder animate-pulse">
            <Image src={Messages} alt="messages-icon" />
          </div>
          <div className="pt-3">
            <p className="text-black font-bold text-lg">Exclusive Community</p>
            <p className="pt-1 text-base">
              Join a community of like-minded individuals for networking and
              exclusive events.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPrime;
