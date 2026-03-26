import React from 'react';
import TermofConditionDetails from '../Components/TermofConditionDetails';

export default function TermofCondition() {
  return (
    <div className=" pt-24">
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-7xl">
            
            <h1 className="text-5xl text-white md:text-7xl  tracking-tight mb-6 font-belleza">
              Terms of Condition
            </h1>

            <p className="text-sm text-white text-justify leading-relaxed font-roboto">
              Welcome to our website. By accessing or using our services, you agree to be
               bound by the following terms and conditions. Please read them carefully 
               before using our website or services. If you do not agree with any part of 
               these terms, you may not use our website or services. We reserve the right
                to update or modify these terms at any time without prior notice. Your 
                continued use of our website or services after any changes constitutes 
                your acceptance of the new terms. If you have any questions about these
                 terms, please contact us for clarification.
            </p>

          </div>
        </div>
      </section>
      <TermofConditionDetails />
    

    </div>
  );
}