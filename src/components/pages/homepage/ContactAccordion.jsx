import React, { useState } from 'react';

import { BsPlusCircle, BsDashCircle } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { IoCallSharp } from 'react-icons/io5';
import { TbWorldWww } from 'react-icons/tb';

function ContactAccordion() {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full relative text-[#4B4B4B] border-b border-[#4B4B4B]">
      <div
        className="py-5 sm:py-7 text-lg sm:text-2xl font-semibold flex justify-between items-center cursor-pointer"
        onClick={() => setShow((state) => (!state))}
        role="presentation"
      >
        <span className="w-[calc(100%-44px)]">How do I contact monieworx?</span>
        {show ? <BsDashCircle className="w-7 h-7 ml-4" /> : <BsPlusCircle className="w-7 h-7 ml-4" />}
      </div>

      <div className={`${show ? 'pb-5 sm:pb-7 h-auto' : 'h-0'} sm:pr-12 transition-all overflow-hidden`}>
        <div className="w-full text-base sm:text-lg leading-[1.7]">
          <p className="mb-2">If you have any questions or feedback, you can contact monieworx via;</p>
          <div className="flex items-center mb-1">
            <div className="pr-5">
              <IoCallSharp className="w-6 h-6" />
            </div>
            <div className="flex flex-wrap">
              <p className="mr-1"><a href="tel:+23470000666439679" target="_blank" className="link">0700-00-MONIEWORX</a></p>
              <p className="">(0700-00-66643-9679)</p>
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="pr-5">
              <MdEmail className="w-6 h-6" />
            </div>
            <div className="">
              <p className=""><a href="mailto:hello@monieworx.com" target="_blank" className="link">hello@monieworx.com</a></p>
            </div>
          </div>
          <div className="flex items-center mb-1">
            <div className="pr-5">
              <TbWorldWww className="w-6 h-6" />
            </div>
            <div className="">
              <a href="https://monieworx.com" target="_blank" className="link">https://monieworx.com</a>
            </div>
          </div>
          <p>You can also follow our_monieworx on social media platforms such as Facebook, Twitter, Linkedin, and Instagram for updates and news.</p>
        </div>
      </div>
    </div>
  );
}

export default ContactAccordion;
