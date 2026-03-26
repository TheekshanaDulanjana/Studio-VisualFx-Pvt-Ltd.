import React from 'react';
import PrivacyPolicyDetails from '../Components/PrivacyPolicyDetails';

export default function PrivacyPolicy() {
  return (
    <div className=" pt-24">
      
      {/* Hero Section */}
      <section className="py-12 md:py-16 px-4">
        <div className="w-full max-w-7xl mx-auto">
          <div className="max-w-7xl">
            
            <h1 className="text-5xl text-white md:text-7xl  tracking-tight mb-6 font-belleza">
              Privacy Policy
            </h1>

            <p className="text-sm text-white text-justify leading-relaxed font-roboto">
              At our company, we are committed to protecting your privacy. 
              This Privacy Policy outlines how we collect, use, and safeguard your
               personal information when you visit our website or use our services.
                We respect your privacy and are dedicated to ensuring that your personal
                 information is handled securely and responsibly. By using our website or
                  services, you consent to the practices described in this Privacy Policy.
            </p>

          </div>
        </div>
      </section>
      <PrivacyPolicyDetails />
    

    </div>
  );
}