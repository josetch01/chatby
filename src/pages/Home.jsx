import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import mockup_wsp from "../assets/mockup-for-whatsApp 1.svg";
import hero_degradado from "../assets/hero degradado y logos.svg";
import dropi from "../assets/logos empresas/dropi.svg";
import triidy from "../assets/logos empresas/triidy.svg";
import rocketfy from "../assets/logos empresas/rocket.svg";
import shiipy from "../assets/logos empresas/shiipy.svg";
import mba from "../assets/logos empresas/mba.svg";
import hoko from "../assets/logos empresas/hoko.svg";
import persona_1 from "../assets/persona 1.svg";
import persona_2 from "../assets/persona 2.svg";
import persona_3 from "../assets/persona 3.svg";
import bot_plantilla_msn from "../assets/bot plantilla msg.svg";
import chatby_logo from "../assets/chatby loguito.svg";
import degradado_rosa from "../assets/degradado rosa.svg";
import mba_blanco from "../assets/logos empresas/mba blanco.png";
import triidy_blanco from "../assets/logos empresas/triidy logo blanco.svg";

import msn_logo from "../assets/logos integraciones/5.svg";
import ig_logo from "../assets/logos integraciones/10.svg";
import wsp_logo from "../assets/logos integraciones/16.svg";
import mensaje from "../assets/logos integraciones/20.svg";
import line_logo from "../assets/logos integraciones/23.svg";
import gpt from "../assets/logos integraciones/6.svg";
import deepseek from "../assets/logos integraciones/deppseek.svg";
import gemini from "../assets/logos integraciones/gemini.svg";

