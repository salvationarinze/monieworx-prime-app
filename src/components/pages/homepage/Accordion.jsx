import React, {useState} from "react";
import PropTypes from "prop-types";

import {BsChevronDown} from "react-icons/bs";
import {Interweave} from "interweave";

function Accordion({data}) {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full relative pt-2.5 rounded-[10px] bg-[#F5F8FA] mb-4">
      <div
        className="p-5 sm:py-7 flex justify-between items-center cursor-pointer"
        onClick={() => setShow((state) => !state)}
        role="presentation"
      >
        <span
          className={`font-bold text-[1.375rem] text-left duration-300 ${
            show ? "text-primary" : "text-black"
          }`}
        >
          {data?.question || "Header"}
        </span>

        <div
          className={`h-6 w-6 border rounded-md flex justify-center items-center  ${
            show ? "border-[#5E9942]" : "border-[#2A2E33]"
          }`}
        >
          <BsChevronDown
            className={`transform transition-transform duration-300 ${
              show ? "rotate-x-180" : ""
            }`}
            fontSize={10}
            color={show ? "#5E9942" : "#2A2E33"}
            strokeWidth={1}
            fontWeight={900}
          />
        </div>
      </div>

      <div
        className={`text-black text-lg font-sans text-left ${
          show ? "border-t border-[#E1E7EC]-400 p-5 sm:pb-7 h-auto" : "h-0"
        }  duration-300 overflow-hidden`}
      >
        <Interweave
          className="faq-answer text-base sm:text-lg leading-[1.7]"
          content={data?.answer}
        />
      </div>
    </div>
  );
}

Accordion.propTypes = {
  data: PropTypes.shape({
    question: PropTypes.string,
    answer: PropTypes.string,
  }),
};

Accordion.defaultProps = {
  data: {},
};

export default Accordion;
