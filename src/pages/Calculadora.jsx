import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

import bgGrid from "../assets/cuadricula fondo.svg";
import bgCircle from "../assets/circulo fondo.svg";
import iconMarketing from "../assets/marketing icono.svg";
import iconUtilidad from "../assets/utilidad icono.svg";
import iconServicio from "../assets/servicio icono.svg";
import iconAutenticacion from "../assets/autenticacion icono.svg";
import {
  countries as countriesData,
  marketingCosts,
  utilityCosts,
  authenticationCosts,
  serviceCosts,
} from "../data/DataCalculadora.jsx";

// Custom CSS for pink sliders with gradient progress
const sliderStyles = `
  .slider-pink {
    appearance: none;
    height: 10px;
    border-radius: 9999px;
    background: linear-gradient(90deg, #7B2BC4 0%, #F129A1 100%) 0/ var(--progress, 0%) 100% no-repeat, #e5e7eb;
    outline: none;
  }

  .slider-pink::-webkit-slider-thumb {
    appearance: none;
    height: 14px;
    width: 14px;
    margin-top: -1px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #D1D5DB;
    box-shadow: 0 2px 8px rgba(241, 41, 161, 0.35);
    cursor: pointer;
  }

  .slider-pink::-moz-range-thumb {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #D1D5DB;
    box-shadow: 0 2px 8px rgba(241, 41, 161, 0.35);
    cursor: pointer;
  }

  .slider-pink::-webkit-slider-runnable-track {
    background: transparent;
    height: 10px;
    border-radius: 9999px;
  }

  .slider-pink::-moz-range-track {
    background: #e5e7eb;
    height: 10px;
    border-radius: 9999px;
  }

  .slider-pink::-moz-range-progress {
    background: linear-gradient(90deg, #7B2BC4 0%, #F129A1 100%);
    height: 10px;
    border-radius: 9999px;
  }

  /* Custom select (closed state) */
  .custom-select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 2px solid transparent;
    border-radius: 9999px;
    padding: 12px 44px 12px 16px;
    font-size: 1rem;
    line-height: 1.5rem;
    color: #111827;
    background-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23A83CC1' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E"),
      linear-gradient(#ffffff, #ffffff),
      linear-gradient(90deg, #7B2BC4, #F129A1);
    background-position: right 14px center, 0 0, 0 0;
    background-repeat: no-repeat, no-repeat, no-repeat;
    background-size: 18px 18px, 100% 100%, 100% 100%;
    background-origin: content-box, padding-box, border-box;
    background-clip: content-box, padding-box, border-box;
    box-shadow: 0 0 0 0 rgba(0,0,0,0);
  }
  .custom-select:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(168, 60, 193, 0.15);
  }
  .dark .custom-select {
    color: #ffffff;
    background-image:
      url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23D8B4FE' viewBox='0 0 24 24'%3E%3Cpath d='M7 10l5 5 5-5H7z'/%3E%3C/svg%3E"),
      linear-gradient(#111318, #111318),
      linear-gradient(90deg, #7B2BC4, #F129A1);
  }
`;
// Helper: set CSS variable --progress on input[type=range]
const setSliderProgress = (inputEl) => {
  if (!inputEl) return;
  const min = Number(inputEl.min || 0);
  const max = Number(inputEl.max || 100);
  const val = Number(inputEl.value || 0);
  const percent = ((val - min) * 100) / (max - min);
  inputEl.style.setProperty("--progress", percent + "%");
};

// Inject styles
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = sliderStyles;
  document.head.appendChild(styleSheet);
}

