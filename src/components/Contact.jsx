import { useState } from "react";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Yuborilgan ma'lumot:", formData);

    setFormData({
      name: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact">
      <h2
        className={`text-center font-black text-5xl ${
          darkMode ? " text-[#fff]" : "text-[#504B38]"
        }`}
      >
        Contact
      </h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 jusify-center items-center mt-10"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Ismingiz"
            value={formData.name}
            onChange={handleChange}
            className={`w-70 sm:w-100 md:w-120 xl:w-150 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? " text-[#fff]" : "text-[#504B38]"
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
            className={`w-70 sm:w-100 md:w-120 xl:w-150 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? " text-[#fff]" : "text-[#504B38]"
            }`}
          />
        </div>

        <div>
          <textarea
            name="message"
            rows={4}
            placeholder="Xabaringizni yozing..."
            value={formData.message}
            onChange={handleChange}
            className={`w-70 sm:w-100 md:w-120 xl:w-150 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              darkMode ? " text-[#fff]" : "text-[#504B38]"
            }`}
          />
        </div>

        <button
          type="submit"
          className={`text-xl border-[#504B38] rounded-lg  ${
            darkMode ? "bg-[#333] text-[#fff]" : "bg-[#504B38] text-[#F8F3D9]"
          } w-30 px-3 py-2 text-center hover:bg-[#B9B28A] hover:text-[#504B38] transition duration-700 ease-in-out`}
        >
          Push
        </button>
      </form>
    </section>
  );
};

export default Contact;
