import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const BOT_TOKEN = "8477355666:AAF7PwH1HMs4bJCiAK1wz9552TFnSg473_I";
  const CHAT_ID = "1604384939";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validatsiya
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.message.trim()
    ) {
      alert("❗ Please fill in all the fields!");
      return;
    }

    const message = `📝 Portfolio saytidan xabar:\n👤 Ism: ${formData.name}\n📞 Telefon: ${formData.phone}\n💬 Xabar: ${formData.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            chat_id: CHAT_ID,
            text: message,
          }),
        }
      );

      if (response.ok) {
        toast.success("✅ Your message has been sent!");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        toast.error("❌ Error: " + response.statusText);
      }
    } catch (error) {
      toast.error("❌ Network error:", error);
    }
  };

  return (
    <section id="contact">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2
        className={`text-center font-black text-5xl ${darkMode ? " text-[#fff]" : "text-[#504B38]"
          }`}
      >
        Contact
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 justify-center items-center mt-10"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={`w-70 sm:w-100 md:w-120 xl:w-150 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode
              ? "text-[#fff] placeholder:text-[#fff]"
              : "text-[#504B38] placeholder:text-[#504B38]"
              }`}
          />
        </div>

        <div>
          <input
            type="tel"
            name="phone"
            placeholder="+998 90 123 45 67"
            value={formData.phone}
            onChange={handleChange}
            required
            className={`w-70 sm:w-100 md:w-120 xl:w-150 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode
                ? "text-[#fff] placeholder:text-[#fff]"
                : "text-[#504B38] placeholder:text-[#504B38]"
              }`}
          />

        </div>

        <div>
          <textarea
            name="message"
            rows={4}
            placeholder="Write your message..."
            value={formData.message}
            onChange={handleChange}
            required
            className={`w-70 sm:w-100 md:w-120 xl:w-150 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${darkMode ? "text-[#fff] placeholder:text-[#fff]"
              : "text-[#504B38] placeholder:text-[#504B38]"
              }`}
          />
        </div>

        <button
          type="submit"
          className={`text-xl border-[#504B38] rounded-lg  
            ${darkMode ? "bg-[#333] text-[#fff]" : "bg-[#504B38] text-[#F8F3D9]"
            } 
            w-30 px-3 py-2 text-center 
            hover:bg-[#B9B28A] hover:text-[#504B38] 
            transition duration-700 ease-in-out`}
        >
          Push
        </button>
      </form>
    </section>
  );
};

export default Contact;
