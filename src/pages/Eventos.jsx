import React from 'react';
import { StarIcon, CalendarIcon, MapPinIcon, FlagIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import logoEcomnowHorizontal from '../assets/eventos/logo_ecomnow_horizontal.svg';
import logoFeriaEffix from '../assets/eventos/img-logo-feria-effix-2026-3.webp';
import francyOtf from '../assets/eventos/FrancyFont/Francy.otf';
import globeImg from '../assets/eventos/globe_chatby.jpg';

const Eventos = () => {
  return (
    <div className="min-h-screen bg-[#06040f] text-white pt-10 sm:pt-16 pb-20 relative overflow-hidden">

      {/* Background ambient glows */}
      <div className="absolute left-[-120px] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ top: '58%', transform: 'translateY(-50%)', background: 'radial-gradient(circle, rgba(80,30,180,0.35) 0%, rgba(50,10,120,0.15) 45%, transparent 70%)', filter: 'blur(60px)' }}
      />
      <div className="absolute right-[-100px] w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ top: '50%', transform: 'translateY(-50%)', background: 'radial-gradient(circle, rgba(140,40,200,0.3) 0%, rgba(100,20,160,0.12) 45%, transparent 70%)', filter: 'blur(70px)' }}
      />

      {/* Inject Francy font face directly */}
      <style>{`
        @font-face {
          font-family: "FrancyEvent";
          src: url("${francyOtf}") format("opentype");
          font-weight: normal;
          font-style: normal;
          font-display: block;
        }
        .titulo-feria,
        body .titulo-feria,
        body span.titulo-feria,
        #root .titulo-feria,
        #root span.titulo-feria {
          font-family: "FrancyEvent", cursive !important;
          -webkit-text-stroke: 1.5px #000;
          text-shadow: 0 0 10px rgba(255,255,255,0.5), -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
          font-size: clamp(2rem, 7vw, 3.8rem);
          line-height: 1.1;
          color: #fff;
          font-weight: normal;
          display: block;
          margin-bottom: 10px;
        }
        @media (min-width: 1024px) {
          .titulo-feria,
          body .titulo-feria,
          body span.titulo-feria,
          #root .titulo-feria,
          #root span.titulo-feria {
            font-size: 3.8rem !important;
            white-space: nowrap !important;
            line-height: 1 !important;
          }
        }
        @keyframes globeFloat {
          0% {
            transform: translate(0px, 0px) rotate(0deg);
          }
          33% {
            transform: translate(12px, -16px) rotate(1.5deg);
          }
          66% {
            transform: translate(-10px, -8px) rotate(-1.5deg);
          }
          100% {
            transform: translate(0px, 0px) rotate(0deg);
          }
        }
        .animate-globe-float {
          animation: globeFloat 8s ease-in-out infinite;
          will-change: transform;
        }
        .emoji {
          font-family: 'Twemoji Mozilla', 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', sans-serif !important;
        }
      `}</style>


      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Section */}
        <div className="mb-8 sm:mb-10 pt-2 sm:pt-4 relative">
          <p className="text-[#847b96] text-xs font-semibold tracking-widest mb-2 sm:mb-3 uppercase relative z-10">Eventos</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 relative z-10">
            Próximos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9b66ff] to-[#6b38fb]">eventos</span>
          </h1>
          <p className="text-gray-400 text-sm sm:text-base max-w-lg leading-relaxed relative z-10">
            Conoce todos los eventos en los que Chatby estará presente.<br className="hidden sm:block" />
            Conéctate, aprende y lleva tu negocio al siguiente nivel.
          </p>
        </div>

        {/* Globe SVG - spans header and card, card sits on top hiding lower half (Desktop only) */}
        <div
          className="absolute pointer-events-none hidden lg:block animate-globe-float"
          style={{
            right: '-10px',
            top: '-80px',
            width: '520px',
            height: '520px',
            zIndex: 1,
            filter: 'blur(0.7px)',
          }}
        >
          <svg viewBox="0 0 380 300" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <radialGradient id="globeGrad" cx="42%" cy="38%" r="55%">
                <stop offset="0%" stopColor="#1e1045" />
                <stop offset="60%" stopColor="#0f0820" />
                <stop offset="100%" stopColor="#050310" />
              </radialGradient>
              <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#3b1a8a" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0a0520" stopOpacity="0" />
              </radialGradient>
              <clipPath id="globeClip">
                <circle cx="190" cy="170" r="145" />
              </clipPath>
              {/* Glow filter for orbit line */}
              <filter id="orbitGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Glow filter for globe edge */}
              <filter id="edgeGlow" x="-5%" y="-5%" width="110%" height="110%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Outer glow */}
            <ellipse cx="190" cy="200" rx="170" ry="80" fill="url(#globeGlow)" opacity="0.6" />

            {/* Globe sphere */}
            <circle cx="190" cy="170" r="145" fill="url(#globeGrad)" />

            {/* Continent shapes (simplified) */}
            <g clipPath="url(#globeClip)" opacity="0.55">
              <path d="M60 90 C70 80 95 75 110 85 C125 95 130 100 120 120 C110 135 90 145 75 140 C60 135 48 120 50 105 Z" fill="#2a1260" stroke="#3d1e8a" strokeWidth="0.5" />
              <path d="M95 120 C105 115 115 118 120 130 C125 142 118 155 105 158 C92 160 82 152 80 140 C78 128 85 125 95 120 Z" fill="#2a1260" stroke="#3d1e8a" strokeWidth="0.5" />
              <path d="M148 55 C158 48 175 50 180 62 C185 74 178 84 165 86 C152 88 142 80 140 70 C138 60 142 60 148 55 Z" fill="#2a1260" stroke="#3d1e8a" strokeWidth="0.5" />
              <path d="M185 75 C195 68 215 70 225 80 C232 88 228 100 218 105 C208 110 195 108 188 100 C181 92 178 82 185 75 Z" fill="#251060" stroke="#3d1e8a" strokeWidth="0.5" />
              <path d="M210 100 C218 96 228 98 232 108 C236 118 230 128 220 130 C210 132 202 126 200 116 C198 106 203 104 210 100 Z" fill="#251060" stroke="#3d1e8a" strokeWidth="0.5" />
              <path d="M195 118 C208 112 228 114 238 128 C248 142 248 165 242 185 C236 205 220 218 205 215 C190 212 180 198 178 178 C176 158 178 138 185 128 C188 122 192 120 195 118 Z" fill="#2a1260" stroke="#3d1e8a" strokeWidth="0.5" />
              <path d="M235 70 C255 60 290 62 315 75 C335 85 345 100 340 120 C335 140 315 152 290 150 C265 148 245 138 235 120 C225 102 222 82 235 70 Z" fill="#231060" stroke="#3d1e8a" strokeWidth="0.5" />
              <path d="M285 185 C298 178 318 180 328 192 C338 204 335 220 322 226 C309 232 292 228 283 217 C274 206 274 192 285 185 Z" fill="#2a1260" stroke="#3d1e8a" strokeWidth="0.5" />
              <path d="M100 155 C112 148 128 150 135 165 C142 180 140 205 130 222 C120 239 103 245 90 238 C77 231 72 215 75 195 C78 175 88 162 100 155 Z" fill="#2a1260" stroke="#3d1e8a" strokeWidth="0.5" />
              <line x1="45" y1="100" x2="335" y2="100" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="45" y1="130" x2="335" y2="130" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="45" y1="160" x2="335" y2="160" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="45" y1="190" x2="335" y2="190" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="45" y1="220" x2="335" y2="220" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="120" y1="25" x2="120" y2="315" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="160" y1="25" x2="160" y2="315" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="200" y1="25" x2="200" y2="315" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="240" y1="25" x2="240" y2="315" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
              <line x1="280" y1="25" x2="280" y2="315" stroke="#3320a0" strokeWidth="0.4" strokeOpacity="0.4" />
            </g>

            <circle cx="190" cy="170" r="145" fill="none" stroke="#6a3de8" strokeWidth="1.5" opacity="0.8" filter="url(#edgeGlow)" />
            <circle cx="190" cy="170" r="145" fill="none" stroke="#4a2aaa" strokeWidth="0.8" opacity="0.5" />
            <ellipse cx="140" cy="110" rx="45" ry="30" fill="#ffffff" opacity="0.04" transform="rotate(-30 140 110)" />
            {/* Orbit with glow */}
            <ellipse cx="190" cy="175" rx="175" ry="42" stroke="#8b5cf6" strokeWidth="1.4" strokeDasharray="4 6" fill="none" opacity="0.9" transform="rotate(8 210 175)" filter="url(#orbitGlow)" />
            <ellipse cx="190" cy="175" rx="175" ry="42" stroke="#c4b5fd" strokeWidth="0.6" strokeDasharray="4 6" fill="none" opacity="0.5" transform="rotate(8 210 175)" />

            {/* Chatby bot icon */}
            <circle cx="290" cy="68" r="22" fill="#6938ef" opacity="0.25" />
            <circle cx="290" cy="68" r="16" fill="#7c3aed" />
            <circle cx="290" cy="68" r="16" fill="none" stroke="#a78bfa" strokeWidth="1.2" />
            <rect x="282" y="62" width="16" height="12" rx="3" fill="white" opacity="0.9" />
            <circle cx="286" cy="67" r="2" fill="#6938ef" />
            <circle cx="294" cy="67" r="2" fill="#6938ef" />
            <line x1="286" y1="71" x2="294" y2="71" stroke="#6938ef" strokeWidth="1.2" strokeLinecap="round" />
            <line x1="290" y1="62" x2="290" y2="57" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="290" cy="55" r="2" fill="white" />
          </svg>
        </div>

        {/* Featured Event Card - z-10 so it covers the bottom of the globe */}
        <div
          className="bg-[#09071a] border border-[#1e1240] rounded-2xl p-5 sm:p-6 mb-8 relative overflow-hidden"
          style={{
            zIndex: 10,
            boxShadow: `
              0 0 0 1px rgba(105, 56, 239, 0.15),
              0 0 30px -5px rgba(105, 56, 239, 0.25),
              0 0 60px -15px rgba(105, 56, 239, 0.2),
              4px 4px 40px -10px rgba(140, 40, 200, 0.3),
              -4px -4px 40px -10px rgba(80, 30, 200, 0.25),
              4px -4px 40px -10px rgba(120, 40, 220, 0.2),
              -4px 4px 40px -10px rgba(100, 30, 180, 0.2)
            `
          }}
        >
          {/* Decorative orbit lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 200" preserveAspectRatio="xMidYMid slice" fill="none">
            <ellipse cx="820" cy="100" rx="220" ry="80" stroke="#4a2aaa" strokeWidth="1" strokeDasharray="5 6" opacity="0.35" transform="rotate(-10 820 100)" />
            <ellipse cx="820" cy="100" rx="160" ry="55" stroke="#6938ef" strokeWidth="0.8" strokeDasharray="4 7" opacity="0.2" transform="rotate(12 820 100)" />
          </svg>

          <div className="inline-flex items-center gap-2 bg-[#110b2a] border border-[#221450] text-[#a57cf8] text-[13px] sm:text-[16px] font-semibold px-3.5 py-1.5 rounded-full mb-5 sm:mb-6">
            <StarIcon className="w-3.5 h-3.5" /> EVENTO DESTACADO
          </div>

          {/* Main content: flex-col on mobile/tablet, single horizontal row on desktop (lg+) */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 xl:gap-6">

            {/* LEFT: Title + Description */}
            <div className="w-full lg:w-[28%] lg:min-w-[240px] lg:max-w-[360px] shrink-0">
              <img
                src={logoFeriaEffix}
                alt="Feria Effix 2026"
                className="max-w-[360px] sm:max-w-[360px] w-full h-auto object-contain mb-3"
              />
              <p className="text-[#847b96] text-[13px] leading-relaxed">
                El evento de comercio electrónico <strong className="text-[#ca72ef] font-bold">MÁS GRANDE DEL MUNDO</strong>. Reúne a diversos actores del sector, incluyendo proveedores de servicios y productos, fabricantes, agencias, comunidades, transportadoras, <strong className="text-[#ca72ef] font-bold">Y MUCHO MÁS.</strong>
              </p>
            </div>

            {/* CENTER: Info columns */}
            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-center min-w-0 gap-4 sm:gap-6 lg:gap-8 py-4 lg:py-0 border-y lg:border-y-0 border-[#1f1638]">

              {/* Fechas */}
              <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-0 sm:px-3 lg:px-4 shrink-0">
                <CalendarIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9b66ff] sm:mb-2 shrink-0" />
                <div>
                  <div className="text-[#685c7f] text-[9px] font-bold tracking-widest uppercase mb-0.5 sm:mb-1">FECHAS</div>
                  <div className="text-[#d4cce6] text-[15px] sm:text-[15px] font-medium leading-tight whitespace-nowrap">
                    Del 15 al 19<br className="hidden sm:inline" /> de Octubre
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-12 lg:h-16 bg-[#1f1638] shrink-0"></div>

              {/* Dirección */}
              <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-0 sm:px-3 lg:px-4 max-w-full sm:max-w-[280px] lg:max-w-[260px] xl:max-w-[300px]">
                <MapPinIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9b66ff] sm:mb-2 shrink-0" />
                <div>
                  <div className="text-[#685c7f] text-[9px] font-bold tracking-widest uppercase mb-0.5 sm:mb-1">DIRECCIÓN</div>
                  <div className="text-[#d4cce6] text-[13px] sm:text-[13px] xl:text-[14px] font-medium leading-snug">
                    Centro de Convenciones Plaza Mayor, Calle 41 # 55-80 (AM50 Pabellón Amarillo)
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-12 lg:h-16 bg-[#1f1638] shrink-0"></div>

              {/* País */}
              <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-0 sm:px-3 lg:px-4 shrink-0">
                <FlagIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9b66ff] sm:mb-2 shrink-0" />
                <div>
                  <div className="text-[#685c7f] text-[9px] font-bold tracking-widest uppercase mb-0.5 sm:mb-1">PAÍS</div>
                  <div className="text-[#d4cce6] text-[15px] sm:text-[15px] font-medium flex items-center gap-2 whitespace-nowrap">
                    Medellín, Colombia <img src="https://flagcdn.com/w20/co.png" alt="🇨🇴" width="20" height="15" style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Action Panel */}
            <div className="w-full lg:w-[250px] shrink-0 bg-[#140e2b] rounded-2xl p-5 sm:p-6 border border-[#21163f] flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-[#9b66ff] text-[9px] font-bold tracking-widest uppercase mb-2 sm:mb-3">
                <StarIcon className="w-3 h-3" /> BENEFICIO EXCLUSIVO
              </div>
              <p className="text-[#e2dcf2] text-sm mb-4 sm:mb-5 leading-relaxed">
                Obtén un 50% de descuento usando código <strong className="text-[#ca72ef] font-bold">CHATBY50</strong>
              </p>
              <a
                href="https://latiquetera.com/site/effix/events/view/feria-comercio-electronico-effix2026"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-gradient-to-r from-[#6938ef] to-[#8b5cf6] hover:from-[#5b21b6] hover:to-[#7c3aed] text-white font-medium py-3 px-4 rounded-xl w-full transition-all duration-300 text-sm mb-3 text-center inline-block"
              >
                Comprar entradas →
              </a>
              <div className="flex items-center gap-1.5 text-[#685c7f] text-[10px]">
                <ShieldCheckIcon className="w-3.5 h-3.5" /> Pago seguro y oficial
              </div>
            </div>
          </div>
        </div>

        {/* Evento ECOM NOW - Full Width */}
        <div
          className="bg-[#09071a] border border-[#1e1240] rounded-2xl p-5 sm:p-6 mb-8 relative overflow-hidden"
          style={{
            zIndex: 10,
            boxShadow: `
              0 0 0 1px rgba(105, 56, 239, 0.15),
              0 0 30px -5px rgba(105, 56, 239, 0.25),
              0 0 60px -15px rgba(105, 56, 239, 0.2),
              4px 4px 40px -10px rgba(140, 40, 200, 0.3),
              -4px -4px 40px -10px rgba(80, 30, 200, 0.25),
              4px -4px 40px -10px rgba(120, 40, 220, 0.2),
              -4px 4px 40px -10px rgba(100, 30, 180, 0.2)
            `
          }}
        >
          {/* Decorative orbit lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 900 200" preserveAspectRatio="xMidYMid slice" fill="none">
            <ellipse cx="820" cy="100" rx="220" ry="80" stroke="#4a2aaa" strokeWidth="1" strokeDasharray="5 6" opacity="0.35" transform="rotate(-10 820 100)" />
            <ellipse cx="820" cy="100" rx="160" ry="55" stroke="#6938ef" strokeWidth="0.8" strokeDasharray="4 7" opacity="0.2" transform="rotate(12 820 100)" />
          </svg>

          {/* Main content: flex-col on mobile/tablet, single horizontal row on desktop (lg+) */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-6 xl:gap-6">

            {/* LEFT: Logo + Description */}
            <div className="w-full lg:w-[28%] lg:min-w-[240px] lg:max-w-[360px] shrink-0">
              <img
                src={logoEcomnowHorizontal}
                alt="ECOM NOW"
                className="max-w-[240px] sm:max-w-[280px] w-full h-auto object-contain mb-3"
              />
              <p className="text-[#847b96] text-[13px] leading-relaxed">
                El evento de ecommerce más importante de México, con presencia de Europa y Latinoamérica.
              </p>
            </div>

            {/* CENTER: Info columns */}
            <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between lg:justify-center min-w-0 gap-4 sm:gap-6 lg:gap-8 py-4 lg:py-0 border-y lg:border-y-0 border-[#1f1638]">

              {/* Fechas */}
              <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-0 sm:px-3 lg:px-4 shrink-0">
                <CalendarIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9b66ff] sm:mb-2 shrink-0" />
                <div>
                  <div className="text-[#685c7f] text-[9px] font-bold tracking-widest uppercase mb-0.5 sm:mb-1">FECHAS</div>
                  <div className="text-[#d4cce6] text-[15px] sm:text-[15px] font-medium leading-tight whitespace-nowrap">
                    31 de Octubre
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-12 lg:h-16 bg-[#1f1638] shrink-0"></div>

              {/* Dirección */}
              <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-0 sm:px-3 lg:px-4 max-w-full sm:max-w-[280px] lg:max-w-[260px] xl:max-w-[300px]">
                <MapPinIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9b66ff] sm:mb-2 shrink-0" />
                <div>
                  <div className="text-[#685c7f] text-[9px] font-bold tracking-widest uppercase mb-0.5 sm:mb-1">DIRECCIÓN</div>
                  <div className="text-[#d4cce6] text-[13px] sm:text-[13px] xl:text-[14px] font-medium leading-snug">
                    Teatro Complejo Cultural Universitario (CCU)
                  </div>
                </div>
              </div>

              <div className="hidden sm:block w-[1px] h-12 lg:h-16 bg-[#1f1638] shrink-0"></div>

              {/* País / Ciudad */}
              <div className="flex items-center sm:flex-col sm:items-start gap-3 sm:gap-0 sm:px-3 lg:px-4 shrink-0">
                <FlagIcon className="w-6 h-6 sm:w-7 sm:h-7 text-[#9b66ff] sm:mb-2 shrink-0" />
                <div>
                  <div className="text-[#685c7f] text-[9px] font-bold tracking-widest uppercase mb-0.5 sm:mb-1">PAÍS / CIUDAD</div>
                  <div className="text-[#d4cce6] text-[15px] sm:text-[15px] font-medium flex items-center gap-2 whitespace-nowrap">
                    Puebla, México <img src="https://flagcdn.com/w20/mx.png" alt="🇲🇽" width="20" height="15" style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: Action Panel */}
            <div className="w-full lg:w-[250px] shrink-0 bg-[#140e2b] rounded-2xl p-5 sm:p-6 border border-[#21163f] flex flex-col items-center text-center">
              <div className="flex items-center gap-2 text-[#9b66ff] text-[9px] font-bold tracking-widest uppercase mb-2 sm:mb-3">
                <StarIcon className="w-3 h-3" /> BENEFICIOS EXCLUSIVOS
              </div>
              <p className="text-[#e2dcf2] text-sm mb-4 sm:mb-5 leading-relaxed">
                Obtén 2 meses gratis de <strong className="text-[#ca72ef] font-bold">Chatby</strong>
              </p>
              <a
                href="https://ecomnow.mx/#tickets"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer bg-gradient-to-r from-[#6938ef] to-[#8b5cf6] hover:from-[#5b21b6] hover:to-[#7c3aed] text-white font-medium py-3 px-4 rounded-xl w-full transition-all duration-300 text-sm mb-3 text-center inline-block"
              >
                Comprar entradas →
              </a>
              <div className="flex items-center gap-1.5 text-[#685c7f] text-[10px]">
                <ShieldCheckIcon className="w-3.5 h-3.5" /> Pago seguro y oficial
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventos;
