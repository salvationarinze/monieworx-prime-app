import React, {useEffect, useState} from "react";
import Image from "next/image";

import Pic from "@/assets/images/faqs-pic.png";
import faqs from "@/data/faqs";
import Accordion from "../homepage/Accordion";
import ContactAccordion from "../homepage/ContactAccordion";

function FaqList() {
  const [search, setSearch] = useState("");
  const [displayList, setDisplayList] = useState([]);

  useEffect(() => {
    setDisplayList(faqs);
  }, []);

  const handleSearch = (e) => {
    const {value} = e.target;
    setSearch(value);
    setDisplayList(
      faqs?.filter((item) =>
        item?.question
          ?.toLocaleLowerCase()
          ?.includes(value?.toLocaleLowerCase())
      )
    );
  };

  return (
    <section className="w-full bg-white">
      <div className="content pb-24">
        <div className="relative py-10 sm:py-28">
          <div className="w-full max-w-xl">
            <h3 className="text-xl sm:text-3xl font-bold mb-10">
              Frequently Asked Questions (FAQs)
            </h3>
            <input
              type="search"
              value={search}
              onChange={handleSearch}
              className="w-full text-lg px-5 py-3 border rounded-xl focus:outline-none focus:shadow-outline"
              placeholder="How do I invest on monieworx?"
            />
          </div>
          <Image
            src={Pic}
            alt=""
            className="hidden mdx2:block w-auto h-[450px] absolute right-0 bottom-0"
          />
        </div>

        <div className="w-full bg-[#E7E7E7] px-5 sm:px-10 pt-7 sm:pt-14 pb-20 sm:pb-32 rounded-3xl">
          {displayList?.map((item) => (
            <Accordion key={item?.question} data={item} />
          ))}
          <ContactAccordion />
        </div>
      </div>
    </section>
  );
}

export default FaqList;