const Calculadora = () => {
  const [formData, setFormData] = useState({
    mensajesDiarios: "",
    tiempoRespuesta: "",
    empleados: "",
    costoEmpleado: "",
    horasAtencion: "",
  });

  const [resultado, setResultado] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState("Peru");
  const [selectedCurrency, setSelectedCurrency] = useState("Dolar");

  // Conversation counts state
  const [conversationCounts, setConversationCounts] = useState({
    marketing: 0,
    utility: 0,
    authentication: 0,
    service: 0,
  });

  // Input values state (for manual amount entry)
  const [inputValues, setInputValues] = useState({
    marketing: "",
    utility: "",
    authentication: "",
    service: "",
  });

  // Country options (labels only for UI) from data file
  const countryLabels = countriesData.map((c) => c.label);

  // Helpers to map UI selections to data keys
  const getCountryKey = (label) => {
    const found = countriesData.find((c) => c.label === label);
    return found ? found.value : (label || "").toLowerCase();
  };
  const getCurrencyKey = (label) => (label === "Dolar" ? "USD" : "EUR");

  // Get current prices for the selected country/currency from data file
  const getCurrentPrices = () => {
    const countryKey = getCountryKey(selectedCountry);
    const currencyKey = getCurrencyKey(selectedCurrency);

    return {
      marketing: marketingCosts[currencyKey]?.[countryKey] ?? 0,
      utility: utilityCosts[currencyKey]?.[countryKey] ?? 0,
      authentication: authenticationCosts[currencyKey]?.[countryKey] ?? 0,
      service: serviceCosts[currencyKey]?.[countryKey] ?? 0,
    };
  };

  // Calculate total estimation
  const calculateEstimation = () => {
    const prices = getCurrentPrices();

    const total =
      conversationCounts.marketing * prices.marketing +
      conversationCounts.utility * prices.utility +
      conversationCounts.authentication * prices.authentication +
      conversationCounts.service * prices.service;

    return total;
  };

  // Handle slider changes
  const handleSliderChange = (type, value) => {
    const newCount = parseInt(value);
    setConversationCounts((prev) => ({
      ...prev,
      [type]: newCount,
    }));

    // Update input value to match slider
    const prices = getCurrentPrices();
    const newAmount = newCount === 0 ? "" : (newCount * prices[type]).toFixed(4);
    setInputValues((prev) => ({
      ...prev,
      [type]: newAmount,
    }));
  };

  // Handle input changes for conversation counts (by amount/price)
  const handleConversationInputChange = (type, amount) => {
    const prices = getCurrentPrices();
    const pricePerConversation = prices[type];

    if (pricePerConversation === 0) return;

    // Allow empty string for better user experience when deleting
    if (amount === "") {
      setInputValues((prev) => ({
        ...prev,
        [type]: "",
      }));
      setConversationCounts((prev) => ({
        ...prev,
        [type]: 0,
      }));
      return;
    }

    // Calculate the maximum amount allowed (10000 conversations * price per conversation)
    const maxAmount = 10000 * pricePerConversation;

    // Parse and validate the input amount
    const numValue = parseFloat(amount);

    // If the input is not a valid number, don't update anything
    if (isNaN(numValue)) {
      return;
    }

    const clampedAmount = Math.max(0, Math.min(maxAmount, numValue));

    // Update input value - keep the original input if it's valid, otherwise use clamped amount
    const shouldUseOriginal = numValue >= 0 && numValue <= maxAmount;
    setInputValues((prev) => ({
      ...prev,
      [type]: shouldUseOriginal ? amount : clampedAmount.toFixed(4),
    }));

    // Calculate how many conversations this amount represents
    const conversationCount = Math.round(clampedAmount / pricePerConversation);

    // Ensure conversation count is within bounds (0 to 10000)
    const clampedConversationCount = Math.max(
      0,
      Math.min(10000, conversationCount)
    );

    setConversationCounts((prev) => ({
      ...prev,
      [type]: clampedConversationCount,
    }));
  };

  // Format currency symbol
  const getCurrencySymbol = () => {
    return selectedCurrency === "Dolar" ? "$" : "€";
  };

  // Initialize slider progress and input values on mount
  useEffect(() => {
    if (typeof document === "undefined") return;
    const sliders = document.querySelectorAll("input.slider-pink");
    sliders.forEach((el) => setSliderProgress(el));

    // Initialize input values based on current conversation counts
    const prices = getCurrentPrices();
    setInputValues({
      marketing: conversationCounts.marketing === 0 ? "" : (conversationCounts.marketing * prices.marketing).toFixed(4),
      utility: conversationCounts.utility === 0 ? "" : (conversationCounts.utility * prices.utility).toFixed(4),
      authentication: conversationCounts.authentication === 0 ? "" : (
        conversationCounts.authentication * prices.authentication
      ).toFixed(4),
      service: conversationCounts.service === 0 ? "" : (conversationCounts.service * prices.service).toFixed(4),
    });
  }, []);

  // Update slider progress when conversation counts change
  useEffect(() => {
    if (typeof document === "undefined") return;
    // Use setTimeout to ensure DOM is updated
    setTimeout(() => {
      const sliders = document.querySelectorAll("input.slider-pink");
      sliders.forEach((el) => setSliderProgress(el));
    }, 0);
  }, [conversationCounts]);

  // Update input values when country or currency changes
  useEffect(() => {
    const prices = getCurrentPrices();
    setInputValues({
      marketing: conversationCounts.marketing === 0 ? "" : (conversationCounts.marketing * prices.marketing).toFixed(4),
      utility: conversationCounts.utility === 0 ? "" : (conversationCounts.utility * prices.utility).toFixed(4),
      authentication: conversationCounts.authentication === 0 ? "" : (
        conversationCounts.authentication * prices.authentication
      ).toFixed(4),
      service: conversationCounts.service === 0 ? "" : (conversationCounts.service * prices.service).toFixed(4),
    });
  }, [selectedCountry, selectedCurrency]);

  // Custom Select Component
  const CustomSelect = ({ label, value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 text-left bg-white dark:bg-gray-700 border-2 border-[#B565D8] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#F129A1] focus:border-[#F129A1] transition-colors text-gray-900 dark:text-white"
          >
            <span>{value || placeholder}</span>
            <ChevronDownIcon
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#B565D8] transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-700 border-2 border-[#B565D8] rounded-2xl shadow-lg max-h-60 overflow-auto">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-900 dark:text-white first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const calcularAhorro = () => {
    const {
      mensajesDiarios,
      tiempoRespuesta,
      empleados,
      costoEmpleado,
      horasAtencion,
    } = formData;

    if (
      !mensajesDiarios ||
      !tiempoRespuesta ||
      !empleados ||
      !costoEmpleado ||
      !horasAtencion
    ) {
      alert("Por favor completa todos los campos");
      return;
    }

    // Cálculos básicos
    const mensajesMensuales = parseInt(mensajesDiarios) * 30;
    const tiempoTotalMinutos = mensajesMensuales * parseFloat(tiempoRespuesta);
    const tiempoTotalHoras = tiempoTotalMinutos / 60;
    const costoMensualActual =
      (tiempoTotalHoras / parseInt(horasAtencion)) *
      parseInt(empleados) *
      parseFloat(costoEmpleado);

    // Con automatización (asumiendo 70% de automatización)
    const porcentajeAutomatizacion = 0.7;
    const ahorroMensual = costoMensualActual * porcentajeAutomatizacion;
    const ahorroAnual = ahorroMensual * 12;

    setResultado({
      mensajesMensuales,
      tiempoTotalHoras: Math.round(tiempoTotalHoras),
      costoMensualActual: Math.round(costoMensualActual),
      ahorroMensual: Math.round(ahorroMensual),
      ahorroAnual: Math.round(ahorroAnual),
      porcentajeAutomatizacion: Math.round(porcentajeAutomatizacion * 100),
    });
  };

  return (
    <div className="min-h-screen py-8 sm:py-12 dark:bg-gradient-to-t from-[#122030] to-transparent overflow-visible">
      {/* SECCIÓN 1: CALCULADORA DE PRECIOS DE WHATSAPP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFE8F7] dark:bg-[#394B61] rounded-2xl px-4 py-2 mb-4">
            <span className="text-sm text-gray-600 dark:text-[#CCCCCC]">
              WhatsApp Pricing Calculator
            </span>
          </div>
          <h1 className="text-lg sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-0 sm:mb-4">
            Calcula tus costos con nuestra
          </h1>
          <h2 className="text-lg sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F129A1] to-[#A83CC1] mb-2 sm:mb-6">
            calculadora de precios de WhatsApp
          </h2>
          <p className="text-xs text-gray-600 dark:text-[#CCCCCC] max-w-2xl mx-auto font-medium">
            Haz que cada mensaje cuente pagando sólo por las conversaciones que
            tengas
          </p>
        </div>

        {/* Calculator Grid */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 border rounded-2xl border-[#CFDBE9] dark:bg-[#1a191950] backdrop-blur-lg"
          style={{ boxShadow: "0px 2px 2px 0px #156CFF4D" }}
        >
          {/* Left area: selectors + conversations */}
          <div className="lg:col-span-2 px-10 py-5">
            {/* Top: selectors in two columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <CustomSelect
                  label="Seleccione su país"
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                  options={countriesData.map((c) => c.label)}
                  placeholder="Seleccione un país"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Los países no mencionados en la lista se consideran "otros"
                  países y están sujetos a las mismas tarifas.
                </p>
              </div>

              {/* Currency Selector */}
              <div>
                <CustomSelect
                  label="Moneda"
                  value={selectedCurrency}
                  onChange={setSelectedCurrency}
                  options={["Dolar", "Euro"]}
                  placeholder="Seleccione moneda"
                />
              </div>
            </div>

            {/* Bottom: conversation types 2x2 */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 j">
              {/* Marketing Conversations */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Plantilla de Marketing
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Monto:</span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
                        {getCurrencySymbol()}
                      </span>
                      <input
                        type="number"
                        min="0"
                        max={(10000 * getCurrentPrices().marketing).toFixed(4)}
                        step="0.01"
                        value={inputValues.marketing}
                        onChange={(e) =>
                          handleConversationInputChange(
                            "marketing",
                            e.target.value
                          )
                        }
                        className="w-24 pl-6 pr-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F129A1] focus:border-[#F129A1] transition-colors [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        placeholder="0.0000"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {getCurrencySymbol()}
                  {getCurrentPrices().marketing.toFixed(4)} / Mensaje
                </p>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={conversationCounts.marketing}
                    className="flex-1 h-2 rounded-lg appearance-none cursor-pointer slider-pink"
                    onInput={(e) => {
                      setSliderProgress(e.target);
                      handleSliderChange("marketing", e.target.value);
                    }}
                    onChange={(e) => {
                      setSliderProgress(e.target);
                      handleSliderChange("marketing", e.target.value);
                    }}
                  />
                  <div className="flex items-center space-x-1 min-w-[80px]">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Mensajes:</span>
                    <input
                      type="number"
                      inputMode="numeric"
                      min="0"
                      max="10000"
                      value={conversationCounts.marketing}
                      onChange={(e) => {
                        const value = Math.max(0, Math.min(10000, parseInt(e.target.value) || 0));
                        handleSliderChange("marketing", value.toString());
                      }}
                      className="w-12 px-1 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#F129A1] focus:border-[#F129A1] transition-colors text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>
                </div>
              </div>

              {/* Utility Conversations */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Plantilla de Utilidad (Utility)
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Monto:</span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
                        {getCurrencySymbol()}
                      </span>
                      <input
                        type="number"
                        min="0"
                        max={(10000 * getCurrentPrices().utility).toFixed(4)}
                        step="0.01"
                        value={inputValues.utility}
                        onChange={(e) =>
                          handleConversationInputChange("utility", e.target.value)
                        }
                        className="w-24 pl-6 pr-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F129A1] focus:border-[#F129A1] transition-colors [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        placeholder="0.0000"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {getCurrencySymbol()}
                  {getCurrentPrices().utility.toFixed(4)} / Mensaje
                </p>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={conversationCounts.utility}
                    className="flex-1 h-2 rounded-lg appearance-none cursor-pointer slider-pink"
                    onInput={(e) => {
                      setSliderProgress(e.target);
                      handleSliderChange("utility", e.target.value);
                    }}
                    onChange={(e) => {
                      setSliderProgress(e.target);
                      handleSliderChange("utility", e.target.value);
                    }}
                  />
                  <div className="flex items-center space-x-1 min-w-[80px]">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Mensajes:</span>
                    <input
                      type="number"
                      min="0"
                      max="10000"
                      value={conversationCounts.utility}
                      onChange={(e) => {
                        const value = Math.max(0, Math.min(10000, parseInt(e.target.value) || 0));
                        handleSliderChange("utility", value.toString());
                      }}
                      className="w-12 px-1 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#F129A1] focus:border-[#F129A1] transition-colors text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>
                </div>
              </div>

              {/* Authentication Conversations */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Plantilla de Autenticación (Authentication)
                  </label>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Monto:</span>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400">
                        {getCurrencySymbol()}
                      </span>
                      <input
                        type="number"
                        min="0"
                        max={(10000 * getCurrentPrices().authentication).toFixed(
                          4
                        )}
                        step="0.01"
                        value={inputValues.authentication}
                        onChange={(e) =>
                          handleConversationInputChange(
                            "authentication",
                            e.target.value
                          )
                        }
                        className="w-24 pl-6 pr-2 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#F129A1] focus:border-[#F129A1] transition-colors [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                        placeholder="0.0000"
                      />
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  {getCurrencySymbol()}
                  {getCurrentPrices().authentication.toFixed(4)} / Mensaje
                </p>
                <div className="flex items-center space-x-3">
                  <input
                    type="range"
                    min="0"
                    max="10000"
                    value={conversationCounts.authentication}
                    className="flex-1 h-2 rounded-lg appearance-none cursor-pointer slider-pink"
                    onInput={(e) => {
                      setSliderProgress(e.target);
                      handleSliderChange("authentication", e.target.value);
                    }}
                    onChange={(e) => {
                      setSliderProgress(e.target);
                      handleSliderChange("authentication", e.target.value);
                    }}
                  />
                  <div className="flex items-center space-x-1 min-w-[80px]">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Mensajes:</span>
                    <input
                      type="number"
                      min="0"
                      max="10000"
                      value={conversationCounts.authentication}
                      onChange={(e) => {
                        const value = Math.max(0, Math.min(10000, parseInt(e.target.value) || 0));
                        handleSliderChange("authentication", value.toString());
                      }}
                      className="w-12 px-1 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-[#F129A1] focus:border-[#F129A1] transition-colors text-center [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    />
                  </div>
                </div>
              </div>

             
            </div>
          </div>

          {/* Right Column - Estimation */}
          <div className="bg-[#0D1D30] dark:bg-[#101A31] rounded-2xl p-10 text-white flex flex-col justify-between ">
            <h3 className="text-lg sm:text-xl font-semibold">Estimación:</h3>
            <div>
              <div className="text-right mb-8">
                <div className="text-2xl sm:text-4xl font-bold mb-4">
                  {getCurrencySymbol()}
                  {calculateEstimation().toFixed(2)}
                </div>
              </div>
              <div className="border-b border-white/20 mb-6" />
              <div className="text-sm text-gray-300">
                <p>
                  Para obtener más información sobre la estructura de precios de
                  las conversaciones de WhatsApp, póngase en{" "}
                  <span className="text-[#F129A1] cursor-pointer hover:underline" onClick={() => window.location.href = "https://api.whatsapp.com/message/MMX5O7MBCJBWE1?autoload=1&app_absent=0"} >
                    contacto con nosotros
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: INFORMACIÓN SOBRE TIPOS DE CONVERSACIONES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-0 sm:pt-10 overflow-visible">
        {/* WhatsApp Calculator Info Section */}
        <div className="relative mt-8 mb-16 overflow-visible">
          {/* Decorative background circle */}
          <img
            src={bgCircle}
            alt=""
            className="pointer-events-none select-none hidden md:block absolute -left-32 top-32 w-[500px] opacity-30 z-0 "
          />

          {/* Top intro row */}
          <div className="relative z-10 flex flex-col items-center text-center mb-12 sm:flex-row sm:items-start sm:text-left">
            <div className="w-full mb-6 sm:w-1/2 sm:mb-0">
              <h2 className="text-base sm:text-4xl font-bold smfont-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#F129A1] to-[#A83CC1] mb-0 sm:mb-6">
                Calculadora de WhatsApp
              </h2>
            </div>
            <div className="text-[#2C011B] dark:text-gray-300 text-sm font-medium w-full sm:w-1/2">
              <p>
                Todo lo que necesitas es una plantilla de mensaje para iniciar
                un chat con tus clientes. Las tarifas varían en función de la
                categoría y del país de tus clientes.
              </p>
              <p>
                Las tarifas de WhatsApp Business API se basan en una
                conversación de 24 horas entre la empresa y el cliente,
                aplicando tarifas por todos los mensajes intercambiados durante
                ese período de tiempo.
              </p>
              <p>
                Utiliza la calculadora de precios de WhatsApp de Kommo para
                estimar tus gastos en mensajes.
              </p>
            </div>
          </div>

          {/* Feature card */}
          <div className="relative z-10 rounded-2xl bg-white dark:bg-[#010F1F80] p-8 sm:p-12 ring-1 ring-gray-200/70 dark:ring-white/10 shadow-sm ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {/* Marketing */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#FCE8F6] dark:bg-[#2C1A29] flex items-center justify-center shadow">
                  <img
                    src={iconMarketing}
                    alt="Marketing"
                    className="w-7 h-7"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold text-[#2C011B] dark:text-white mb-2">
                    Marketing
                  </h3>
                  <p className="text-[16px]  text-[#2C011B] dark:text-gray-400 font-medium space-y-0 text-start">
                    Las conversaciones de marketing se relacionan con tu
                    empresa, productos o servicios. Estas incluyen ofertas y
                    promociones, sugerencias de productos relacionados, mensajes
                    de carritos abandonados o cualquier conversación que no
                    califique como de autenticación o utilidad.
                  </p>
                </div>
              </div>

              {/* Utilidad */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#FCE8F6] dark:bg-[#2C1A29] flex items-center justify-center shadow">
                  <img src={iconUtilidad} alt="Utilidad" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold text-[#2C011B] dark:text-white mb-2">
                    Utilidad
                  </h3>
                  <p className="text-[16px] text-[#2C011B] dark:text-gray-400 font-medium space-y-0 text-start">
                    Las conversaciones de utilidad se relacionan directamente
                    con una transacción, lo que incluye notificaciones después
                    de la compra y facturas recurrentes.
                  </p>
                </div>
              </div>

              {/* Servicio */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#FCE8F6] dark:bg-[#2C1A29] flex items-center justify-center shadow">
                  <img src={iconServicio} alt="Servicio" className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold text-[#2C011B] dark:text-white mb-2">
                    Servicio
                  </h3>
                  <p className="text-[16px] text-[#2C011B] dark:text-gray-400 font-medium space-y-0 text-start">
                    Las conversaciones de servicio son iniciadas por los
                    usuarios y suelen ser consultas de los clientes. Las
                    empresas pueden responder dentro del intervalo de servicio
                    al cliente de 24 horas.
                  </p>
                </div>
              </div>

              {/* Autenticación */}
              <div className="flex gap-4">
                <div className="shrink-0 w-12 h-12 rounded-full bg-[#FCE8F6] dark:bg-[#2C1A29] flex items-center justify-center shadow">
                  <img
                    src={iconAutenticacion}
                    alt="Autenticación"
                    className="w-7 h-7"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-3xl font-semibold text-[#2C011B] dark:text-white mb-2">
                    Autenticación
                  </h3>
                  <p className="text-[16px] text-[#2C011B] dark:text-gray-400 font-medium space-y-0 text-start">
                    Las conversaciones de autenticación proporcionan a los
                    usuarios códigos de acceso de un solo uso con fines de
                    autenticación. Estos pueden enviarse en cualquier etapa del
                    recorrido del usuario, ya sea durante el registro o la
                    recuperación de la cuenta o ante problemas de integridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Calculadora;
