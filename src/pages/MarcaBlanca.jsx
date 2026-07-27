import React from 'react';
import { Link } from 'react-router-dom';
import { CheckIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

const MarcaBlanca = () => {
  const handleSupportClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chatby/chatby-soporte' });
    } else {
      window.open("https://calendly.com/chatby/chatby-soporte", "_blank", "noopener,noreferrer");
    }
  };

  const wlItems = [
    {
      title: "Tu marca y tu dominio",
      desc: "Logo, colores y app.tudominio.com. Tus clientes nunca ven Chatby."
    },
    {
      title: "Tú defines los planes y márgenes",
      desc: "Fija tus precios y quédate con la diferencia. Modelo 100% revendible."
    },
    {
      title: "Facturación a tu nombre",
      desc: "Cobra a tus clientes directamente con tu propia pasarela."
    },
    {
      title: "Onboarding y soporte para ti",
      desc: "Te capacitamos y respaldamos para que atiendas a tus clientes con seguridad."
    },
    {
      title: "Toda la potencia de Chatby",
      desc: "Omnicanal, IA, CRM y ecommerce — sin desarrollar nada desde cero."
    }
  ];

  const idealFor = [
    {
      kicker: "Ideal para",
      title: "Agencias de marketing",
      desc: "Suma automatización con IA a tu oferta y crea ingresos recurrentes mensuales."
    },
    {
      kicker: "Ideal para",
      title: "Consultores y SaaS",
      desc: "Ofrece una plataforma propia sin equipo de desarrollo ni infraestructura."
    },
    {
      kicker: "Ideal para",
      title: "Distribuidores regionales",
      desc: "Revende Chatby en tu país con tu marca, tu moneda y tu soporte local."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-transparent transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20  ">
        <div className="absolute  left-1/2 -translate-x-1/2 w-[50%] max-w-[900px] h-[400px] sm:h-[200px] bg-pink-500/35 dark:bg-pink-600/25 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-[#2C011B] dark:text-[#F5F5F5] dark:bg-[#394B61] font-medium mb-4 text-sm sm:text-base rounded-2xl bg-[#FFE8F7] px-5 py-1 inline-block">
            Chatby Marca Blanca
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
            Lanza <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F129A1] to-[#A83CC1]">tu propia plataforma</span><br />
            de automatización con IA
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Toda la tecnología de Chatby bajo tu marca: tu logo, tu dominio y tus precios. Tú vendes y facturas; nosotros ponemos el motor.
          </p>
        </div>
      </section>

      {/* Benefits & Mockup Section */}
      <section className="py-12 sm:py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* List */}
            <div>
              <div className="flex flex-col gap-6">
                {wlItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="flex-none w-8 h-8 rounded-xl bg-gradient-to-br from-[#F129A1] to-[#A83CC1] flex items-center justify-center mt-1 shadow-md shadow-[#F129A1]/30">
                      <CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button
                  onClick={handleSupportClick}
                  className="bg-gradient-to-r from-[#F129A1]/90 to-[#A83CC1]/90 backdrop-blur-sm shadow-lg shadow-[#F129A1]/40 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:from-[#E01A96] hover:to-[#9A37B2] hover:shadow-xl hover:shadow-[#F129A1]/50 w-full sm:w-auto"
                >
                  Agendar demo de marca blanca
                </button>
              </div>
            </div>

            {/* Mockup Panel */}
            <div className="bg-white dark:bg-[#0F172A] border border-gray-100 dark:border-gray-800 rounded-3xl p-6 sm:p-10 shadow-[0_8px_30px_rgba(241,41,161,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative hover:-translate-y-2 transition-transform duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <div className="text-xs text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-800/50 px-3 py-1.5 rounded-lg flex-1 text-center font-medium font-mono">
                  app.tumarca.com
                </div>
              </div>

              <div className="text-[10px] font-bold text-[#2BA98F] border border-[#2BA98F]/30 bg-[#2BA98F]/5 px-2.5 py-1 rounded-md inline-block mb-6">
                TU MARCA, NO LA NUESTRA
              </div>

              <div className="h-6 w-32 rounded-md bg-gradient-to-r from-[#2BC4A6] to-[#2B7FC4] mb-8 shadow-sm"></div>

              <div className="h-3.5 rounded-md bg-gray-100 dark:bg-gray-800 mb-5 w-[82%]"></div>
              <div className="h-3.5 rounded-md bg-gray-100 dark:bg-gray-800 mb-5 w-[60%]"></div>
              <div className="h-3.5 rounded-md bg-gray-100 dark:bg-gray-800 mb-10 w-[82%]"></div>

              <div className="h-10 w-36 rounded-xl bg-gradient-to-r from-[#2BC4A6] to-[#2B7FC4] shadow-md shadow-[#2BC4A6]/20 mt-4"></div>

              {/* Decorative elements to make the mockup look cool */}
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-[#2BC4A6]/20 to-[#2B7FC4]/20 blur-3xl rounded-full pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {idealFor.map((item, idx) => (
              <div key={idx} className="bg-white dark:bg-[#0F172A] rounded-3xl p-8 lg:p-10 shadow-[0_8px_30px_rgba(241,41,161,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] group hover:-translate-y-1 transition-transform duration-300">
                <p className="text-pink-600 dark:text-pink-400 font-bold text-xs uppercase tracking-wider mb-4">
                  {item.kicker}
                </p>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF] dark:from-pink-900/10 dark:to-purple-900/10 rounded-3xl p-10 sm:p-16 text-center border border-pink-100/50 dark:border-pink-800/30 shadow-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Listo para lanzar tu propia plataforma?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Te entregamos la mejor tecnología del mercado, lista para vender bajo tu nombre.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={handleSupportClick}
                className="bg-gradient-to-r from-[#F129A1]/90 to-[#A83CC1]/90 backdrop-blur-sm shadow-lg shadow-[#F129A1]/40 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:from-[#E01A96] hover:to-[#9A37B2] hover:shadow-xl hover:shadow-[#F129A1]/50 w-full sm:w-auto"
              >
                Agendar demo
              </button>
              <button
                onClick={handleSupportClick}
                className="border-2 border-pink-600 dark:border-[#FFE8F7] text-pink-600 dark:text-[#FFE8F7] bg-transparent px-8 py-3.5 rounded-full text-base font-medium transition-colors hover:bg-pink-600 hover:text-white dark:hover:bg-[#FFE8F7] dark:hover:text-[#2C011B] w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2"
              >
                <ChatBubbleLeftEllipsisIcon className="w-5 h-5" /> Hablar con un experto
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default MarcaBlanca;
