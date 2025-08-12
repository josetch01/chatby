import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";

import { useTheme } from "../context/ThemeContext";

import appstore from "../assets/appstore.png";
import dialog_parter from "../assets/dialog_parter.png";
import Meta from "../assets/Meta-Badge.png";
import gplay from "../assets/gplay.png";
import chatby from "../assets/chatby loguito.svg";
import mail_google from "../assets/logos integraciones/1.svg";
import spinner from "../assets/logos integraciones/2.svg";
import boton from "../assets/logos integraciones/3.svg";
import msn from "../assets/logos integraciones/5.svg";
import gpt from "../assets/logos integraciones/6.svg";
import exsheet from "../assets/logos integraciones/8.svg";
import bag from "../assets/logos integraciones/12.svg";
import cuadricula from "../assets/cuadricula fondo.svg";
  import wsp from "../assets/logos integraciones/16.svg";
const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

  // Estado para la animación de iconos
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  // Array de iconos en orden
  const icons = [
    { src: bag, alt: "bag" },
    { src: exsheet, alt: "exsheet" },
    { src: msn, alt: "msn" },
    // { src: gpt, alt: "gpt", isCenter: true },
    { src: mail_google, alt: "mail_google" },
    { src: boton, alt: "boton" },
    { src: spinner, alt: "spinner" },
    { src: wsp, alt: "msn" },
   ];

  // Efecto para rotar los iconos cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [icons.length]);

  // Función para obtener el icono en una posición específica
  const getIconAtPosition = (position) => {
    const index = (currentIconIndex + position) % icons.length;
    return icons[index];
  };

  // Navegación activa
  const isActive = (path) => location.pathname === path;

  // Toggle menú móvil
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/calculadora", label: "Calculadora" },
    { to: "/planes", label: "Planes" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-[#122030] ">
      {/* Background grid for all pages except footer */}
      <div className="fixed inset-0 opacity-30 dark:opacity-20 pointer-events-none z-0">
        <img
          src={cuadricula}
          alt=""
          className="w-full h-full object-cover object-center opacity-20 dark:opacity-10"
        />
      </div>

      {/* Header */}
      <header className="relative bg-transparent   ">
        <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center mt-3">
              <Link
                to="/"
                className="flex items-center space-x-2  "
                onClick={closeMobileMenu}
              >
                <svg width="155" height="48" viewBox="0 0 155 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_1_105)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.5537 5.82437C11.4991 5.82437 9.52847 6.64183 8.07603 8.09792C6.62358 9.55402 5.80613 11.5283 5.80613 13.5902V16.8053C8.06508 15.2288 10.762 14.3675 13.5501 14.3675H22.845V5.82437H13.5501H13.5537ZM0.00729872 28.3482C0.105831 31.8114 1.52178 35.1141 3.9705 37.5701C6.5141 40.121 9.9591 41.5516 13.5537 41.5516H21.3706V35.7272H13.5537C11.4991 35.7272 9.52847 34.9098 8.07603 33.4537C6.62358 31.9976 5.80613 30.0233 5.80613 27.9614C5.80613 25.8995 6.62358 23.9252 8.07603 22.4691C9.52847 21.013 11.4991 20.1955 13.5537 20.1955H28.6584V0H13.5537C9.9591 0 6.51045 1.43055 3.9705 3.98145C1.4269 6.5287 0 9.98829 0 13.5902V28.3482H0.00729872Z" fill="url(#paint0_linear_1_105)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M30.8626 42.2742C32.9172 42.2742 34.8879 41.4713 36.3403 40.0371C37.7927 38.6065 38.6102 36.6651 38.6102 34.6397V31.4794C36.3549 33.0267 33.6544 33.8733 30.8663 33.8733H21.5714V42.2705H30.8663L30.8626 42.2742ZM44.4127 20.1371C44.3141 16.7323 42.8982 13.488 40.4495 11.0721C37.9095 8.56869 34.4609 7.16003 30.8663 7.16003H23.0493V12.8859H30.8663C32.9209 12.8859 34.8915 13.6887 36.344 15.1229C37.7964 16.5535 38.6139 18.4949 38.6139 20.5203C38.6139 22.5457 37.7964 24.4872 36.344 25.9177C34.8915 27.3483 32.9209 28.1548 30.8663 28.1548H15.7616V48H30.8663C34.4609 48 37.9095 46.5913 40.4495 44.0879C42.9931 41.5844 44.42 38.1869 44.42 34.6433V20.1408H44.4163L44.4127 20.1371Z" fill="url(#paint1_linear_1_105)"></path></g><path d="M67.3959 31.1627C64.5858 31.1627 62.1959 30.2435 60.2787 28.4051C58.3615 26.5405 57.416 24.1506 57.416 21.2354C57.416 18.2939 58.3877 15.8777 60.3312 13.9868C62.3009 12.0696 64.6646 11.1242 67.4484 11.1242C70.9414 11.1242 74.0929 12.7525 75.8 15.1949L73.3576 17.5323C71.7818 15.5626 69.8646 14.5909 67.606 14.5909C65.7939 14.5909 64.2444 15.2212 62.9837 16.4818C61.7494 17.7424 61.1191 19.3182 61.1191 21.2354C61.1191 23.1 61.7231 24.6496 62.9575 25.8839C64.1918 27.1183 65.7414 27.7223 67.5798 27.7223C69.9697 27.7223 71.9131 26.7506 73.4364 24.7809L75.9313 27.0395C74.1192 29.4819 70.9677 31.1627 67.3959 31.1627Z" fill="#F129A1"></path><path d="M81.6193 30.8739H78.2051V10.9141H81.5405V18.4515C82.3547 17.1646 84.0355 16.2454 86.0577 16.2454C87.6073 16.2454 88.8941 16.7707 89.9709 17.7949C91.0477 18.8192 91.5992 20.2637 91.5992 22.1808V30.8739H88.185V23.1C88.185 20.7101 86.9507 19.3707 85.0598 19.3707C83.0375 19.3707 81.6193 20.9202 81.6193 23.1526V30.8739Z" fill="#F129A1"></path><path d="M105.853 18.4252V16.6131H109.11V30.8739H105.853V29.1142C104.619 30.5062 103.069 31.2153 101.205 31.2153C99.1562 31.2153 97.4753 30.5062 96.1359 29.0617C94.7965 27.6173 94.1399 25.8051 94.1399 23.6778C94.1399 21.5505 94.7965 19.7647 96.1359 18.3727C97.4753 16.9808 99.1824 16.2717 101.205 16.2717C103.017 16.2717 104.566 16.9808 105.853 18.4252ZM105.932 23.7304C105.932 22.5223 105.538 21.498 104.75 20.6576C103.962 19.8172 102.964 19.397 101.73 19.397C100.496 19.397 99.4976 19.8172 98.7097 20.6576C97.9481 21.498 97.5541 22.5223 97.5541 23.7304C97.5541 24.9647 97.9481 25.989 98.7097 26.8294C99.4976 27.6698 100.496 28.09 101.73 28.09C102.964 28.09 103.962 27.6698 104.75 26.8294C105.538 25.989 105.932 24.9647 105.932 23.7304Z" fill="#F129A1"></path><path d="M121.606 27.3546L122.683 30.0334C121.554 30.8213 120.162 31.2153 118.56 31.2153C115.33 31.2153 113.675 29.2981 113.675 25.6475V19.502H111.311V16.6131H113.728V11.5706H117.115V16.6131H121.895V19.502H117.115V25.5162C117.115 27.2233 117.798 28.09 119.19 28.09C119.978 28.09 120.792 27.8536 121.606 27.3546Z" fill="#F129A1"></path><path d="M132.456 16.2717C134.479 16.2717 136.159 16.9808 137.499 18.4252C138.864 19.8697 139.547 21.6293 139.547 23.7566C139.547 25.8839 138.864 27.6435 137.499 29.088C136.159 30.5062 134.452 31.2153 132.43 31.2153C130.592 31.2153 129.068 30.4799 127.86 28.9829V30.8739H124.499V10.9141H127.913V18.4515C129.121 17.0071 130.644 16.2717 132.456 16.2717ZM136.054 23.7304C136.054 22.5223 135.66 21.498 134.899 20.6839C134.137 19.8434 133.165 19.4232 131.931 19.4232C130.697 19.4232 129.699 19.8434 128.937 20.6839C128.175 21.498 127.781 22.5223 127.781 23.7304C127.781 24.9647 128.175 25.989 128.937 26.8294C129.699 27.6435 130.697 28.0637 131.931 28.0637C133.165 28.0637 134.137 27.6435 134.899 26.8294C135.66 25.989 136.054 24.9647 136.054 23.7304Z" fill="#F129A1"></path><path d="M147.883 26.2516L151.271 16.6131H155.001L149.223 31.7931C147.857 35.286 146.124 36.9406 143.419 36.9406C142.342 36.9406 141.449 36.7042 140.792 36.2577L141.344 33.3688C142.001 33.684 142.605 33.8416 143.156 33.8416C144.285 33.8416 145.231 33.0799 145.94 31.5304L146.281 30.7425L140.057 16.6131H144.023L147.883 26.2516Z" fill="#F129A1"></path><defs><linearGradient id="paint0_linear_1_105" x1="17.9402" y1="20.3744" x2="30.359" y2="32.5158" gradientUnits="userSpaceOnUse"><stop stop-color="#F129A1"></stop><stop offset="0.76" stop-color="#F129A1" stop-opacity="0"></stop><stop offset="1" stop-color="#F129A1" stop-opacity="0"></stop></linearGradient><linearGradient id="paint1_linear_1_105" x1="26.5053" y1="27.9468" x2="14.2982" y2="15.8017" gradientUnits="userSpaceOnUse"><stop stop-color="#F129A1"></stop><stop offset="0.76" stop-color="#F129A1" stop-opacity="0"></stop><stop offset="1" stop-color="#F129A1" stop-opacity="0"></stop></linearGradient><clipPath id="clip0_1_105"><rect width="44.4163" height="48" fill="white"></rect></clipPath></defs></svg>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20"
                      : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Auth buttons and Dark mode toggle */}
            <div className="hidden md:flex items-center space-x-3">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gradient-to-r from-[#F129A1] to-[#A83CC1] hover:from-[#D91C88] hover:to-[#8A2BB5] text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>

              <button
                className="text-pink-600 dark:text-[#F5F5F5] px-4 py-2 rounded-2xl text-sm font-normal border-2 border-[#F129A1] dark:border-[#F5F5F5] transition-colors cursor-pointer hover:bg-[#F129A1] hover:text-white hover:border-transparent"
                onClick={() =>
                  (window.location.href = "https://app.chatby.io/login")
                }
              >
                Iniciar sesión
              </button>

              <button
                className="bg-gradient-to-r from-[#F129A1] to-[#A83CC1] hover:from-[#D91C88] hover:to-[#8A2BB5] text-white px-4 py-2 rounded-2xl text-sm font-normal cursor-pointer transition-colors"
                onClick={() =>
                  (window.location.href = "https://chatby.io/register?ref=Web")
                }
              >
                Regístrame
              </button>
            </div>

            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gradient-to-r from-[#F129A1] to-[#A83CC1] hover:from-[#D91C88] hover:to-[#8A2BB5] text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              >
                {darkMode ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
              </button>

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      isActive(link.to)
                        ? "text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-pink-900/20"
                        : "text-gray-500 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Auth buttons */}
                <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-700 space-y-2">
                  <button
                    className="w-full text-left px-3 py-2 text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 text-base font-medium border border-pink-200 dark:border-pink-700 hover:border-pink-300 dark:hover:border-pink-600 rounded-md transition-colors"
                    onClick={() =>
                      (window.location.href = "https://app.chatby.io/login")
                    }
                  >
                    Iniciar sesión
                  </button>
                  <button
                    className="w-full text-left px-3 py-2 bg-gradient-to-r from-[#F129A1] to-[#A83CC1] hover:from-[#D91C88] hover:to-[#8A2BB5] text-white text-base font-medium rounded-md transition-colors"
                    onClick={() =>
                      (window.location.href =
                        "https://chatby.io/register?ref=Web")
                    }
                  >
                    Regístrame
                  </button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-1 relative z-10">{children}</main>

      {/* Pre-footer section with integrations - Only show on Home page */}
      {location.pathname === "/" && (
        <section className="relative  overflow-hidden z-10">
          {/* Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
            <div className="text-center mb-8 flex flex-col justify-center items-center">
              <p className="text-sm text-gray-600 mb-2 bg-[#FFE8F7] rounded-2xl dark:bg-[#2C1A29] dark:text-[#CCCCCC] px-4 py-2 inline-block">
                Sin complicaciones con nuestras
              </p>
              <h2 className="text-lg sm:text-4xl font-semibold text-gray-900 dark:text-white mb-8">
                Integraciones nativas
              </h2>
            </div>
          </div>

          {/* Curved background with gradient and icons */}
          <div className="relative h-full">
            <svg
              className="w-full h-100 sm:h-96 md:h-[45rem] lg:h-[35rem]"
              viewBox="0 0 1200 320" // 1200 320
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#F129A1" />
                  <stop offset="100%" stopColor="#A83CC1" />
                </linearGradient>
              </defs>
              <path
                d="M0 0C409 63 734 72 1200 0L1200 320 0 320Z"
                fill="url(#gradient)"
              />
            </svg>

            {/* Integration icons positioned on the curve */}
            <div className="absolute top-0 left-0 w-full h-full flex items-start justify-center pt-16 sm:pt-20">
              <div className="relative w-full max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end">
                  {/* Position 0 - Left edge */}
                  <div className="transform -translate-y-23 sm:-translate-y-32 -translate-x-4 lg:-translate-y-28 sm:-translate-x-40 md:-translate-y-35 md:-translate-x-2">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center transition-all duration-1000 ease-in-out">
                      <img
                        src={getIconAtPosition(0).src}
                        alt={getIconAtPosition(0).alt}
                        className="w-full h-full rounded-full transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* Position 1 */}
                  <div className="transform -translate-y-17  sm:-translate-y-19 -translate-x-2 lg:-translate-y-25 sm:-translate-x-17 md:-translate-y-30 md:-translate-x-2">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center transition-all duration-1000 ease-in-out">
                      <img
                        src={getIconAtPosition(1).src}
                        alt={getIconAtPosition(1).alt}
                        className="w-full h-full rounded-full transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* Position 2 */}
                  <div className="transform -translate-y-12  sm:-translate-y-12 lg:-translate-y-20 md:-translate-y-15">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center transition-all duration-1000 ease-in-out">
                      <img
                        src={getIconAtPosition(2).src}
                        alt={getIconAtPosition(2).alt}
                        className="w-full h-full rounded-full transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* Position 3 - Center logo (largest) */}
                  <div className="w-15 h-15 sm:w-32 sm:h-32 md:w-26 md:h-26 rounded-full lg:w-32 lg:h-32 bg-white dark:bg-[#0D1D30] shadow-lg flex items-center justify-center transform -translate-y-8 md:-translate-y-5 sm:-translate-y-6 border-8 border-[#F129A1] transition-all duration-1000 ease-in-out">
                    <img
                      src={gpt}
                      alt={"gpt"}
                      className={`w-full h-full rounded-full transition-all duration-1000 ease-in-out dark:invert `}
                    />
                  </div>

                  {/* Position 4 */}
                  <div className="transform -translate-y-12 sm:-translate-y-12 lg:-translate-y-20 md:-translate-y-15">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center transition-all duration-1000 ease-in-out">
                      <img
                        src={getIconAtPosition(4).src}
                        alt={getIconAtPosition(4).alt}
                        className="w-full h-full rounded-full transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* Position 5 */}
                  <div className="transform -translate-y-17 sm:-translate-y-19 translate-x-2 lg:-translate-y-25 sm:translate-x-17 md:-translate-y-30 md:-translate-x-2">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30]  p-1 sm:p-2 flex items-center justify-center transition-all duration-1000 ease-in-out">
                      <img
                        src={getIconAtPosition(5).src}
                        alt={getIconAtPosition(5).alt}
                        className="w-full h-full rounded-full transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </div>

                  {/* Position 6 - Right edge */}
                  <div className="transform -translate-y-23 sm:-translate-y-32 translate-x-4 lg:-translate-y-28 sm:translate-x-40 md:-translate-y-35 md:-translate-x-2">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center transition-all duration-1000 ease-in-out">
                      <img
                        src={getIconAtPosition(6).src}
                        alt={getIconAtPosition(6).alt}
                        className="w-full h-full rounded-full transition-all duration-1000 ease-in-out"
                      />
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

            {/* Bottom section with CTA */}
            <div className="absolute bottom-0 left-0 w-full text-center text-white pb-16 sm:pb-20 lg:pb-24">
              <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                  Automatiza, escala y vende más con Chatby
                </h3>
                <p className="text-lg sm:text-2xl mb-8 text-pink-100 font-medium">
                  ¡Comienza ahora!
                </p>
                <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
                  <button
                    className="bg-transparent text-white px-3 py-2 sm:px-5 sm:py-2 rounded-3xl font-normal border-[1px] border-white cursor-pointer transition-colors text-xs sm:text-2xl hover:bg-[#fff] hover:text-[#F129A1] hover:border-[#F129A1]"
                    onClick={() =>
                      (window.location.href =
                        "https://chatby.io/register?ref=WebTrial")
                    }
                  >
                    Iniciar prueba gratis
                  </button>
                  <button
                    className="border border-white text-[#F129A1] bg-white px-3 py-2 sm:px-5 sm:py-2 rounded-3xl font-normal cursor-pointer text-xs sm:text-2xl transition-colors"
                    onClick={() =>
                      (window.location.href = "https://chatby.io/")
                    }
                  >
                    Asesoría gratuita
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Simple curved section for other pages */}
      {location.pathname !== "/" && (
        <section className="relative overflow-hidden dark:bg-[#122030]">
          <svg
            className="w-full h-10 sm:h-96 lg:h-[20rem]"
            viewBox="0 0 1200 100" // 1200 320
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="gradient-simple"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#F129A1" />
                <stop offset="100%" stopColor="#A83CC1" />
              </linearGradient>
            </defs>
            <path
              d="M0 0C409 63 734 72 1200 0L1200 320 0 320Z"
              fill="url(#gradient-simple)"
            />
          </svg>
        </section>
      )}

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-[#F129A1] to-[#A83CC1] dark:from-[#F129A1] dark:to-[#A83CC1] text-white mt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Logo and description */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-transparent rounded-lg flex items-center justify-center">
                  <img src={chatby} alt="Chatby" />
                </div>
                <span className="text-xl font-bold font-axiforma">Chatby</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="https://www.facebook.com/chatby.io"
                  className="text-pink-200 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/joysonllapo"
                  className="text-pink-200 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.tiktok.com/@joysonllapo"
                  className="text-pink-200 hover:text-white transition-colors"
                  aria-label="TikTok"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@Chatby-ai"
                  className="text-pink-200 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/chatby.io"
                  className="text-pink-200 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              <div className="flex flex-col gap-4 mt-8">
                <div className="flex flex-row gap-2">
                  <img src={appstore} alt="App Store" />
                  <img src={gplay} alt="Google Play" />
                </div>
                <div className="flex flex-row gap-2">
                  <img src={Meta} alt="Meta" />
                  <img src={dialog_parter} alt="dialog parter" />{" "}
                </div>
              </div>
            </div>

            {/* Chatby links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Chatby</h3>
              <ul className="space-y-2">
                <div className="grid grid-cols-2">
                  <li>
                    <Link
                      to="/"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Nosotros
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/partners"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Partners
                    </Link>
                  </li>
                </div>
                <div className="grid grid-cols-2">
                  <li>
                    <Link
                      to="/planes"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Planes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://chatby.io/register?ref=WebFooter"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Prueba Gratuita
                    </Link>
                  </li>
                </div>
                <div className="grid grid-cols-2">
                  <li>
                    <a
                      href="#"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Contacto
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Casos de Éxito
                    </a>
                  </li>
                </div>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <div className="grid grid-cols-2">
                  <li>
                    <a
                      href="https://app.chatby.io/api"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Desarrolladores
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Centro de ayuda
                    </a>
                  </li>
                </div>
                <div className="grid grid-cols-2">
                  <li>
                    <a
                      href="#"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/groups/chatby.io"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Facebook Comunidad
                    </a>
                  </li>
                </div>

                <div className="grid grid-cols-2">
                  <li>
                    <a
                      href="#"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://whatsapp.com/channel/0029Va5hhmf17En2PE0zp42T"
                      className="text-pink-100 hover:text-white transition-colors text-sm"
                    >
                      WhatsApp Comunidad
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
