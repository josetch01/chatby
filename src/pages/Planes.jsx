import check from "../assets/check.png";
import circuloFondo from "../assets/circulo fondo.svg";
import { useState, useRef, useEffect } from "react";

const Planes = () => {
  const [openAccordion, setOpenAccordion] = useState(0);

  // Estado y ref para carrusel móvil
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);

  const updateCurrentSlide = () => {
    const container = carouselRef.current;
    if (!container) return;
    const children = Array.from(container.children);
    const center = container.scrollLeft + container.clientWidth / 2;
    let nearestIndex = 0;
    let minDist = Infinity;
    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.clientWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < minDist) {
        minDist = dist;
        nearestIndex = idx;
      }
    });
    setCurrentSlide(nearestIndex);
  };

  const scrollToSlide = (idx) => {
    const container = carouselRef.current;
    if (!container) return;
    const child = container.children[idx];
    if (!child) return;
    child.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  useEffect(() => {
    updateCurrentSlide();
  }, []);
  useEffect(() => {
    const handle = () => updateCurrentSlide();
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      question: "¿Cómo funciona la prueba gratuita?",
      answer:
        "Nuestra prueba gratuita de 14 días proporciona acceso inmediato a todas las funciones PRO, no necesitas agregar ninguna tarjeta de pago.\n-1 Bot\n-200 Contactos\n-2 Miembros",
    },
    {
      question:
        "¿Las tarifas de WhatsApp Cloud API están incluidas en el plan?",
      answer:
        "Las tarifas de WhatsApp no están incluidas en la suscripción de Chatby, podrá recargar su crédito de WhatsApp directamente en su Business Manager. Si supera las 1.000 conversaciones mensuales del servicio de WhatsApp, Meta le cobrará las conversaciones adicionales. Consulte nuestra calculadora de precios de WhatsApp Cloud  para obtener una estimación de cuál puede ser el costo.",
    },
    {
      question:
        "¿Qué ocurre si alcanzo mi límite de contactos activos mensuales?",
      answer:
        " Si supera su límite de Contactos Activos Mensuales, sus Bots se pausarán inmediatamente. En su lugar, deberá eliminar algunos contactos que considere, caso contrario migrar a un plan de más contactos. Se recomienda actualizar a un plan más rentable para su negocio.",
    },
    {
      question:
        "¿Puedo cancelar o cambiar mi suscripción en cualquier momento?",
      answer:
        "Sí, puedes cancelar, actualizar o degradar tu suscripción en cualquier momento. No hay un compromiso de tiempo mínimo ni permanencia. Para cancelar, vaya a la sección Facturación de la Plataforma y haga clic en Cambiar Plan (Free). Cuando actualices o reduzcas tu suscripción, tendrás acceso a las nuevas opciones de inmediato. Tu próxima factura tendrá un importe actualizado a la tarifa.",
    },
  ];

  const planes = [
    {
      nombre: "Plan Business",
      precio: "$28",
      periodo: "USD/mes",
      caracteristicas: [
        "1 Bot Omnicanal",
        "1,000 Contactos",
        "5 Miembros",
        "CRM",
        "Soporte",
        "Acceso a todas las funcionalidades PRO",
      ],
      popular: false,
      destacado: false,
    },
    {
      nombre: "Plan Business Lite",
      precio: "$54",
      periodo: "USD/mes",
      caracteristicas: [
        "1 Bot Omnicanal",
        "10,000 Contactos",
        "5 Miembros",
        "CRM",
        "Soporte Pro",
        "Acceso a todas las funcionalidades PRO",
      ],
      popular: true,
      destacado: true,
      icono: "⚡",
    },
    {
      nombre: "Plan Business Pro",
      precio: "$197",
      periodo: "USD/mes",
      caracteristicas: [
        "1 Bot Omnicanal",
        "50,000 Contactos",
        "10 Miembros",
        "CRM",
        "Soporte Prioritario",
        "Acceso a todas las funcionalidades PRO",
      ],
      popular: false,
      destacado: false,
    },
  ];

  return (
    <div className="min-h-screen  dark:bg-gradient-to-t from-[#122030] to-transparent">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        {/* Header */}
        <div className="text-center mb-0 sm:mb-12">
          <div className="inline-block bg-[#FFE8F7] dark:bg-[#394B61] rounded-2xl px-4 py-2 mb-4">
            <span className="text-sm text-[#2C011B] dark:text-[#CCCCCC]">
              Valor insuperable para tu inversión
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4 mx-0 md:mx-10 lg:mx-40">
            <span className="text-[#F129A1] dark:text-[#FF5CBD]">
              Optimiza tu comunicación{" "}
            </span>{" "}
            con la tecnología más avanzada
          </h1>

          <p className="text-sm sm:text-lg md:text-2xl font-medium text-[#2C011B] dark:text-[#CCCCCC] max-w-2xl mx-auto">
            Elige la opción perfecta y disfruta de un servicio excepcional
          </p>
        </div>
      </section>

      {/* Planes Section */}
      <section className="py-12 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={carouselRef}
            onScroll={updateCurrentSlide}
            className="carousel-container flex lg:grid lg:grid-cols-3 gap-3 lg:gap-8 max-w-6xl overflow-x-auto lg:overflow-visible scroll-smooth snap-x snap-mandatory lg:snap-none px-3 sm:px-4 lg:px-0"
          >
            {planes.map((plan, index) => (
              <div
                style={{ boxShadow: "0px 2px 2px 0px #156CFF4D" }}
                key={index}
                className={` relative rounded-3xl p-[2px] transition-all duration-300 overflow-hidden ${
                  plan.destacado
                    ? "transform lg:scale-105 shadow-2xl  dark:bg-gradient-to-b dark:from-[#2a3441] dark:via-[#F129A1] dark:to-[#F129A1] bg-gradient-to-b from-[#ffffff] via-[#f9d2e5] to-[#fce4f6]"
                    : "dark:bg-gradient-to-b dark:from-[#2a3441] via-[#6b7280] to-[#6b7280]"
                } snap-center flex-shrink-0 w-[85vw] sm:w-[75vw] max-w-[420px] mr-3 last:mr-0 md:w-auto md:max-w-none lg:w-auto lg:flex-shrink lg:mr-0`}
              >
                {/* Inner card with glass effect */}
                <div className="relative rounded-3xl p-6 sm:p-8 h-full dark:bg-gradient-to-b from-[#1a2332]/90 via-[#2a3441]/90 to-[#1a2332]/90 backdrop-blur-sm border border-white/10">
                  {/* Shine overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/8 via-white/3 to-transparent pointer-events-none"></div>

                  {/* Content wrapper with relative positioning */}
                  <div className="relative z-10">
                    {/* Header del plan */}
                    <div className="text-center mb-8">
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#2C011B] dark:text-white mb-2">
                        {plan.nombre}
                      </h3>

                      {/* Precio */}
                      <div className="mb-6">
                        <div className="text-2xl sm:text-4xl font-bold text-[#F129A1] mb-1">
                          {plan.precio}
                        </div>
                        <div className="text-[#F129A1] text-base sm:text-lg font-semibold">
                          {plan.periodo}
                        </div>
                      </div>
                    </div>

                    {/* Características */}
                    <ul className="space-y-1 mb-8">
                      {plan.caracteristicas.map((caracteristica, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="mr-3 mt-0.5 flex-shrink-0">
                            <img src={check} alt="check" className="w-5 h-5" />
                          </div>
                          <span className="text-[#2C011B] dark:text-gray-300 text-sm sm:text-lg font-medium">
                            {caracteristica.includes("PRO") ? (
                              <>
                                {caracteristica.replace(" PRO", "")}
                                <span className="text-[#F129A1] font-semibold">
                                  {" "}
                                  PRO
                                </span>
                              </>
                            ) : (
                              caracteristica
                            )}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Botón */}
                    <button
                      className="w-full py-3 px-6 rounded-full font-medium transition-all duration-300 bg-gradient-to-r from-[#F129A1] to-[#A83CC1] hover:from-[#E01A96] hover:to-[#9A35B8] text-white shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                      onClick={() =>
                        (window.location.href =
                          "https://chatby.io/register/?ref=Web")
                      }
                    >
                      Prueba gratis por 14 días
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots navegación - solo mobile */}
          <div className="flex lg:hidden justify-center gap-2 mt-6">
            {planes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentSlide === idx
                    ? "w-6 bg-[#F129A1]"
                    : "w-2.5 bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Ir al plan ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-12 sm:py-16">
        {/* Background circle image (behind accordions) */}
        <img
          src={circuloFondo}
          alt="círculo decorativo"
          className="pointer-events-none select-none absolute -z-10 dark:z-0 left-1/2 md:-translate-x-120 lg:-translate-x-400  -translate-x-60 top-10 w-[280px] opacity-80 sm:translate-x-0 sm:left-auto sm:right-[-20%] sm:top-6 sm:w-[520px] md:w-[640px] lg:w-[760px] xl:w-[880px]"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-0 items-start">
            {/* Left Column - Title and Contact Button */}
            <div className="lg:pr-10 text-center lg:text-left">
              <h2 className="text-2xl leading-tight sm:text-[40px] md:text-[48px] font-semibold text-[#F129A1] dark:text-[#FF5CBD] mb-4">
                Preguntas
                <br className="hidden sm:block" />
                Frecuentes
              </h2>
              <p className="text-sm font-semibold sm:text-lg text-gray-700 dark:text-gray-300 mb-5 sm:mb-6">
                Tienes otras preguntas?
              </p>
              <button
                className="bg-[#F129A1] hover:bg-[#E01A96] text-white px-6 sm:px-7 py-2.5 rounded-full font-medium transition-all duration-200 shadow-md cursor-pointer"
                onClick={() =>
                  (window.location.href =
                    "https://api.whatsapp.com/message/MMX5O7MBCJBWE1?autoload=1&app_absent=0")
                }
              >
                Contáctanos
              </button>
            </div>

            {/* Right Column - FAQ Accordions */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-2xl dark:bg-[#192643] backdrop-blur-sm border border-white/10 shadow-lg"
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`group w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center transition-colors cursor-pointer ${
                      openAccordion === index ? "" : ""
                    }`}
                  >
                    <span className="text-sm sm:text-lg font-semibold text-[#2C011B] dark:text-white pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`flex items-center justify-center w-9 h-9 rounded-xl transition-all duration-200 ${
                        openAccordion === index
                          ? "dark:bg-gradient-to-tr from-[#F129A1] to-[#A83CC1] text-[#2C011B] dark:text-white rotate-180"
                          : "dark:bg-[#192643] text-[#F129A1]"
                      }`}
                    >
                      <svg
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19 9l-7 7-7-7"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openAccordion === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5">
                      <div className="text-sm sm:text-base text-[#2C011B] dark:text-gray-300 whitespace-pre-line leading-relaxed text-justify">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planes;
