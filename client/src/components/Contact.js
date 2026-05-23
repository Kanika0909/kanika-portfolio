import React, { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("loading");

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (data.success) {
        setStatus("success");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log(error);
      setStatus("error");
    }
  };

  const inputBase =
    "w-full bg-[rgba(10,10,15,0.8)] border border-[rgba(124,111,247,0.18)] focus:border-[#7c6ff7] rounded-lg px-3.5 py-2.5 text-[#f0effe] text-sm font-light placeholder-[rgba(139,136,176,0.4)] outline-none transition-colors duration-200";

  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div className="bg-[#1a1a24] border border-[rgba(124,111,247,0.18)] rounded-2xl p-8 md:p-12">
        <p className="text-[#7c6ff7] text-xs tracking-widest uppercase font-medium mb-2 text-center">
          Let's connect
        </p>
        <h2
          className="font-display font-bold tracking-tight text-[#f0effe] text-center mb-3"
          style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)" }}
        >
          Open to Opportunities
        </h2>
        <p className="text-[#8b88b0] font-light text-center max-w-md mx-auto mb-10 text-sm">
          Looking for full-time roles or internships in full-stack development.
          Let's build something great together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 items-start">
          {/* Info links */}
          <div className="flex flex-col gap-3">
            {[
              {
                icon: "☎",
                label: "Phone",
                value: "+91 6350289239",
                href: "tel:6350289239",
              },
              {
                icon: "✉",
                label: "Email",
                value: "kanikaag0909@gmail.com",
                href: "mailto:kanikaag0909@gmail.com",
              },
              {
                icon: "in",
                label: "LinkedIn",
                value: "kanika-agrawal",
                href: "https://www.linkedin.com/in/kanika-agrawal-b1461b255",
              },
              {
                icon: "Git",
                label: "GitHub",
                value: "GitHub",
                href: "https://github.com/Kanika0909",
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-3 bg-[rgba(124,111,247,0.07)] border border-[rgba(124,111,247,0.18)] rounded-xl px-4 py-3 hover:border-[#7c6ff7] hover:bg-[rgba(124,111,247,0.12)] transition-all duration-200 no-underline"
              >
                <div className="w-9 h-9 bg-[rgba(124,111,247,0.15)] rounded-lg flex items-center justify-center text-[#a78bfa] text-xs font-semibold flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-[#8b88b0] text-xs uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-[#c4b5fd] text-xs mt-0.5">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-4"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#8b88b0] text-xs font-medium tracking-wide mb-1.5">
                  Name *
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
              <div>
                <label className="block text-[#8b88b0] text-xs font-medium tracking-wide mb-1.5">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputBase}
                />
              </div>
            </div>

            <div>
              <label className="block text-[#8b88b0] text-xs font-medium tracking-wide mb-1.5">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            <div>
              <label className="block text-[#8b88b0] text-xs font-medium tracking-wide mb-1.5">
                Message *
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Tell me about the opportunity..."
                value={formData.message}
                onChange={handleChange}
                className={`${inputBase} resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="self-start bg-[#7c6ff7] hover:bg-[#a78bfa] disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium text-sm px-7 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 border-none cursor-pointer"
            >
              {status === "loading" ? "Sending..." : "Send Message →"}
            </button>

            {status === "success" && (
              <div className="bg-[rgba(99,153,34,0.12)] border border-[rgba(99,153,34,0.3)] text-[#97c459] rounded-lg px-4 py-3 text-sm">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="bg-[rgba(226,75,74,0.1)] border border-[rgba(226,75,74,0.3)] text-[#f09595] rounded-lg px-4 py-3 text-sm">
                Something went wrong. Please email me directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
