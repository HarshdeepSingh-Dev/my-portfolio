"use client";
import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post("/api/contact", data);
      if (res.data.success) {
        alert("Message sent successfully");
      } else {
        alert("Something went wrong.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again.");
    }
    console.log(data);
  };

  return (
    <section id="contact" className="bg-[#141A1A] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 text-center text-white">
          Get in Touch
        </h2>
        <p className="text-center mb-12 text-gray-300 max-w-xl mx-auto">
          Whether you want to discuss a project or just say hello, feel free to
          reach out!
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-transparent border rounded-lg shadow-lg p-8 max-w-2xl mx-auto"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 font-semibold text-white"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              required
              className="w-full rounded-md px-4 py-3 text-white focus:outline-none border"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 font-semibold text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              required
              className="w-full rounded-md px-4 py-3 text-white focus:outline-none border"
              placeholder="your.email@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block mb-2 font-semibold text-white"
            >
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              rows={5}
              required
              className="w-full rounded-md px-4 py-3 text-white focus:outline-none resize-none border"
              placeholder="Write your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-transparent hover:bg-white hover:text-black border text-white font-bold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact info below form */}
        <div className="mt-10 text-center text-gray-400">
          <p>
            Email:{" "}
            <a
              href="mailto:hs703808@gmail.com"
              className="underline hover:text-white"
            >
              hs703808@gmail.com
            </a>
          </p>
          <p className="mt-2">Phone: 7206976285</p>
        </div>
      </div>
    </section>
  );
}
