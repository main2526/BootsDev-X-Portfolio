"use client";

import { useState } from "react";
import {
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

interface FormData {
  empresa: string; // aquí será "empresa" en backend
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    empresa: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          empresa: formData.empresa, // coincidencia con backend
          email: formData.email,
          message: `${formData.subject}\n\n${formData.message}`, // combinar asunto + mensaje
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Error al enviar el mensaje.");

      setSubmitMessage(
        "✅ ¡Mensaje enviado exitosamente! Te responderé pronto."
      );
      setFormData({ empresa: "", email: "", subject: "", message: "" });

      setTimeout(() => setSubmitMessage(""), 5000);
    } catch (err: any) {
      setSubmitMessage(`❌ Error: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: FaLinkedinIn,
      title: "LinkedIn Profesional",
      link: "https://www.linkedin.com/in/bootsx",
      bgColor: "bg-blue-600",
    },
    {
      icon: FaGithub,
      title: "Repositorio GitHub",
      link: "https://github.com/main2526",
      bgColor: "bg-gray-800",
    },
    {
      icon: FaWhatsapp,
      title: "WhatsApp",
      link: "https://api.whatsapp.com/send/?phone=18494795388&text=Hola%2C+vi+tu+portafolio+y+quiero+hablar+contigo.+%C2%BFDisponible%3F&type=phone_number&app_absent=0",
      bgColor: "bg-green-600",
    },
  ];

  return (
    <section className="section mb-16">
      <h2 className="section-title text-3xl font-bold mb-8 text-slate-800 text-center relative pb-4 font-serif">
        Información de Contacto
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
      </h2>

      <div className="grid lg:grid-cols-2 gap-12 mt-8">
        {/* Información de Contacto */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">
            Conectemos
          </h3>
          <div className="contact-grid grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {contactInfo.map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item flex items-center gap-6 p-8 bg-white border-2 border-gray-200 transition-all duration-300 hover:border-yellow-500 hover:shadow-lg  group"
              >
                <div
                  className={`contact-icon min-w-16 h-16 flex items-center justify-center text-2xl text-white ${contact.bgColor} border-2 border-yellow-500 transition-all duration-300 group-hover:bg-yellow-500 group-hover:text-slate-800 group-hover:scale-110`}
                >
                  <contact.icon />
                </div>

                <div className="contact-info">
                  <h4 className="font-bold text-slate-800 mb-1 text-lg tracking-wide font-serif">
                    {contact.title}
                  </h4>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Formulario de Contacto */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6 font-serif">
            Envíame un Mensaje
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="empresa"
                  className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-colors duration-300 text-slate-800"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-colors duration-300 text-slate-800"
                  placeholder="tu@email.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-colors duration-300 text-slate-800"
                placeholder="Asunto del mensaje"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-slate-700 mb-2 tracking-wide"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full px-4 py-3 border-2 border-gray-200 focus:border-yellow-500 focus:outline-none transition-colors duration-300 text-slate-800 resize-none"
                placeholder="Escribe tu mensaje aquí..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-slate-800 text-white py-4 px-8 font-semibold text-lg tracking-wide transition-all duration-300 hover:bg-yellow-500 hover:text-slate-800  hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                <>
                  <FaPaperPlane />
                  Enviar Mensaje
                </>
              )}
            </button>

            {submitMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 text-center font-medium">
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
