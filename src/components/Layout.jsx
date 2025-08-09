import { useState } from "react";
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

const Layout = ({ children }) => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();

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
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Header */}
      <header className="relative bg-transparent   ">
        <nav className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={closeMobileMenu}
              >
                <div className="w-8 h-8 flex items-center justify-center">
                  <img src={chatby} alt="Chatby" className="w-8 h-8" />
                </div>
                <span className="text-xl font-bold text-gray-900 dark:text-white font-axiforma">
                  Chatby
                </span>
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
              <button
                className="text-pink-600 dark:text-[#F5F5F5] px-4 py-2 rounded-2xl text-sm font-normal border-2 border-[#F129A1] dark:border-[#F5F5F5] transition-colors cursor-pointer"
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
              <h2 className="text-xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-8">
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
                  {/* Shopify - Left edge */}
                  <div className="transform -translate-y-23 sm:-translate-y-32 -translate-x-4 lg:-translate-y-28 sm:-translate-x-40 md:-translate-y-35 md:-translate-x-2">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center">
                      <img
                        src={bag}
                        alt="bag"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Excel */}
                  <div className="transform -translate-y-17  sm:-translate-y-19 -translate-x-2 lg:-translate-y-25 sm:-translate-x-17 md:-translate-y-30 md:-translate-x-2">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center">
                      <img
                        src={exsheet}
                        alt="exsheet"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Messenger */}
                  <div className="transform -translate-y-12  sm:-translate-y-12 lg:-translate-y-20 md:-translate-y-15">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center">
                      <img
                        src={msn}
                        alt="msn"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Center logo - GPT (largest) */}
                  <div className="w-15 h-15 sm:w-32 sm:h-32 md:w-26 md:h-26 rounded-full lg:w-32 lg:h-32 bg-white dark:bg-[#0D1D30] shadow-lg flex items-center justify-center transform -translate-y-8 md:-translate-y-5 sm:-translate-y-6 border-8 border-[#F129A1]">
                    <img
                      src={gpt}
                      alt="gpt"
                      className="w-full h-full rounded-full dark:invert"
                    />
                  </div>

                  {/* Gmail */}
                  <div className="transform -translate-y-12 sm:-translate-y-12 lg:-translate-y-20 md:-translate-y-15">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center">
                      <img
                        src={mail_google}
                        alt="mail_google"
                        className="w-full h-full rounded-full  "
                      />
                    </div>
                  </div>

                  {/* Twilio */}
                  <div className="transform -translate-y-17 sm:-translate-y-19 translate-x-2 lg:-translate-y-25 sm:translate-x-17 md:-translate-y-30 md:-translate-x-2">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30]  p-1 sm:p-2 flex items-center justify-center">
                      <img
                        src={boton}
                        alt="boton"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  </div>

                  {/* Spinner - Right edge */}
                  <div className="transform -translate-y-23 sm:-translate-y-32 translate-x-4 lg:-translate-y-28 sm:translate-x-40 md:-translate-y-35 md:-translate-x-2">
                    <div className="w-10 h-10 sm:w-24 sm:h-24 md:w-16 md:h-16 lg:w-24 lg:h-24 rounded-full bg-white dark:bg-[#0D1D30] p-1 sm:p-2 flex items-center justify-center">
                      <img
                        src={spinner}
                        alt="spinner"
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom section with CTA */}
            <div className="absolute bottom-0 left-0 w-full text-center text-white pb-16 sm:pb-20 lg:pb-24">
              <div className="max-w-4xl mx-auto px-4">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-6">
                  Automatiza, escala y vende más con Chatby
                </h3>
                <p className="text-xl sm:text-2xl mb-8 text-pink-100 font-medium">
                  ¡Comienza ahora!
                </p>
                <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center">
                  <button
                    className="bg-transparent text-white px-3 py-2 sm:px-5 sm:py-2 rounded-3xl font-normal border-[1px] border-white cursor-pointer transition-colors text-sm sm:text-2xl"
                    onClick={() =>
                      (window.location.href =
                        "https://chatby.io/register?ref=WebTrial")
                    }
                  >
                    Iniciar prueba gratis
                  </button>
                  <button
                    className="border border-white text-[#F129A1] bg-white px-3 py-2 sm:px-5 sm:py-2 rounded-3xl font-normal cursor-pointer text-sm sm:text-2xl transition-colors"
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
