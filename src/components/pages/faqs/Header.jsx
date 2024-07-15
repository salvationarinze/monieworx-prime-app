import React from 'react';

import { FaHome } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';

function Header() {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1250px] mx-auto">
        <div className="w-full h-[190px] bg-[url('../assets/svgs/faqs-header.svg')] bg-no-repeat bg-cover bg-right px-10 sm:px-20 py-10">
          <div className="flex text-white items-center space-x-1">
            <FaHome className="w-5 h-5" />
            <MdArrowRightAlt className="w-5 h-5" />
            <p className="text-xs">FAQs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