import mockup_ig from "../assets/mockup-for-instagram 1.svg";
import mockup_msn from "../assets/mockup-for-messenger 1.svg";
const Home = () => {
  // Inline SVG icons (reuse the same paths as desktop cards)
  const WhatsAppIcon = ({ className = "" }) => (
    <svg
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
    >
      <path
        fill="currentColor"
        d="M21.4316 5.52382C20.4002 4.48198 19.1717 3.65594 17.8177 3.09387C16.4637 2.53181 15.0114 2.24496 13.5454 2.25007C7.40289 2.25007 2.39664 7.25632 2.39664 13.3988C2.39664 15.3676 2.91414 17.2801 3.88164 18.9676L2.30664 24.7501L8.21289 23.1976C9.84414 24.0863 11.6779 24.5588 13.5454 24.5588C19.6879 24.5588 24.6941 19.5526 24.6941 13.4101C24.6941 10.4288 23.5354 7.62757 21.4316 5.52382ZM13.5454 22.6688C11.8804 22.6688 10.2491 22.2188 8.82039 21.3751L8.48289 21.1726L4.97289 22.0951L5.90664 18.6751L5.68164 18.3263C4.75661 16.8492 4.26542 15.1417 4.26414 13.3988C4.26414 8.29132 8.42664 4.12882 13.5341 4.12882C16.0091 4.12882 18.3379 5.09632 20.0816 6.85132C20.9451 7.71078 21.6293 8.73306 22.0947 9.85892C22.5601 10.9848 22.7974 12.1918 22.7929 13.4101C22.8154 18.5176 18.6529 22.6688 13.5454 22.6688ZM18.6304 15.7388C18.3491 15.6038 16.9766 14.9288 16.7291 14.8276C16.4704 14.7376 16.2904 14.6926 16.0991 14.9626C15.9079 15.2438 15.3791 15.8738 15.2216 16.0538C15.0641 16.2451 14.8954 16.2676 14.6141 16.1213C14.3329 15.9863 13.4329 15.6826 12.3754 14.7376C11.5429 13.9951 10.9916 13.0838 10.8229 12.8026C10.6654 12.5213 10.8004 12.3751 10.9466 12.2288C11.0704 12.1051 11.2279 11.9026 11.3629 11.7451C11.4979 11.5876 11.5541 11.4638 11.6441 11.2838C11.7341 11.0926 11.6891 10.9351 11.6216 10.8001C11.5541 10.6651 10.9916 9.29257 10.7666 8.73007C10.5416 8.19007 10.3054 8.25757 10.1366 8.24632H9.59664C9.40539 8.24632 9.11289 8.31382 8.85414 8.59507C8.60664 8.87632 7.88664 9.55132 7.88664 10.9238C7.88664 12.2963 8.88789 13.6238 9.02289 13.8038C9.15789 13.9951 10.9916 16.8076 13.7816 18.0113C14.4454 18.3038 14.9629 18.4726 15.3679 18.5963C16.0316 18.8101 16.6391 18.7763 17.1229 18.7088C17.6629 18.6301 18.7766 18.0338 19.0016 17.3813C19.2379 16.7288 19.2379 16.1776 19.1591 16.0538C19.0804 15.9301 18.9116 15.8738 18.6304 15.7388Z"
      ></path>
    </svg>
  );

  const InstagramIcon = ({ className = "" }) => (
    <svg
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
    >
      <path
        fill="currentColor"
        d="M8.96 2H19.04C22.88 2 26 5.12 26 8.96V19.04C26 20.8859 25.2667 22.6562 23.9615 23.9615C22.6562 25.2667 20.8859 26 19.04 26H8.96C5.12 26 2 22.88 2 19.04V8.96C2 7.11409 2.73328 5.34379 4.03854 4.03854C5.34379 2.73328 7.11409 2 8.96 2ZM8.72 4.4C7.57427 4.4 6.47546 4.85514 5.6653 5.6653C4.85514 6.47546 4.4 7.57427 4.4 8.72V19.28C4.4 21.668 6.332 23.6 8.72 23.6H19.28C20.4257 23.6 21.5245 23.1449 22.3347 22.3347C23.1449 21.5245 23.6 20.4257 23.6 19.28V8.72C23.6 6.332 21.668 4.4 19.28 4.4H8.72ZM20.3 6.2C20.6978 6.2 21.0794 6.35804 21.3607 6.63934C21.642 6.92064 21.8 7.30218 21.8 7.7C21.8 8.09783 21.642 8.47936 21.3607 8.76066C21.0794 9.04197 20.6978 9.2 20.3 9.2C19.9022 9.2 19.5206 9.04197 19.2393 8.76066C18.958 8.47936 18.8 8.09783 18.8 7.7C18.8 7.30218 18.958 6.92064 19.2393 6.63934C19.5206 6.35804 19.9022 6.2 20.3 6.2ZM14 8C15.5913 8 17.1174 8.63214 18.2426 9.75736C19.3679 10.8826 20 12.4087 20 14C20 15.5913 19.3679 17.1174 18.2426 18.2426C17.1174 19.3679 15.5913 20 14 20C12.4087 20 10.8826 19.3679 9.75736 18.2426C8.63214 17.1174 8 15.5913 8 14C8 12.4087 8.63214 10.8826 9.75736 9.75736C10.8826 8.63214 12.4087 8 14 8ZM14 10.4C13.0452 10.4 12.1295 10.7793 11.4544 11.4544C10.7793 12.1295 10.4 13.0452 10.4 14C10.4 14.9548 10.7793 15.8705 11.4544 16.5456C12.1295 17.2207 13.0452 17.6 14 17.6C14.9548 17.6 15.8705 17.2207 16.5456 16.5456C17.2207 15.8705 17.6 14.9548 17.6 14C17.6 13.0452 17.2207 12.1295 16.5456 11.4544C15.8705 10.7793 14.9548 10.4 14 10.4Z"
      ></path>
    </svg>
  );

  const MessengerIcon = ({ className = "" }) => (
    <svg
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-6 h-6 ${className}`}
    >
      <path
        fill="currentColor"
        d="M24 14C24 8.48 19.52 4 14 4C8.48 4 4 8.48 4 14C4 18.84 7.44 22.87 12 23.8V17H10V14H12V11.5C12 9.57 13.57 8 15.5 8H18V11H16C15.45 11 15 11.45 15 12V14H18V17H15V23.95C20.05 23.45 24 19.19 24 14Z"
      ></path>
    </svg>
  );

  const { darkMode, toggleDarkMode } = useTheme();

  // Removed carousel controls - now using CSS animation

  // Mobile mockup carousel state
  const [currentMockupIndex, setCurrentMockupIndex] = useState(0);

  // Desktop hero mockup state
  const [currentDesktopMockupIndex, setCurrentDesktopMockupIndex] = useState(0);

  const mockups = [
    { src: mockup_wsp, alt: "WhatsApp Business mockup" },
    { src: mockup_ig, alt: "Instagram Direct mockup" },
    { src: mockup_msn, alt: "Facebook Messenger mockup" },
  ];

  // Channel cards (same order as mockups) - inline SVG components
  const channelCards = [
    {
      lines: ["WhatsApp", "Business"],
      icon: <WhatsAppIcon className="fill-white" />,
    },
    {
      lines: ["Instagram", "Direct"],
      icon: <InstagramIcon className="fill-white" />,
    },
    {
      lines: ["Facebook", "Messenger"],
      icon: <MessengerIcon className="fill-white" />,
    },
  ];

  const nextMockup = () => {
    setCurrentMockupIndex((prev) => (prev + 1) % mockups.length);
  };

  const prevMockup = () => {
    setCurrentMockupIndex(
      (prev) => (prev - 1 + mockups.length) % mockups.length
    );
  };

  const logos_oscuro = [
    {
      src: dropi,
      alt: "dropi",
      size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    },
    {
      src: triidy_blanco,
      alt: "triidy",
      size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    },
    {
      src: rocketfy,
      alt: "rocketfy",
      size: "w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    },
    {
      src: shiipy,
      alt: "shiipy",
      size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    },
    {
      src: mba_blanco,
      alt: "mba",
      size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
    },
    {
      src: hoko,
      alt: "hoko",
      size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
    },
  ];
  const logos = [
    {
      src: dropi,
      alt: "dropi",
      size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    },
    {
      src: triidy,
      alt: "triidy",
      size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    },
    {
      src: rocketfy,
      alt: "rocketfy",
      size: "w-18 h-18 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    },
    {
      src: shiipy,
      alt: "shiipy",
      size: "w-16 h-16 sm:w-24 sm:h-24 lg:w-28 lg:h-28",
    },
    { src: mba, alt: "mba", size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24" },
    {
      src: hoko,
      alt: "hoko",
      size: "w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
    },
  ];

  // Removed scroll function - now using CSS animation

  // Auto-scroll functionality - Removed for CSS animation

  return (
    <div className="transition-colors duration-300">
      <style>{`
        @keyframes floatIcons {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          25% { transform: translateY(-3px) translateX(2px) scale(1.02); }
          50% { transform: translateY(-6px) translateX(0px) scale(1); }
          75% { transform: translateY(-3px) translateX(-2px) scale(1.02); }
        }
        @keyframes breatheBackground {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.02); opacity: 1; }
        }
        @keyframes slideInUp {
          0% { opacity: 0; transform: translateY(20px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes subtleGlow {
          0%, 100% { filter: drop-shadow(0 8px 20px rgba(0,0,0,0.15)) drop-shadow(0 0 15px rgba(241, 41, 161, 0.1)); }
          50% { filter: drop-shadow(0 12px 30px rgba(0,0,0,0.2)) drop-shadow(0 0 25px rgba(241, 41, 161, 0.2)); }
        }
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      {/* Hero Section */}
      <section className="relative  py-12 sm:py-16 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-[#2C011B] dark:text-[#F5F5F5] dark:bg-[#394B61] font-medium mb-4 text-sm sm:text-base rounded-2xl bg-[#FFE8F7] px-5 py-1 inline-block">
              Convierte mensajes en ventas
            </p>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 dark:text-white mb-6 leading-tight">
              Optimiza con IA y{" "}
              <span className="text-pink-600 dark:text-pink-400">
                automatiza
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline"> los chats de</span>
              <button
                onClick={toggleDarkMode}
                className="relative inline-flex items-center w-16 h-8 sm:w-20 sm:h-10 md:w-24 md:h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-300 mx-2 sm:mx-3 align-middle cursor-pointer "
                aria-label="Toggle dark mode"
              >
                <span
                  className={`absolute w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-white rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
                    darkMode
                      ? "translate-x-8 sm:translate-x-10 md:translate-x-12"
                      : "translate-x-1 sm:translate-x-1 md:translate-x-1"
                  }`}
                ></span>
              </button>
              <span className="relative">tu negocio</span>
            </h1>
            <p className="text-base sm:text-2xl text-[#2C011B] dark:text-[#CCCCCC] mb-8 max-w-3xl mx-auto ">
              Haz que la Inteligencia Artificial atienda consultas frecuentes, y
              dedica tu tiempo a lo que realmente importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <button
                className="border-2 border-pink-600 dark:border-[#FFE8F7] text-pink-600 dark:text-[#FFE8F7]  bg-transparent px-6 sm:px-8 py-2 rounded-full text-sm sm:text-lg font-medium transition-colors w-full sm:w-auto cursor-pointer hover:bg-[#F129A1] hover:text-white hover:border-transparent"
                onClick={() =>
                  (window.location.href =
                    "https://chatby.io/register?ref=WebTrial")
                }
              >
                Iniciar prueba gratis
              </button>
              <button
                className="bg-gradient-to-r from-[#F129A1] to-[#A83CC1]  text-white px-6 sm:px-8 py-2 rounded-full text-sm sm:text-lg font-medium transition-colors w-full sm:w-auto cursor-pointer hover:from-[#E01A96] hover:to-[#9A35B8]"
                onClick={() => (window.location.href = "https://chatby.io/")}
              >
                Asesoría gratuita
              </button>
            </div>
          </div>

          {/* Chat mockup - Desktop */}
          <div className="hidden md:flex justify-center px-4">
            <div className="relative flex justify-center items-center">
              <img
                src={hero_degradado}
                alt="hero degradado"
                style={{
                  animation:
                    "floatIcons 8s ease-in-out infinite, breatheBackground 4s ease-in-out infinite",
                  animationDelay: "0s, 1s",
                }}
                className="select-none pointer-events-none will-change-transform"
              />
              <img
                key={currentDesktopMockupIndex}
                src={mockups[currentDesktopMockupIndex].src}
                alt={mockups[currentDesktopMockupIndex].alt}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 h-1/2 w-1/2 will-change-transform rounded-xl shadow-2xl"
                style={{
                  animation:
                    "slideInUp 600ms ease-out, subtleGlow 3s ease-in-out infinite 1s",
                }}
              />
            </div>
          </div>

          {/* Chat mockup carousel - Mobile */}
          <div className="md:hidden flex justify-center px-3 sm:px-4 mt-6">
            <div className="relative w-full max-w-[360px] xs:max-w-[400px] sm:max-w-sm">
              {/* Carousel container */}
              <div className="relative flex justify-center items-center">
                <img
                  src={degradado_rosa}
                  alt="hero degradado"
                  style={{
                    animation:
                      "floatIcons 7s ease-in-out infinite, breatheBackground 5s ease-in-out infinite",
                    animationDelay: "0.5s, 2s",
                  }}
                  className="select-none pointer-events-none will-change-transform"
                />
                <img
                  key={currentMockupIndex}
                  src={mockups[currentMockupIndex].src}
                  alt={mockups[currentMockupIndex].alt}
                  className="absolute max-w-[72%] sm:max-w-[68%] transition-all duration-500 will-change-transform rounded-xl shadow-2xl"
                  style={{
                    animation:
                      "slideInUp 600ms ease-out, subtleGlow 3s ease-in-out infinite 1.5s",
                  }}
                />
              </div>

              {/* Navigation buttons */}
              <button
                onClick={prevMockup}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
                aria-label="Previous mockup"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextMockup}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-lg flex items-center justify-center hover:bg-white dark:hover:bg-gray-700 transition-colors z-10"
                aria-label="Next mockup"
              >
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="flex justify-center mt-4 space-x-2">
                {mockups.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMockupIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentMockupIndex
                        ? "bg-pink-600 dark:bg-pink-400"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Dynamic channel card matching current mockup */}
              <div className="mt-4 flex justify-center">
                <div className="flex items-center gap-3 w-full max-w-[320px] sm:max-w-[360px] px-5 py-4 rounded-xl text-white bg-gradient-to-r from-[#F129A1] to-[#A83CC1] shadow-[0_10px_22px_rgba(86,133,255,0.18)]">
                  <span className="w-6 h-6 flex items-center justify-center">
                    {channelCards[currentMockupIndex].icon}
                  </span>
                  <span className="text-[16px] font-medium leading-tight text-left">
                    {channelCards[currentMockupIndex].lines[0]}
                    <br />
                    {channelCards[currentMockupIndex].lines[1]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center hidden md:block">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 lg:gap-4 mb-8">
            {/* WhatsApp Business (seleccionado) */}
            <div
              onClick={() => setCurrentDesktopMockupIndex(0)}
              role="button"
              tabIndex={0}
              className="group flex items-center gap-4 w-[176px] h-[72px] px-5 rounded-lg bg-white dark:bg-[#1E293B] text-[#A83CC1] dark:text-[#F8FAFC] border border-[#E6E9FF] dark:border-[#475569] shadow-[0_10px_22px_rgba(86,133,255,0.18)] dark:shadow-[0_10px_22px_rgba(241,41,161,0.15)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F129A1] hover:to-[#A83CC1] hover:text-white hover:border-transparent cursor-pointer"
              style={{ boxShadow: "0px 2px 2px 0px #156CFF4D" }}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#A83CC1] group-hover:fill-white transition-colors"
              >
                <path d="M21.4316 5.52382C20.4002 4.48198 19.1717 3.65594 17.8177 3.09387C16.4637 2.53181 15.0114 2.24496 13.5454 2.25007C7.40289 2.25007 2.39664 7.25632 2.39664 13.3988C2.39664 15.3676 2.91414 17.2801 3.88164 18.9676L2.30664 24.7501L8.21289 23.1976C9.84414 24.0863 11.6779 24.5588 13.5454 24.5588C19.6879 24.5588 24.6941 19.5526 24.6941 13.4101C24.6941 10.4288 23.5354 7.62757 21.4316 5.52382ZM13.5454 22.6688C11.8804 22.6688 10.2491 22.2188 8.82039 21.3751L8.48289 21.1726L4.97289 22.0951L5.90664 18.6751L5.68164 18.3263C4.75661 16.8492 4.26542 15.1417 4.26414 13.3988C4.26414 8.29132 8.42664 4.12882 13.5341 4.12882C16.0091 4.12882 18.3379 5.09632 20.0816 6.85132C20.9451 7.71078 21.6293 8.73306 22.0947 9.85892C22.5601 10.9848 22.7974 12.1918 22.7929 13.4101C22.8154 18.5176 18.6529 22.6688 13.5454 22.6688ZM18.6304 15.7388C18.3491 15.6038 16.9766 14.9288 16.7291 14.8276C16.4704 14.7376 16.2904 14.6926 16.0991 14.9626C15.9079 15.2438 15.3791 15.8738 15.2216 16.0538C15.0641 16.2451 14.8954 16.2676 14.6141 16.1213C14.3329 15.9863 13.4329 15.6826 12.3754 14.7376C11.5429 13.9951 10.9916 13.0838 10.8229 12.8026C10.6654 12.5213 10.8004 12.3751 10.9466 12.2288C11.0704 12.1051 11.2279 11.9026 11.3629 11.7451C11.4979 11.5876 11.5541 11.4638 11.6441 11.2838C11.7341 11.0926 11.6891 10.9351 11.6216 10.8001C11.5541 10.6651 10.9916 9.29257 10.7666 8.73007C10.5416 8.19007 10.3054 8.25757 10.1366 8.24632H9.59664C9.40539 8.24632 9.11289 8.31382 8.85414 8.59507C8.60664 8.87632 7.88664 9.55132 7.88664 10.9238C7.88664 12.2963 8.88789 13.6238 9.02289 13.8038C9.15789 13.9951 10.9916 16.8076 13.7816 18.0113C14.4454 18.3038 14.9629 18.4726 15.3679 18.5963C16.0316 18.8101 16.6391 18.7763 17.1229 18.7088C17.6629 18.6301 18.7766 18.0338 19.0016 17.3813C19.2379 16.7288 19.2379 16.1776 19.1591 16.0538C19.0804 15.9301 18.9116 15.8738 18.6304 15.7388Z"></path>
              </svg>
              <span className="text-[16px] font-medium leading-tight text-left">
                WhatsApp
                <br />
                Business
              </span>
            </div>

            {/* Instagram Direct */}
            <div
              onClick={() => setCurrentDesktopMockupIndex(1)}
              role="button"
              tabIndex={0}
              className="group flex items-center gap-4 w-[176px] h-[72px] px-5 rounded-lg bg-white dark:bg-[#1E293B] text-[#A83CC1] dark:text-[#F8FAFC] border border-[#E6E9FF] dark:border-[#475569] shadow-[0_10px_22px_rgba(86,133,255,0.18)] dark:shadow-[0_10px_22px_rgba(241,41,161,0.15)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F129A1] hover:to-[#A83CC1] hover:text-white hover:border-transparent cursor-pointer"
              style={{ boxShadow: "0px 2px 2px 0px #156CFF4D" }}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#A83CC1] group-hover:fill-white transition-colors"
              >
                <path d="M8.96 2H19.04C22.88 2 26 5.12 26 8.96V19.04C26 20.8859 25.2667 22.6562 23.9615 23.9615C22.6562 25.2667 20.8859 26 19.04 26H8.96C5.12 26 2 22.88 2 19.04V8.96C2 7.11409 2.73328 5.34379 4.03854 4.03854C5.34379 2.73328 7.11409 2 8.96 2ZM8.72 4.4C7.57427 4.4 6.47546 4.85514 5.6653 5.6653C4.85514 6.47546 4.4 7.57427 4.4 8.72V19.28C4.4 21.668 6.332 23.6 8.72 23.6H19.28C20.4257 23.6 21.5245 23.1449 22.3347 22.3347C23.1449 21.5245 23.6 20.4257 23.6 19.28V8.72C23.6 6.332 21.668 4.4 19.28 4.4H8.72ZM20.3 6.2C20.6978 6.2 21.0794 6.35804 21.3607 6.63934C21.642 6.92064 21.8 7.30218 21.8 7.7C21.8 8.09783 21.642 8.47936 21.3607 8.76066C21.0794 9.04197 20.6978 9.2 20.3 9.2C19.9022 9.2 19.5206 9.04197 19.2393 8.76066C18.958 8.47936 18.8 8.09783 18.8 7.7C18.8 7.30218 18.958 6.92064 19.2393 6.63934C19.5206 6.35804 19.9022 6.2 20.3 6.2ZM14 8C15.5913 8 17.1174 8.63214 18.2426 9.75736C19.3679 10.8826 20 12.4087 20 14C20 15.5913 19.3679 17.1174 18.2426 18.2426C17.1174 19.3679 15.5913 20 14 20C12.4087 20 10.8826 19.3679 9.75736 18.2426C8.63214 17.1174 8 15.5913 8 14C8 12.4087 8.63214 10.8826 9.75736 9.75736C10.8826 8.63214 12.4087 8 14 8ZM14 10.4C13.0452 10.4 12.1295 10.7793 11.4544 11.4544C10.7793 12.1295 10.4 13.0452 10.4 14C10.4 14.9548 10.7793 15.8705 11.4544 16.5456C12.1295 17.2207 13.0452 17.6 14 17.6C14.9548 17.6 15.8705 17.2207 16.5456 16.5456C17.2207 15.8705 17.6 14.9548 17.6 14C17.6 13.0452 17.2207 12.1295 16.5456 11.4544C15.8705 10.7793 14.9548 10.4 14 10.4Z"></path>
              </svg>
              <span className="text-[16px] font-medium leading-tight text-left">
                Instagram
                <br />
                Direct
              </span>
            </div>

            {/* Facebook Messenger */}
            <div
              onClick={() => setCurrentDesktopMockupIndex(2)}
              role="button"
              tabIndex={0}
              className="group flex items-center gap-4 w-[176px] h-[72px] px-5 rounded-lg bg-white dark:bg-[#1E293B] text-[#A83CC1] dark:text-[#F8FAFC] border border-[#E6E9FF] dark:border-[#475569] shadow-[0_10px_22px_rgba(86,133,255,0.18)] dark:shadow-[0_10px_22px_rgba(241,41,161,0.15)] transition-all duration-300 hover:bg-gradient-to-r hover:from-[#F129A1] hover:to-[#A83CC1] hover:text-white hover:border-transparent cursor-pointer"
              style={{ boxShadow: "0px 2px 2px 0px #156CFF4D" }}
            >
              <svg
                width="27"
                height="27"
                viewBox="0 0 27 27"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-[#A83CC1] group-hover:fill-white transition-colors duration-300"
              >
                <path d="M24 14C24 8.48 19.52 4 14 4C8.48 4 4 8.48 4 14C4 18.84 7.44 22.87 12 23.8V17H10V14H12V11.5C12 9.57 13.57 8 15.5 8H18V11H16C15.45 11 15 11.45 15 12V14H18V17H15V23.95C20.05 23.45 24 19.19 24 14Z"></path>
              </svg>
              <span className="text-[16px] font-medium leading-tight text-left">
                Facebook
                <br />
                Messenger
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Native Integrations (Carousel) */}
      <section className="border-t border-[#FFE8F7] border-b bg-white dark:bg-[#122030] py-8 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-black dark:text-white  font-medium text-xs sm:text-lg">
            En alianza con los expertos en E-commerce Revolution
          </p>

          <div className="relative overflow-hidden">
            {/* Left fade - Enhanced */}
            <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-32 lg:w-40 bg-gradient-to-r from-white via-white/80 dark:from-[#122030] dark:via-[#122030]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Right fade - Enhanced */}
            <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-32 lg:w-40 bg-gradient-to-l from-white via-white/80 dark:from-[#122030] dark:via-[#122030]/80 to-transparent z-10 pointer-events-none"></div>

            {/* Infinite scroll container */}
            <div className="flex items-center overflow-hidden">
              <div
                className="flex items-center gap-4 sm:gap-6 lg:gap-8 animate-[infiniteScroll_20s_linear_infinite]"
                style={{ width: "calc(200% + 2rem)" }}
              >
                {/* First set of logos */}
                {darkMode
                  ? logos.map((logo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center flex-shrink-0 p-2 sm:p-3"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={`${logo.size.replace(
                            "w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
                            "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                          )} object-contain transition-all duration-300 hover:scale-110 `}
                        />
                      </div>
                    ))
                  : logos_oscuro.map((logo, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center flex-shrink-0 p-2 sm:p-3"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={`${logo.size.replace(
                            "w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
                            "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                          )} object-contain transition-all duration-300 hover:scale-110`}
                        />
                      </div>
                    ))}
                {darkMode
                  ? logos.map((logo, index) => (
                      <div
                        key={`duplicate-${index}`}
                        className="flex items-center justify-center flex-shrink-0 p-2 sm:p-3"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={`${logo.size.replace(
                            "w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
                            "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                          )} object-contain transition-all duration-300 hover:scale-110 `}
                        />
                      </div>
                    ))
                  : logos_oscuro.map((logo, index) => (
                      <div
                        key={`duplicate-${index}`}
                        className="flex items-center justify-center flex-shrink-0 p-2 sm:p-3"
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt}
                          className={`${logo.size.replace(
                            "w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24",
                            "w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20"
                          )} object-contain transition-all duration-300 hover:scale-110 `}
                        />
                      </div>
                    ))}
                {/* Second set of logos for seamless loop */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="bg-purple-100 dark:bg-[#2C1A29] text-purple-black dark:text-[#CCCCCC] text-sm font-normal px-4 py-2 rounded-full inline-block mb-6">
              Beneficios de la IA
            </div>
            <h2 className="text-xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Conoce cómo la Inteligencia Artificial{" "}
              <span className="text-[#F129A1] dark:text-[#F129A1]">
                simplifica y potencia
              </span>{" "}
              la atención al cliente
            </h2>
          </div>

          {/* Features Stack */}
          <div className="space-y-8 lg:space-y-12">
            {/* Feature 1 - Bot Plantillas */}
            <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-8 lg:p-12 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]  backdrop-blur-xs">
              <img
                src={bot_plantilla_msn}
                alt="bot plantilla msn"
                className="absolute  transform -translate-x-12 sm:-translate-x-40 lg:-translate-x-40  top-30 md:top-10 sm:top-0 w-48 lg:w-80 z-50 md:-translate-x-0"
              />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Image */}
                {/* Bot plantilla mensaje - posicionado en la parte superior */}
                <div
                  className="bg-purple-100 sm:hidden dark:bg-[#394B61] text-purple-black dark:text-[#CCCCCC] text-sm font-normal px-4 mx-auto
                 py-2 rounded-full inline-block mb-6 text-center w-1/2 "
                >
                  IA sin Código
                </div>
                <div className="relative">
                  <div className="h-80 lg:h-96 rounded-2xl flex items-center justify-center relative overflow-hidden bg-b">
                    {/* Imagen principal de persona */}
                    <img
                      src={persona_1}
                      alt="mockup wsp"
                      className="w-full h-auto max-w-full max-h-full object-contain opacity-90"
                    />

                    {/* Logo de Chatby - posicionado en la esquina superior izquierda */}
                    <img
                      src={chatby_logo}
                      alt="chatby logo"
                      className="absolute top-40 left-4 w-16 h-16 lg:w-20 lg:h-20 z-10 rounded-lg p-2 "
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col sm:inline-block">
                  <div className="bg-purple-100 hidden dark:bg-[#394B61] text-purple-black dark:text-[#CCCCCC] text-sm font-normal px-4 py-2 rounded-full sm:inline-block mb-6">
                    IA sin Código
                  </div>

                  <h3 className="text-xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-start">
                    <span className="text-[#F129A1] dark:text-[#F129A1]">
                      Cree su primer chatbot con IA
                    </span>{" "}
                    en minutos, sin necesidad de codificar
                  </h3>

                  <p className="text-black dark:text-gray-300 mb-8 text-base lg:text-lg leading-relaxed text-start font-medium">
                    Optimiza la atención al cliente desde una plataforma
                    todo-en-uno que le permite planificar, automatizar y
                    analizar cada interacción fácilmente.
                  </p>

                  <button
                    className="bg-gradient-to-r from-[#F129A1] to-[#A83CC1] hover:from-[#E01A96] hover:to-[#9A35B8] text-white px-8 py-2 text-xl rounded-full font-normal transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "https://chatby.io/register?ref=WebCTA1")
                    }
                  >
                    Comenzar Ahora
                  </button>
                </div>
              </div>
            </div>

            {/* Feature 2 - Presencia 24/7 */}
            <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-8 lg:p-12 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)] ">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div className="flex flex-col sm:inline-block text-start">
                  <div className="bg-purple-100 w-fit mx-auto lg:ml-0 lg:mr-auto dark:bg-[#394B61] text-black dark:text-[#CCCCCC] text-sm font-medium px-4 py-2 rounded-full inline-block mb-6">
                    Presencia 24/7
                  </div>

                  <h3 className="text-xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    <span className="text-pink-600 dark:text-pink-400">
                      Conecte con sus clientes
                    </span>{" "}
                    en más de 7 canales desde una sola plataforma con IA
                  </h3>

                  <p className="text-black dark:text-gray-300 mb-8 text-base lg:text-lg leading-relaxed  font-medium text-start">
                    Centralice y automatice conversaciones en WhatsApp,
                    Instagram, Facebook y más, mientras la Inteligencia
                    Artificial le ayuda a planificar, interactuar y analizar
                    cada paso de su proceso comercial.
                  </p>

                  <button
                    className="bg-gradient-to-r from-[#F129A1] to-[#A83CC1] hover:from-[#E01A96] hover:to-[#9A35B8] text-white px-8 py-2 text-xl rounded-full font-normal transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "https://chatby.io/register?ref=WebCTA1")
                    }
                  >
                    Comenzar Ahora
                  </button>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="h-80 lg:h-96 rounded-2xl flex items-center justify-center relative dark:bg-transparent">
                    <img
                      src={persona_2}
                      alt="mockup wsp"
                      className="w-full h-auto max-w-full max-h-full object-contain"
                    />

                    {/* Social Media Icons positioned around the image */}
                    {/* WhatsApp - Top Left */}
                    <div className="absolute top-8 left-8 md:left-40 lg:top-12 lg:left-20 w-12 h-12 lg:w-16 lg:h-16 bg-white dark:bg-transparent rounded-full shadow-lg flex items-center justify-center z-10">
                      <img
                        src={wsp_logo}
                        alt="WhatsApp logo"
                        className="w-8 h-8 lg:w-10 lg:h-10"
                      />
                    </div>

                    {/* Email - Top Center */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 -translate-y-10 lg:-translate-y-14 w-12 h-12 lg:w-16 lg:h-16 dark:bg-transparent bg-white rounded-full shadow-lg flex items-center justify-center z-10">
                      <img
                        src={mensaje}
                        alt="Email logo"
                        className="w-8 h-8 lg:w-10 lg:h-10"
                      />
                    </div>

                    {/* Line - Top Right */}
                    <div className="absolute top-8 right-8 md:right-40 lg:top-12 lg:right-15 w-12 h-12 lg:w-16 lg:h-16 bg-white rounded-full dark:bg-transparent shadow-lg flex items-center justify-center z-10">
                      <img
                        src={line_logo}
                        alt="Line logo"
                        className="w-8 h-8 lg:w-10 lg:h-10"
                      />
                    </div>

                    {/* Messenger - Middle Left */}
                    <div className="absolute top-1/2 left-4 md:left-30 transform -translate-y-1/2 lg:left-10 w-12 h-12 lg:w-16 lg:h-16 bg-white dark:bg-transparent rounded-full shadow-lg flex items-center justify-center z-10">
                      <img
                        src={msn_logo}
                        alt="Messenger logo"
                        className="w-8 h-8 lg:w-10 lg:h-10 "
                      />
                    </div>

                    {/* Instagram - Middle Right */}
                    <div className="absolute top-1/2 right-4 md:right-30  transform -translate-y-1/2 lg:right-8 w-12 h-12 lg:w-16 lg:h-16 bg-white dark:bg-transparent rounded-full shadow-lg flex items-center justify-center z-10">
                      <img
                        src={ig_logo}
                        alt="Instagram logo"
                        className="w-8 h-8 lg:w-10 lg:h-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Automatización 24/7 */}
            <div className="bg-white dark:bg-[#0F172A] rounded-3xl p-8 lg:p-12 shadow-lg dark:shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div className="flex flex-col sm:inline-block">
                  <div className="bg-purple-100 dark:bg-[#394B61] text-black w-fit mx-auto lg:ml-0 lg:mr-auto dark:text-[#CCCCCC] text-sm font-medium px-4 py-2 rounded-full inline-block mb-6">
                    Automatización 24/7
                  </div>

                  <h3 className="text-xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Potencia tu chatbot con{" "}
                    <span className="text-pink-600 dark:text-pink-400">
                      Inteligencia Artificial avanzada
                    </span>
                  </h3>

                  <p className="text-black font-medium dark:text-gray-300 mb-8 text-base lg:text-lg leading-relaxed text-justify">
                    Integra ChatGPT y Dialogflow para atraer visitantes y
                    responder consultas frecuentes al instante, las 24 horas del
                    día, sin esfuerzo.
                  </p>

                  <button
                    className="hidden sm:inline-block bg-gradient-to-r from-[#F129A1] to-[#A83CC1] hover:from-[#E01A96] hover:to-[#9A35B8] text-white px-8 py-2 text-xl rounded-full font-normal transition-all duration-300 transform hover:scale-105 cursor-pointer"
                    onClick={() =>
                      (window.location.href =
                        "https://chatby.io/register?ref=WebCTA1")
                    }
                  >
                    Comenzar Ahora
                  </button>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="h-80 lg:h-96 rounded-2xl flex items-center justify-center ">
                    <img
                      src={persona_3}
                      alt="mockup wsp"
                      className="w-full h-auto max-w-full max-h-full"
                    />
                  </div>
                  {/* WhatsApp icon */}
                  <div className="absolute top-4 right-8 lg:right-40 md:right-50 sm:w-20 sm:h-20 w-15 h-15 md:h-15 md:w-15  bg-white dark:bg-transparent rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src={deepseek}
                      alt="Deepseek logo"
                      className="w-full h-full "
                    />
                  </div>
                  {/* Decorative elements */}
                  <div className="absolute bottom-20 left-0 lg:left-20 md:left-40 sm:w-20 sm:h-20 w-15 h-15 md:h-15 md:w-15 bg-white dark:bg-transparent rounded-full shadow-lg">
                    <img
                      src={gemini}
                      alt="Gemini logo"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="absolute bottom-12 right-5 lg:right-30 md:right-50   sm:w-20 sm:h-20 w-15 h-15 md:h-15 md:w-15 bg-white dark:bg-transparent rounded-full shadow-lg">
                    <img
                      src={gpt}
                      alt="gpt logo"
                      className="w-full h-full filter brightness-0 saturate-100 dark:invert"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
