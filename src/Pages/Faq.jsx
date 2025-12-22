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
        <div className="bg-white border border-gray-400 p-3 rounded-2xl shadow-sm group-hover:bg-gray-100 transition-colors">
          <HelpCircle className="text-black w-6 h-6" />
        </div>
        <div className="flex-1 bg-white border border-gray-400 rounded-2xl py-4 px-8 hover:bg-gray-50 transition-all shadow-sm">
          <h3 className="text-black font-medium text-lg tracking-wide">{question}</h3>
        </div>
      </div>

      {/* Answer Row (Conditional) */}
      {isOpen && (
        <div className="flex items-center gap-4 mt-3 w-[92%] animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex-1 bg-gray-50 border border-gray-400 rounded-2xl p-6 shadow-sm">
            <p className="text-gray-600 font-alata leading-relaxed">
              {answer}
            </p>
          </div>
          <div className="bg-black p-3 rounded-xl shadow-lg">
            <MessageSquare className="text-white w-5 h-5" />
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
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        
        {/* Left Column: Title and Description (1/3) */}
        <div className="lg:col-span-1 lg:sticky">
          <h2 className="text-3xl sm:text-4xl text-white lg:text-5xl font-alatsi md:mt-14 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-300 font-alata text-sm sm:text-md md:text-lg leading-relaxed mb-16">
           Find answers to common questions about our services, process, and offerings.</p>
        </div>

        {/* Right Column: FAQ Cards (2/3) */}
        <div className="w-full mt-12 lg:col-span-2">
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
