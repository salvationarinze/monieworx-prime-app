import React from "react";
import Image from "next/image";
import {useEffect, useState, useRef} from "react";

import {CountUp} from "countup.js";
import RightArrow from "../../../assets/svgs/right-arrow.svg";
import EmailIcon from "../../../../public/images/email-icon.svg";
import UnderLine from "../../../../public/images/under-line.svg";
import Sec from "../../../../public/images/sec.svg";
import TrustPilot from "../../../../public/images/trustpilot.svg";
import Star from "../../../../public/images/star.svg";
import NgaCrest from "../../../../public/images/nga-crest.svg";
import LinkButton from "../../inputs/LinkButton";

function HeroSection() {
  const [deposit, setDeposit] = useState("");
  const [duration, setDuration] = useState("");

  const countupRef1 = useRef(null);
  const countupRef2 = useRef(null);

  let countUpAnims = [];

  useEffect(() => {
    const targets = [
      {ref: countupRef1, value: 512876493, options: {decimalPlaces: 2}},
      {ref: countupRef2, value: 3000},
    ];
    initCountUps(targets);

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    targets.forEach(({ref}) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      observer.disconnect();
      countUpAnims.forEach(({anim}) => anim.reset());
    };
  }, []);

  const handleIntersection = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = countUpAnims.find(
          (item) => item.ref.current === entry.target
        );
        if (target) {
          target.anim.start();
          observer.unobserve(entry.target); // Stop observing once animation starts
        }
      }
    });
  };

  const initCountUps = (targets) => {
    targets.forEach(({ref, value, options}) => {
      const countUpAnim = new CountUp(ref.current, value, options);
      if (!countUpAnim.error) {
        countUpAnim.start();
      } else {
        console.error(countUpAnim.error);
      }
      countUpAnims.push({ref, anim: countUpAnim});
    });
  };

  const handleDuration = (e) => {
    const value = e.target.value;

    const formattedValue = value.replace(/[^\d]/g, "");

    const formattedWithCommas = formattedValue.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    setDuration(formattedWithCommas);
  };

  const handleInputChange = (e) => {
    let value = e.target.value;

    value = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");

    const valueParts = value.split(".");
    if (valueParts.length > 1) {
      valueParts[1] = valueParts[1].substring(0, 2);
    }

    if (
      valueParts[0].startsWith("0") &&
      valueParts[0].length > 1 &&
      !valueParts[0].startsWith("0.")
    ) {
      valueParts[0] = valueParts[0].substring(1);
    }

    let formattedIntegerPart = "";
    if (valueParts[0]) {
      formattedIntegerPart = new Intl.NumberFormat().format(valueParts[0]);
    }

    let finalValue = formattedIntegerPart;
    if (valueParts.length > 1) {
      finalValue += "." + valueParts[1];
    }

    setDeposit(finalValue);
  };

  const handleCompoundInterest = () => {
    const cleanDeposit = parseFloat(deposit.replace(/,/g, ""));
    const cleanDuration = parseInt(duration.replace(/,/g, ""), 10);

    if (isNaN(cleanDeposit) || isNaN(cleanDuration)) {
      return "";
    }

    const interestRate = 20 / 100;

    const interest =
      cleanDeposit * Math.pow(1 + interestRate / 365, cleanDuration);

    if (!isFinite(interest)) {
      return "";
    }

    return formatNumber(interest.toFixed(2));
  };

  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <section
      id="calculator"
      className="w-full bg-white pt-6 md:pt-14 pb-0 md:pb-20"
    >
      <div className="content">
        <div className="w-full justify-between flex flex-wrap mdx2:flex-row mb-5 md:mb-14 mt-10">
          <div className="w-full lg:w-[56%] xl:w-[46%] flex flex-col justify-center">
            <div
              data-aos="zoom-in"
              data-aos-delay={300}
              className="bg-[#F5F8FA] h-[50px] flex items-center rounded-[100px] p-2 gap-2"
            >
              <div className="h-[34px] text-xs md:text-sm bg-primary rounded-[100px] text-white flex items-center px-3.5 font-bold">
                NEW
              </div>

              <p className="text-sm md:text-base font-medium text-black">
                Monieworx® launches Prime, a 20% per annum savings acco...
              </p>
              <Image
                src={RightArrow}
                alt="right-arrow"
                className="hidden md:block"
              />
            </div>

            <div className="mt-5" data-aos="fade-up" data-aos-duration={500}>
              <h1 className="text-4xl md:text-[3.25rem] font-extrabold leading-[48px] md:leading-[66px]">
                Plug into <br />
                <span className="text-primary">
                  {" "}
                  monieworx® Prime
                </span> <br /> and beat the inflation.
              </h1>

              <p className="pt-5 text-base relative">
                Fund your wallet and let Omni® generate real returns for you,
                with ease!
                <Image
                  src={UnderLine}
                  alt="right-arrow"
                  className="absolute bottom-6 md:-bottom-0.5 left-[178px]"
                />
              </p>
            </div>

            <div
              className="mt-7 flex gap-4"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              <div className="relative w-1/2">
                <input
                  type="email"
                  className="h-[52px] text-base bg-[#F5F8FA] placeholder:text-[#6D7786] pl-11 w-full"
                  placeholder="Enter your email…"
                />

                <span className="absolute top-[18px] left-4">
                  <Image src={EmailIcon} alt="email-icon" />
                </span>
              </div>
              <LinkButton bgColor="bg-primary">
                <span className="text-base font-semibold text-white">
                  Start investing
                </span>
              </LinkButton>
            </div>

            <p
              className="italic text-sm font-light pt-3"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              20% per annum, No commitments whatsoever, withdraw anytime!
            </p>

            <div className="mt-10" data-aos="zoom-in" data-aos-delay={300}>
              <Image src={Sec} alt="Sec-icon" />

              <div className="flex items-center mt-5 gap-4 font-roboto">
                <p className="font-bold">Excellent</p>

                <div className="flex gap-[2.5px]">
                  {Array.from({length: 5}).map((_, i) => (
                    <Image key={i} src={Star} alt="star" />
                  ))}
                </div>

                <div className="hidden md:flex items-center gap-4">
                  <p>
                    {" "}
                    <strong>16</strong> reviews on
                  </p>

                  <Image src={TrustPilot} alt="trust-pilot" />
                </div>
              </div>

              <div className="flex md:hidden items-center gap-4 mt-2">
                <p>
                  {" "}
                  <strong>16</strong> reviews on
                </p>

                <Image src={TrustPilot} alt="trust-pilot" />
              </div>
            </div>
          </div>

          <div className="mt-8 mdx2:mt-0 w-full mdx2:w-[42%] mb-10 mdx2:mb-0">
            <div
              className="rounded-[15px] bg-white border-[0.5px] border-[#F5F8FA] card-shadow"
              data-aos="zoom-in"
              data-aos-duration={500}
            >
              <div className="bg-[#fef4e9] border-b border-b-[#FAA74A] py-4 px-4 md:px-8 rounded-t-[15px]">
                <p className="text-base md:text-lg font-normal">
                  Experience the power of{" "}
                  <i className="font-semibold">compounding.</i>{" "}
                </p>
              </div>

              <div className="py-4 mt-2">
                <section className="px-4 md:px-8">
                  <div className="mb-4">
                    <label htmlFor="deposit">If you deposited </label>
                    <div className="relative">
                      <input
                        id="deposit"
                        type="text"
                        className="compound-input"
                        placeholder="100,000.00"
                        value={deposit}
                        onChange={handleInputChange}
                      />

                      <div className="currency-holder">
                        <Image src={NgaCrest} alt="nga-crest" />
                        <p className="text-base text-black">NGN</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="wallet">In your wallet for</label>

                    <div className="relative">
                      <input
                        id="wallet"
                        type="text"
                        className="compound-input !px-4"
                        placeholder="90"
                        value={duration}
                        onChange={handleDuration}
                      />

                      <div className="currency-holder right">
                        <p className="text-base text-black">Days</p>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="border-t-[0.5px] border-t-[#E1E7EC] mt-6 pt-3">
                  <div className="mb-4 px-4 md:px-8">
                    <label>Then today, you’d have… </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="compound-input bg-[#f7f9fb] font-bold placeholder:font-medium"
                        disabled
                        placeholder="105,013.02"
                        value={handleCompoundInterest()}
                      />

                      <div className="currency-holder">
                        <Image src={NgaCrest} alt="nga-crest" />
                        <p className="text-base text-black">NGN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="mt-12 flex flex-wrap justify-between"
              data-aos="zoom-in"
              data-aos-delay={300}
            >
              <div className="flex md:block flex-col items-center justify-center w-full md:w-1/2 lg:w-[66%] xl:w-1/2">
                <div className="flex items-end">
                  <span className="font-bold text-black text-[2rem]">N</span>
                  <h4
                    className="font-bold text-black text-[2rem]"
                    ref={countupRef1}
                  >
                    0
                  </h4>
                </div>

                <p className="text-right pt-2 text-base text-[#6D7786]">
                  Total Value Locked in Prime
                </p>
              </div>

              <div className="hidden md:block border boder-r-[#E1E7EC]"></div>

              <div className="flex md:block flex-col items-center justify-center w-full md:w-[unset] mt-5 md:mt-0">
                <div className="flex items-end">
                  <h4
                    className="font-bold text-black text-[2rem]"
                    ref={countupRef2}
                  >
                    0
                  </h4>
                  <span className="font-bold text-black text-[2rem]">+</span>
                </div>

                <p className="text-right pt-2 text-base text-[#6D7786]">MVPs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
