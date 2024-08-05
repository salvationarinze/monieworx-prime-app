import faqs from "@/data/faqs-new";
import Accordion from "./Accordion";

const Faqs = () => {
  return (
    <section id="faqs" className="content text-center py-16">
      <p className="font-mono text-base text-primary pt-5">FAQs</p>
      <h2 className="text-black font-bold pt-3 text-4xl">
        Frequently Asked Questions
      </h2>

      <section className="pt-12">
        <div className="px-5 sm:px-10 pt-7 sm:pt-14 pb-16 rounded-3xl">
          {faqs?.map((item) => (
            <Accordion key={item?.question} data={item} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Faqs;
