import Link from 'next/link';
import React from 'react';

import { BsWhatsapp } from 'react-icons/bs';

function WhatsAppContact() {
  return (
    <div className="">
      <Link href="https://wa.me/2349022111027" target="_blank">
        <span className="bg-white p-3 rounded-full shadow-xl inline-flex items-center group">
          <BsWhatsapp className="text-[#25d366] w-8 h-8" />
          <span className="text-lg text-[#25d366] flex items-center overflow-hidden h-8 pr-0 w-0 transition-all group-hover:w-auto group-hover:pl-5">
            Chat Support
          </span>
        </span>
      </Link>
    </div>
  );
}

export default WhatsAppContact;
