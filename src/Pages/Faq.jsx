import React, { useState } from 'react';
import { HelpCircle, MessageSquare } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="flex flex-col items-end w-full mb-4">
      {/* Question Row */}
      <div
        onClick={onClick}
        className="flex items-center gap-4 w-full cursor-pointer group"
      >
        <div className="border border-white p-3 rounded-2xl shadow-sm transition-colors shrink-0">
          <HelpCircle className="text-white w-6 h-6 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </div>
        <div className="flex-1 border border-white rounded-2xl py-3 px-4 sm:px-8 transition-all shadow-sm">
          <h3 className="text-white font-[Alata] text-sm sm:text-base md:text-base tracking-wide">
            {question}
          </h3>
        </div>
      </div>

      {/* Answer Row (Conditional) */}
      {isOpen && (
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mt-3 w-full md:w-[95%] animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex-1 bg-gray-300 border border-white rounded-2xl p-4 sm:p-6 shadow-sm">
            <p className="text-black font-[Alata] leading-relaxed text-sm sm:text-sm md:text-base">
              {answer}
            </p>
          </div>
          <div className="bg-black p-3 rounded-xl shadow-lg shrink-0 mt-2 md:mt-0">
            <MessageSquare className="text-white w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </div>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Do You Offer Revisions On Designs?",
      answer: "Yes, I Provide Revisions To Ensure The Final Design Aligns Perfectly With Your Expectations."
    },
    {
      question: "What Tools Do You Use For Your Work?",
      answer: "I primarily use Figma for design and modern web technologies like React, Tailwind CSS, and Framer Motion for development."
    },
    {
      question: "Can You Help With Branding From Scratch?",
      answer: "Absolutely. I can help create visual identities including logos, color palettes, and typography guidelines."
    },
    {
      question: "How Do You Approach A New Project?",
      answer: "My process involves discovery and research, followed by wireframing, high-fidelity design, and final implementation."
    },
    {
      question: "What Is The Cost Of Your Services?",
      answer: "Pricing varies based on project scope. Please reach out via the contact form for a personalized quote."
    }
  ];

  return (
    <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-32 items-start">
        
        {/* Left Column: Title and Description */}
        <div className="lg:col-span-1 lg:sticky ">
          <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-alatsi mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 font-[Alata] text-sm sm:text-base md:text-lg leading-relaxed mb-12 sm:mb-16">
            Find answers to common questions about our services, process, and offerings.
          </p>
        </div>

        {/* Right Column: FAQ Cards */}
        <div className="w-full  lg:col-span-2">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default FAQSection;
