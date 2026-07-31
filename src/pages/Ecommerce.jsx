import React from 'react';
import { Link } from 'react-router-dom';
import { PlayIcon, ArrowDownIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/react/24/solid';

const Ecommerce = () => {
  const scrollToPilares = () => {
    const el = document.getElementById('pilares');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleSupportClick = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: 'https://calendly.com/chatby/chatby-soporte' });
    } else {
      window.open("https://calendly.com/chatby/chatby-soporte", "_blank", "noopener,noreferrer");
    }
  };

  const automations = [
    {
      id: "01",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-pink-600">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      ),
      kicker: "Menos pedidos falsos",
      title: "Confirmación de Pedidos",
      desc: "Valida el pedido y los datos de entrega al instante por WhatsApp. Reduce contraentregas rechazadas y devoluciones.",
      chat: [
        { out: true, text: "Hola Ana 👋 ¿Confirmas tu pedido #4821 a Av. Lima 123?" },
        { out: false, text: "✅ Sí, confírmalo" }
      ]
    },
    {
      id: "02",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-pink-600">
          <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.7 13.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L23 6H6" />
        </svg>
      ),
      kicker: "Recupera ingresos",
      title: "Carritos Abandonados",
      desc: "Detecta el carrito sin comprar y envía recordatorios automáticos con incentivo para cerrar la venta.",
      chat: [
        { out: true, text: "Dejaste tu carrito 🛒 Te guardamos 10% dcto por 2h. ¿Lo completamos?" },
        { out: false, text: "Sí, quiero pagarlo" }
      ]
    },
    {
      id: "03",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-pink-600">
          <path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1-6.3-4.6L5.7 21l2.3-7.1-6-4.5h7.6z" />
        </svg>
      ),
      kicker: "Más ticket promedio",
      title: "Ventas Inteligentes",
      desc: "La IA recomienda productos, arma combos y aplica cross-sell y up-sell según lo que cada cliente busca.",
      chat: [
        { out: false, text: "Quiero la polera negra" },
        { out: true, text: "¡Genial! Llévala con el gorro a juego y ahorra 20% 🔥" }
      ]
    },
    {
      id: "04",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-pink-600">
          <rect x="1" y="3" width="15" height="13" rx="1" />
          <path d="M16 8h4l3 3v5h-7z" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="18.5" cy="18.5" r="2" />
        </svg>
      ),
      kicker: "Cliente informado",
      title: "Notificación de Estados Logísticos",
      desc: "Notifica cada etapa del envío —preparado, en reparto, entregado— sin que tu equipo levante el teléfono.",
      chat: [
        { out: true, text: "🚚 Tu pedido #4821 salió a reparto. Llega hoy entre 08–11 a.m." }
      ]
    },
    {
      id: "05",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-pink-600">
          <path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
          <path d="M12 9v4" /><path d="M12 17h.01" />
        </svg>
      ),
      kicker: "Menos Devoluciones",
      title: "Solución de Novedades e Incidencias",
      desc: "Resuelve direcciones erradas, reprogramaciones y datos faltantes automáticamente — antes de que sea una devolución.",
      chat: [
        { out: false, text: "No estoy en casa hoy" },
        { out: true, text: "Sin problema 🙌 ¿Reprogramamos para el jueves?" }
      ]
    },
    {
      id: "06",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-pink-600">
          <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1a5.5 5.5 0 10-7.8 7.8l1 1L12 21l7.8-7.5 1-1a5.5 5.5 0 000-7.9z" />
        </svg>
      ),
      kicker: "Más recompra y lealtad",
      title: "Post-Venta Estratégica",
      desc: "Reactiva clientes, pide reseñas y sugiere la próxima compra en el momento justo para fidelizar.",
      chat: [
        { out: true, text: "¿Cómo te fue con tus zapatillas? 😊 15% en medias a juego, solo hoy" },
        { out: false, text: "¡Las quiero!" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-transparent transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20  ">
        {/* Glow destello detrás del texto principal */}
        <div className="absolute  left-1/2 -translate-x-1/2 w-[50%] max-w-[900px] h-[400px] sm:h-[200px] bg-pink-500/35 dark:bg-pink-600/25 blur-[120px] sm:blur-[140px] rounded-full pointer-events-none -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <p className="text-[#2C011B] dark:text-[#F5F5F5] dark:bg-[#394B61] font-medium mb-4 text-sm sm:text-base rounded-2xl bg-[#FFE8F7] px-5 py-1 inline-block">
            Chatby para Ecommerce
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
            Del carrito a la recompra:<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F129A1] to-[#A83CC1]">cada chat, una venta</span>
          </h1>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Automatiza el ciclo completo de tu tienda por WhatsApp: confirma pedidos, recupera ventas perdidas, resuelve incidencias y fideliza — con IA y agentes humanos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-[#F129A1]/90 to-[#A83CC1]/90 backdrop-blur-sm shadow-lg shadow-[#F129A1]/40 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:from-[#E01A96] hover:to-[#9A37B2] hover:shadow-xl hover:shadow-[#F129A1]/50 w-full sm:w-auto">
              Iniciar prueba gratis
            </button>
            <button
              onClick={scrollToPilares}
              className="border-2 border-pink-600 dark:border-[#FFE8F7] text-pink-600 dark:text-[#FFE8F7] bg-transparent px-8 py-3.5 rounded-full text-base font-medium transition-colors hover:bg-pink-600 hover:text-white dark:hover:bg-[#FFE8F7] dark:hover:text-[#2C011B] w-full sm:w-auto cursor-pointer flex items-center justify-center gap-2"
            >
              Ver qué automatizas <ArrowDownIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* VSL Video Section */}
      <section className="py-8 sm:py-8 relative z-10">
        <div className="max-w-sm sm:max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative rounded-3xl bg-gray-900 dark:bg-[#0F172A] border border-gray-200 dark:border-gray-800 shadow-2xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] overflow-hidden w-full"
            style={{ paddingBottom: '177.77777777777777%', height: 0 }}
          >
            <iframe
              src="https://www.loom.com/embed/8c1cb1d151f047eea5e8c756cece79a6"
              frameBorder="0"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Pilares Section */}
      <section id="pilares" className="py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Todo lo que Chatby hace por tu tienda
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Siete automatizaciones que reducen costos, recuperan ingresos y suben tu recompra — en orden, del pedido a la postventa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {automations.map((item) => (
              <div key={item.id} className="bg-white dark:bg-[#0F172A] rounded-3xl p-8 shadow-[0_8px_30px_rgba(241,41,161,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative group hover:-translate-y-1 transition-transform duration-300">
                <span className="absolute top-6 right-6 text-gray-300 dark:text-gray-600 font-bold text-lg">{item.id}</span>

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-500/10 dark:to-purple-500/10 border border-pink-100 dark:border-pink-500/20 flex items-center justify-center mb-6">
                  {item.icon}
                </div>

                <p className="text-pink-600 dark:text-pink-400 font-bold text-xs uppercase tracking-wider mb-3">
                  {item.kicker}
                </p>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-3">
                  {item.desc}
                </p>

                <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-4 flex flex-col gap-3 mt-auto">
                  {item.chat.map((msg, i) => (
                    <div key={i} className={`text-xs px-3 py-2 rounded-2xl max-w-[85%] ${msg.out ? 'bg-gradient-to-r from-[#F129A1] to-[#A83CC1] text-white self-end rounded-br-sm' : 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-600 self-start rounded-bl-sm shadow-sm'}`}>
                      {msg.text}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Special 7th Card - Agent Call */}
            <div className="lg:col-span-2 bg-gradient-to-br from-pink-50/50 to-purple-50/50 dark:from-[#0F172A] dark:to-[#0F172A] rounded-3xl p-8 shadow-[0_8px_30px_rgba(241,41,161,0.15)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] relative group hover:-translate-y-1 transition-transform duration-300">
              <span className="absolute top-6 right-6 text-gray-300 dark:text-gray-600 font-bold text-lg">07</span>

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-500/10 dark:to-purple-500/10 border border-pink-100 dark:border-pink-500/20 flex items-center justify-center mb-6">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor" className="w-6 h-6 text-pink-600">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.6a16 16 0 006 6l1.1-1.2a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.9 2.1z" />
                </svg>
              </div>

              <p className="text-pink-600 dark:text-pink-400 font-bold text-xs uppercase tracking-wider mb-3">
                Recupera lo que WhatsApp no entrega
              </p>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Agente de Llamadas con IA
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
                Cuando WhatsApp no puede entregar un mensaje (número sin WhatsApp, mensaje no leído o fuera de la ventana de 24h), un agente de voz con IA <span className="font-bold text-gray-900 dark:text-white">llama automáticamente</span> al cliente para confirmar el pedido, resolver la incidencia o cerrar la venta. Ningún pedido se queda sin respuesta.
              </p>

              <div className="bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700/50 rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 shadow-sm">
                <span className="text-4xl">📞</span>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  <span className="font-bold text-gray-900 dark:text-white">Llamada IA:</span> “Hola Ana, te llamo de la tienda para confirmar tu pedido #4821. ¿Sigue en pie la entrega para hoy?”
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 sm:py-24 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FFF5FA] to-[#F3E8FF] dark:from-pink-900/10 dark:to-purple-900/10 rounded-3xl p-10 sm:p-16 text-center border border-pink-100/50 dark:border-pink-800/30 shadow-xl dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Vendes online?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Conecta tu tienda y activa las 7 automatizaciones en minutos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() =>
                  window.open(
                    "https://chatby.io/register?ref=WebTrial",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="bg-gradient-to-r from-[#F129A1]/90 to-[#A83CC1]/90 backdrop-blur-sm shadow-lg shadow-[#F129A1]/40 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 hover:from-[#E01A96] hover:to-[#9A37B2] hover:shadow-xl hover:shadow-[#F129A1]/50 w-full sm:w-auto cursor-pointer"
              >
                Empezar gratis
              </button>
              <button
                onClick={() =>
                  window.open(
                    "https://wa.me/51970739901?text=Hola,%20Quiero%20que%20me%20ayuden%20a%20configurar%20mi%20tienda%20de%20Ecommerce",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
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

export default Ecommerce;
