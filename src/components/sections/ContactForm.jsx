import { CheckCircle, Send } from "lucide-react";
import { useState } from "react";
import { Button, Card, Input, Textarea } from "../ui";

const ContactForm = ({ title, subtitle, submitText = "Send Message" }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);

      // Reset form after 5 seconds
      setTimeout(() => {
        setSuccess(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      }, 5000);
    }, 1500);
  };

  return (
    <Card className="border-0 p-6 shadow-lg dark:bg-zinc-700/50">
      <h2 className="mb-2 text-2xl font-bold text-zinc-900 dark:text-white">
        {title}
      </h2>
      <p className="mb-6 text-zinc-600 dark:text-zinc-300">{subtitle}</p>

      {success ? (
        <div className="py-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <CheckCircle
              size={32}
              className="text-green-600 dark:text-green-400"
            />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-zinc-900 dark:text-white">
            Message Sent!
          </h3>
          <p className="text-zinc-600 dark:text-zinc-300">
            Thank you for contacting us. We'll get back to you as soon as
            possible.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              error={errors.name}
              required
              className="transition-all duration-300"
            />

            <Input
              type="email"
              label="Email Address"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email address"
              error={errors.email}
              required
              className="transition-all duration-300"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              type="tel"
              label="Phone Number (Optional)"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter your phone number"
              error={errors.phone}
              className="transition-all duration-300"
            />

            <Input
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What is your message about?"
              error={errors.subject}
              required
              className="transition-all duration-300"
            />
          </div>

          <Textarea
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="How can we help you?"
            error={errors.message}
            required
            rows={6}
            className="transition-all duration-300"
          />

          <div className="pt-2">
            <Button
              type="submit"
              fullWidth
              disabled={loading}
              className="group relative flex justify-center py-3 transition-all duration-300"
            >
              {loading ? (
                <span className="flex items-center">
                  <svg
                    className="-ml-1 mr-2 h-4 w-4 animate-spin text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center">
                  <Send
                    size={18}
                    className="mr-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  {submitText}
                </span>
              )}
            </Button>
          </div>
        </form>
      )}
    </Card>
  );
};

export default ContactForm;
