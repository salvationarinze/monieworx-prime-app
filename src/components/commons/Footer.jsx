import React from "react";
import Image from "next/image";
import Link from "next/link";

import LinkButton from "../inputs/LinkButton";

import Logo from "../../../public/images/logo.svg";
import Ndpr from "../../../public/images/ndpr.png";
import EmailIcon from "../../../public/images/email-icon.svg";

const socials = [
  {name: "instagram", url: "https://www.instagram.com/our_monieworx"},

  {
    name: "facebook",
    url: "https://www.facebook.com/profile.php?id=100087672471850",
  },

  {name: "x", url: ""},

  {name: "linkedin", url: "https://www.linkedin.com/company/86815739/"},

  {name: "telegram", url: ""},
];

function Footer() {
  return (
    <footer className="w-full content pt-8 pb-24">
      <div className="flex flex-wrap md:flex-nowrap justify-between border-t-[0.5px] border-t-[#E1E7EC] py-10">
        <div>
          <Link href="/">
            <Image src={Logo} alt="monieworx logo" />
          </Link>

          <div className="flex self-center gap-4 mt-6">
            {socials.map((item) => (
              <Link key={item.name} href={item.url} target="_blank">
                <img
                  className=" h-6"
                  src={`/images/socials/${item.name}.svg`}
                  alt={item.name}
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 mt-5 md:mt-0">
          <Link
            href="#"
            className="text-[#6D7786] text-sm font-medium"
            target="_blank"
          >
            Contact Us
          </Link>

          <Link
            href="#"
            className="text-[#6D7786] text-sm font-medium"
            target="_blank"
          >
            Privacy Policy
          </Link>

          <Link
            href="#"
            className="text-[#6D7786] text-sm font-medium"
            target="_blank"
          >
            Terms of Service
          </Link>
        </div>

        <div className="mt-5 md:mt-0">
          <Image src={Ndpr} height={112} />
        </div>
      </div>

      <div className="flex flex-wrap md:flex-nowrap justify-between border-t-[0.5px] border-t-[#E1E7EC] py-6">
        <div className="md:w-[48%]">
          <p className="text-[#6D7786]">
            Welcome to monieworx®, where we are reshaping the landscape of
            finance technology in Africa.
          </p>

          <p className="text-[#6D7786] pt-2">
            Founded on the principle of empowering Nigerian citizens and
            businesses of all backgrounds to thrive, monieworx® offers a unique
            approach to wealth creation that is both pioneering and accessible.
          </p>

          <p className="text-[#6D7786] pt-2">
            And now, with monieworx® Prime – we're making this easier and more
            rewarding than ever before.
          </p>
        </div>

        <div className="md:w-[48%] mt-5 md:mt-0">
          <h4 className="font-bold text-black text-2xl">Join Our Newsletter</h4>
          <p className="pt-2.5 text-base text-black">
            Get the most recent news and articles from the Prime team to your
            email.
          </p>

          <div className="mt-3 flex gap-4">
            <div className="relative w-[65%]">
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
                Subscribe
              </span>
            </LinkButton>
          </div>

          <p className="pt-2.5 font-light text-xs text-[#6D7786] ">
            By clicking submit, you agree to Monieworx® Prime storing your
            information and sending you latest updates on our products.
          </p>
        </div>
      </div>

      <div className="border-t-[0.5px] border-t-[#E1E7EC] pt-10">
        <p className="font-bold text-black">Risk warning</p>
        <p className="pt-2 text-[#6D7786]">
          monieworx is the trading name for Obelix 4.1.1 Alternative Finance
          Limited, a crowdfunding intermediary licensed by the Securities and
          Exchange Commission (SEC). Investing through the monieworx platform
          involves financing Small and Medium-sized businesses (SMEs) through
          debt securities issued by these SME Fundraisers. We advise all
          investors using the platform to spread their investments over several
          debt securities to limit risks. If in doubt, you should seek
          independent financial advice before investing. Also, do refer to our
          Terms of Service for additional information before you make any
          investment.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
