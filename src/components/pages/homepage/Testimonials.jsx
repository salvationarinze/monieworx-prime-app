import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

import UserIcon from "../../../../public/images/user-icon.svg";
import Seen from "../../../../public/images/media-proof/seen.svg";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const sliderSettings = {
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: false,

  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
  ],
};

const testimonials = [
  {
    text: "Still baffles me how easy this is. I don’t have to do the hard work of investing, but somehow I still get the benefits.",
    user: " Ganiya, 38",
  },

  {
    text: "Over the past 4 years, the team had toiled to create a commercial ‘magical’ proposition that can deliver real returns without the rigours of self-directed aka Do-it-yourself (DIY) investing plans. monieworx® Prime has consistently exceeded our expectations since its genesis. It can only get better!",
    user: " Chief Investment Strategist, 51",
  },

  {
    text: "My advisor spoke to me about compounding, so I deposited some money and forgot about it for months. Best thing I ever did!",
    user: " Nathaniel, 26",
  },
];

const Testiomonials = () => {
  return (
    <div className="content text-center py-16">
      <p className="font-mono text-base text-primary">Testimonials</p>
      <h2 className="text-black font-bold pt-3 text-4xl">
        Success stories from our customers
      </h2>

      {/* Testimonials Here */}

      <section className="slider-container">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="slider-box mt-10">
              <p className="font-semibold text-black text-left pt-1 text-base">
                “{item.text}”
              </p>

              <svg
                className="absolute -top-8"
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="64" height="64" rx="32" fill="#5E9942" />
                <path
                  d="M34.056 44V36.7832C34.056 32.2517 35.1189 28.5594 37.2448 25.7063C39.4266 22.7972 42.6434 20.8951 46.8951 20V25.4545C44.993 25.9021 43.4825 26.7413 42.3637 27.972C41.2448 29.1469 40.5175 30.5734 40.1818 32.2517H45.2168V44H34.056ZM17.1049 44V36.7832C17.1049 32.2517 18.1679 28.5594 20.2937 25.7063C22.4755 22.7972 25.6644 20.8951 29.8602 20V25.4545C27.9581 25.9021 26.4476 26.7413 25.3287 27.972C24.2098 29.1469 23.4825 30.5734 23.1469 32.2517H28.1818V44H17.1049Z"
                  fill="white"
                />
              </svg>

              <div className="flex items-center gap-4 mt-5">
                <Image src={UserIcon} alt="user-icon" />
                <p className="text-black font-bold text-base">{item.user}</p>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Companies Here */}
      <section className="mt-32">
        <Image src={Seen} alt="seen" />

        <div className="mt-5">
          <Slider {...sliderSettings}>
            {["forbes", "bloomberg", "guardian", "bbc", "fox"].map((item) => (
              <img
                className="mt-5 h-11"
                src={`/images/media-proof/${item}.svg`}
                height={44}
                alt={item}
                key={item}
              />
            ))}
          </Slider>
        </div>

        <div className="mt-8">
          <Slider {...sliderSettings}>
            {["daily-mail", "business-insider", "abc", "msnbc", "cnn"].map(
              (item) => (
                <img
                  className="mt-5 h-11"
                  src={`/images/media-proof/${item}.svg`}
                  height={44}
                  alt={item}
                  key={item}
                />
              )
            )}
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default Testiomonials;
