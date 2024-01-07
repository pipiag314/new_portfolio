import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import EarthCanvas from "./canvas/EarthCanvas";
import { SectionWrapper } from "./hoc";
import { slideIn } from "../utils/motion";
import toast from "react-hot-toast";

// template_g9kq26p
// service_6vpr2e9

// 1D4Shb3cxZnO3kb1p

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_6vpr2e9", "template_g9kq26p", {
      from_name: form.name,
      to_name: "Gela",
      from_email: form.email,
      to_email: "gelapipia10@gmial.com",
      message: form.message,
    }, 
      "1D4Shb3cxZnO3kb1p"
    )
    .then(() => {
      setLoading(false);
      toast.success("Thank you. I will get back to you soon.");
      setForm({
        name: "",
        email: "",
        message: "",
      })
    })
    .catch(error => {
      setLoading(false)
      console.log(error)
      toast.error("Sending failed, Error Occurred")
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="xl:mt-12 flex flex-col-reverse xl:flex-row gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "between", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className="sectionSubText">Get in touch</p>
        <h3 className="sectionHeadText">Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col" htmlFor="name">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              required
              id="name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col" htmlFor="email">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              required
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col" htmlFor="message">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              required
              rows="8"
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Enter your message"
              className="bg-tertiary py-4 px-6 text-white placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-4 px-6 rounded-lg text-white font-bold text-3xl outline-none w-fit mx-auto shadow-xl shadow-primary">
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "between", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
        <EarthCanvas />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Contact, "contact");
