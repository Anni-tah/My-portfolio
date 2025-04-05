// Contact.jsx
import { motion } from "framer-motion";
import { FiMail, FiPhone } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-16 px-8 md:px-32 bg-[#f7f7f7] text-gray-800"
    >
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-[#9C4DFF] mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          Whether you have a project in mind or just want to say hi, my inbox is always open.
        </p>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 justify-center">
            <div className="flex items-center space-x-4">
              <FiMail className="text-[#9C4DFF]" size={24} />
              <a
                href="mailto:nabanne96@gmail.com"
                className="text-gray-800 hover:text-[#9C4DFF] transition-colors"
              >
                nabanne96@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <FiPhone className="text-[#9C4DFF]" size={24} />
              <a
                href="tel:+254712930270"
                className="text-gray-800 hover:text-[#9C4DFF] transition-colors"
              >
                +254 712 930 270
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            action="https://formspree.io/f/your-form-id" // replace with your Formspree ID or endpoint
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C4DFF]"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C4DFF]"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9C4DFF]"
            ></textarea>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="w-full bg-[#9C4DFF] text-white font-semibold py-3 rounded-lg shadow-md hover:bg-[#7a33cc] transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
