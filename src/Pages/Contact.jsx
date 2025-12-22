import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaPhone, FaEnvelope, FaBuilding, FaClock, FaWhatsapp, FaLink } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [modal, setModal] = useState({ show: false, message: "" });
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    subject: "", 
    message: "",
  });

  useEffect(() => {
    const isValid = Object.values(formData).every((v) => v.trim() !== "");
    setFormValid(isValid);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setModal({ show: true, message: "Message sent successfully!" });
          form.current.reset();
          setFormData({
            firstName: "",
            lastName: "",
            mobile: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          setModal({
            show: true,
            message: `Failed to send message: ${error.message}`,
          });
        }
      );
  };

  const closeModal = () => setModal({ show: false, message: "" });

  return (
    <div
      className="w-full px-4 md:px-6 lg:px-8 pb-16"
      style={{  color: "white" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-alatsi md:mt-20 mb-4">
          Get in Touch
        </h2>
        <h2 className="text-xl md:text-2xl font-alatsi  mb- ">
          Let’s create something meaningful together.
        </h2>

        <p className="text-gray-300 font-alata text-sm sm:text-md md:text-lg leading-relaxed mb-16">
         

        Whether you’re planning a wedding, event, commercial project, 
        or music video, we’d love to hear your story. <br />Reach out to us with your details, a
        nd let’s discuss how we can bring your vision to life through cinematic storytelling.
        </p>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-1/2 space-y-8">
  {/* General Inquiries */}
  <h3 className="text-xl md:text-3xl font-alatsi mb-8">
    General Inquiries
  </h3>

  {/* GRID WRAPPER */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
    
    {/* Phone */}
    <div>
      <div className="flex items-center mb-1">
        <FaPhone className="mr-2 text-white text-lg" />
        <span className="font-alata text-lg">Dial</span>
      </div>
      <div className="flex flex-col ml-6 font-alata space-y-1">
        <a
          className="text-gray-300 hover:text-white transition"
          href="tel:+971569169750"
        >
          +971 56 916 9750
        </a>
      </div>
    </div>

    {/* WhatsApp */}
    <div>
      <div className="flex items-center mb-1">
        <FaWhatsapp className="mr-2 text-white text-xl" />
        <span className="font-alata text-lg">Whatsapp</span>
      </div>
      <div className="flex flex-col ml-6 font-alata space-y-1">
        <a
          className="text-gray-300 hover:text-white transition"
          href="https://wa.me/971569169750"
          target="_blank"
          rel="noopener noreferrer"
        >
          +971 56 916 9750
        </a>
      </div>
    </div>

    
    {/* Social Links */}
    <div>
      <div className="flex items-center mb-1">
        <FaLink className="mr-2 text-white text-lg" />
        <span className="font-alata text-lg">Catch us on us!</span>
      </div>
      <div className="ml-6 text-gray-300 hover:text-white space-y-1">
        <p>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </p>
        <p>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
        {/* <p>
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            Linkedin
          </a>
        </p> */}
      </div>
    </div>

    {/* Email */}
    <div>
      <div className="flex items-center mb-1">
        <FaEnvelope className="mr-2 text-white text-lg" />
        <span className="font-alata text-lg">Email</span>
      </div>
      <div className="ml-6 font-alata">
        <a
          href="mailto:finxawards@gmail.com"
          className="text-gray-300 hover:text-white transition"
        >
          studiovisualfx@gmail.com
        </a>
      </div>
    </div>


  </div>
</div>


          {/* Right Column (Form) */}
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-alatsi text-white mb-8">
              Send Message
            </h2>

            <form ref={form} onSubmit={sendEmail} className="space-y-4 font-alata">
              {/* Row 1 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  className="flex-1 h-12 p-3  hover:outline-white rounded-md bg-white/20  focus:outline-white transition"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  className="flex-1 h-12 p-3 rounded-md  hover:outline-white bg-white/20  focus:outline-white transition"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>

              {/* Row 2 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="mobile"
                  placeholder="Mobile"
                  className="flex-1 h-12 p-3 rounded-md  hover:outline-white bg-white/20  focus:outline-white transition"
                  required
                  value={formData.mobile}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="flex-1 h-12 p-3 rounded-md  hover:outline-white bg-white/20  focus:outline-white transition"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Subject */}
              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full h-12 p-3 rounded-md  hover:outline-white bg-white/20 focus:outline-white transition"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>


              {/* Message */}
              {/* Row 3 */}
              <div className="flex flex-col sm:flex-row gap-4">
                <textarea
                  name="message"
                  placeholder="Message"
                  className="w-full h-32 p-3 rounded-md  hover:outline-white bg-white/20  resize-none focus:outline-white transition"
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              {/* Button */}
              <button
                type="submit"
                disabled={!formValid}
                className={`w-full py-3 cursor-pointer bg-white hover:bg-white text-black rounded-lg ${formValid
                  ? "bg-white hover:bg-white"
                  : "bg-gray-00 opacity-60 cursor-not-allowed"
                  }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Modal */}
        {modal.show && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center z-50">
            <div className="bg-transparent backdrop-blur-xl rounded-lg outline-2 outline-white  p-6 w-80 sm:w-96 text-center">
              <h2 className="text-xl font-alatsi texxt-white mb-3">Thank You!</h2>
              <p className="text-gray-400 font-alata mb-6">{modal.message}</p>
              <button
                onClick={closeModal}
                className="w-48 bg-gray-300 font-alata text-black py-2 rounded-md hover:bg-white cursor-pointer"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
