import React from 'react';

import { FaHome } from 'react-icons/fa';
import { MdArrowRightAlt } from 'react-icons/md';

function IntroSection({ breadcrumbText = '', bg = '', children = '' }) {
  return (
    <section className="w-full bg-white">
      <div className="w-full max-w-[1250px] mx-auto">
        <div className={`w-full ${bg} bg-no-repeat bg-cover bg-center px-10 sm:px-20 py-14`}>
          <div className="flex text-white items-center space-x-1">
            <FaHome className="w-5 h-5" />
            <MdArrowRightAlt className="w-5 h-5" />
            <p className="text-xs">{breadcrumbText}</p>
          </div>

          <div className="w-full h-[450px] flex items-center">
            {children}
          </div>
        </div>
      </div>
    </section>

  );
}

export default IntroSection;
