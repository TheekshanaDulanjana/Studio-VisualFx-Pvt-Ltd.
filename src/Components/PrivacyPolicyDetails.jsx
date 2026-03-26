import React from 'react';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Information We Collect",
      points: [
        "Personal Information: Name, contact number, email address, and other information provided during booking.",
        "Payment details for transactions.",
        "Trip Information: Pickup and drop-off locations, trip duration, and preferences.",
        "Device Information: IP address, browser type, and usage data collected through cookies."
      ],
    },
    {
      title: "How We Use Your Information",
      points: [
        "Facilitate taxi bookings, including predefined trips, airport transfers, and custom trips.",
        "Arrange driver or self-drive options based on your preference.",
        "Contact you regarding your booking, trip updates, or inquiries.",
        "Analyze usage data to enhance our services and user experience.",
        "Ensure compliance with applicable laws and regulations."
      ],
    },
    {
      title: "Sharing of Information",
      points: [
        "We do not sell or share your personal information with third parties.",
        "Service Providers: Information shared only to fulfill your booking (e.g., drivers).",
        "Legal Requirements: Information shared if required by law or to protect our rights."
      ],
    },
    {
      title: "Data Security",
      points: [
        "We use appropriate technical and organizational measures to secure your information.",
        "Please note that no method of transmission over the internet is entirely secure."
      ],
    },
    {
      title: "Your Rights",
      points: [
        "Access your personal data.",
        "Request correction or deletion of your data.",
        "Opt-out of marketing communications."
      ],
    },
    {
      title: "Updates to This Policy",
      points: [
        "We may update this policy from time to time.",
        "Any changes will be communicated clearly on our website.",
        "For questions, contact us at travelmolanka@gmail.com"
      ],
    },
  ];

  return (
    <div className="bg-black py-16 px-4 font-roboto">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Vertical Center Line */}
        <div className="absolute left-[30%] top-0 bottom-0 w-px bg-white/30 hidden md:block"></div>

        <div className="space-y-16">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start relative">
              
              {/* Left Column: Title (Belleza Font) */}
              <div className="w-full md:w-[30%] pr-8 mb-4 md:mb-0 md:text-right">
                <h2 className="font-belleza text-xl md:text-2xl text-white  leading-tight">
                  {section.title}
                </h2>
              </div>

              {/* Middle Dot Marker */}
              <div className="absolute left-[30%] -translate-x-1/2 top- hidden md:block">
                <div className="w-3 h-3 bg-white rounded-full "></div>
              </div>

              {/* Right Column: Point-wise details (Roboto Font) */}
              <div className="w-full md:w-[70%] md:pl-16">
                <ul className="space-y-2">
                  {section.points.map((point, pIndex) => (
                    <li key={pIndex} className="text-white text-sm md:text-sm flex items-start">
                      <span className="mr-3 mt-2 w-1.5 h-1.5 bg-white rounded-full flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;