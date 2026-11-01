import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ambanikushwaha88@gmail.com",
    href: "mailto:ambanikushwaha88@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 7746979814",
    href: "tel:+917746979814",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jabalpur",
    href: "#",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success' or 'error'
    message: "",
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  setIsLoading(true);
  setSubmitStatus({ type: null, message: "" });

  try {
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      throw new Error("Web3Forms Access Key is missing.");
    }

    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Portfolio Message from ${formData.name}`,
        }),
      }
    );

    const result = await response.json();

    if (result.success) {
      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      throw new Error(
        result.message || "Failed to send message."
      );
    }
  } catch (err) {
    console.error("Web3Forms error:", err);

    setSubmitStatus({
      type: "error",
      message:
        err.message || "Failed to send message. Please try again later.",
    });
  } finally {
    setIsLoading(false);
  }
};


  return (
    <section
  id="contact"
  className="py-20 sm:py-24 lg:py-32 relative overflow-hidden scroll-mt-10"
>
  {/* Background Effects */}
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 sm:left-1/4 sm:translate-x-0 w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 bg-primary/5 rounded-full blur-3xl" />

    <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-highlight/5 rounded-full blur-3xl" />
  </div>

  <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-full">
    {/* Section Header */}
    <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 lg:mb-16">
      <span className="text-secondary-foreground text-xs sm:text-sm font-medium tracking-wider uppercase">
        Get In Touch
      </span>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 text-secondary-foreground leading-tight">
        Let's build{" "}
        <span className="font-serif italic font-normal text-white">
          something great.
        </span>
      </h2>

      <p className="text-muted-foreground text-sm sm:text-base leading-relaxed max-w-2xl mx-auto px-2">
        Have a project in mind? I'd love to hear about it. Send me a message
        and let's discuss how we can work together.
      </p>
    </div>

    {/* Contact Grid */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
      {/* Contact Form */}
      <div className="glass p-5 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl border border-primary/30 min-w-0">
        <form id="contact-form" className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2"
            >
              Name
            </label>

            <input
              id="name"
              type="text"
              required
              placeholder="Your name..."
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full min-w-0 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              required
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full min-w-0 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2"
            >
              Message
            </label>

            <textarea
              id="message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              placeholder="Your message..."
              className="w-full min-w-0 px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
            />
          </div>

          {/* Submit */}
          <Button
            className="w-full"
            type="submit"
            size="lg"
            disabled={isLoading}
          >
            {isLoading ? (
              "Sending..."
            ) : (
              <>
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </>
            )}
          </Button>

          {/* Status */}
          {submitStatus.type && (
            <div
              className={`flex items-start gap-3 p-4 rounded-xl ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {submitStatus.type === "success" ? (
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              ) : (
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
              )}

              <p className="text-sm break-words">
                {submitStatus.message}
              </p>
            </div>
          )}
        </form>
      </div>

      {/* Right Side */}
      <div className="space-y-6 min-w-0">
        {/* Contact Information */}
        <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8">
          <h3 className="text-lg sm:text-xl font-semibold mb-5 sm:mb-6">
            Contact Information
          </h3>

          <div className="space-y-3 sm:space-y-4">
            {contactInfo.map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl hover:bg-surface transition-colors group min-w-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>

                <div className="min-w-0">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    {item.label}
                  </div>

                  <div className="font-medium text-sm sm:text-base truncate">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border border-primary/30">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 flex-shrink-0 bg-green-500 rounded-full animate-pulse" />

            <span className="font-medium text-sm sm:text-base">
              Currently Available
            </span>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            I'm currently open to new opportunities and exciting projects.
            Whether you need a full-time engineer or a freelance consultant,
            let's talk!
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};
