import { FaWhatsapp } from "react-icons/fa";

const WhatsappButton = () => {
  const openWhatsApp = () => {
    const phone = "94776996981"; 
    window.open(`https://wa.me/${phone}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className="fixed cursor-pointer rounded-full bottom-8 left-10 w-12 h-12 flex items-center justify-center bg-white text-black hover:bg-green-500 hover:text-white group z-50"
    >
      <FaWhatsapp className="text-xl" />
    </button>
  );
};

export default WhatsappButton;
