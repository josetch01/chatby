import { useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { countriesDialCodeAndFlags } from '../data/datapaises';
import Select from 'react-select';

export default function ContactPartnerModal({ isOpen, onClose, partnerName, partnerEmail }) {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    empresa: '',
    email: '',
    whatsapp: '',
    paginaWeb: '',
    descripcion: ''
  });

  const [selectedCountry, setSelectedCountry] = useState(null); // País seleccionado completo
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Todos los países disponibles del archivo de datos
  const allCountries = countriesDialCodeAndFlags;

  // País por defecto (Perú)
  const defaultCountry = allCountries.find(country => country.code === 'PE');

  // Detectar país automáticamente al abrir el modal
  useEffect(() => {
    if (isOpen) {
      detectUserCountry();
    }
  }, [isOpen]);

  const detectUserCountry = async () => {
    try {
      // Intentar detectar por geolocalización IP
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();

      if (data.country_code) {
        // Buscar el país en todos los datos disponibles
        const country = allCountries.find(c => c.code === data.country_code);
        if (country) {
          setSelectedCountry(country);
          return;
        }
      }
    } catch (error) {
      console.log('No se pudo detectar el país automáticamente:', error);
    }

    // Fallback: intentar detectar por zona horaria
    try {
      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      // Mapeo básico de zonas horarias a códigos de país
      const timezoneMap = {
        'America/Lima': 'PE',
        'America/New_York': 'US',
        'America/Los_Angeles': 'US',
        'America/Chicago': 'US',
        'America/Denver': 'US',
        'America/Mexico_City': 'MX',
        'America/Bogota': 'CO',
        'America/Santiago': 'CL',
        'America/Argentina/Buenos_Aires': 'AR',
        'America/Sao_Paulo': 'BR',
        'Europe/Madrid': 'ES'
      };

      const detectedCountryCode = timezoneMap[timezone];
      if (detectedCountryCode) {
        const country = allCountries.find(c => c.code === detectedCountryCode);
        if (country) {
          setSelectedCountry(country);
        }
      }
    } catch (error) {
      console.log('No se pudo detectar por zona horaria:', error);
    }

    // Si no se detecta nada, usar Perú por defecto
    if (!selectedCountry) {
      setSelectedCountry(defaultCountry);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Preparar los datos en el formato requerido por la API
      const apiData = {
        first_name: formData.nombres,
        last_name: formData.apellidos,
        business_name: formData.empresa,
        email: formData.email,
        whatsapp: `${selectedCountry?.dial_code || '+51'}${formData.whatsapp}`,
        whatsappDialCode: selectedCountry?.dial_code || '+51',
        country: selectedCountry?.name || 'Peru',
        website: formData.paginaWeb,
        project_description: formData.descripcion,
        partner: {
          name: partnerName,
          email: partnerEmail
        }
      };

      // Enviar datos a la API
      const response = await fetch('https://hook.us1.make.com/qblycr3xcc80d5i5j7n1w61vvvywpd03', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      if (response.ok) {
        alert('¡Formulario enviado exitosamente! El partner se pondrá en contacto contigo pronto.');

        // Limpiar formulario y cerrar modal
        setFormData({
          nombres: '',
          apellidos: '',
          empresa: '',
          email: '',
          whatsapp: '',
          paginaWeb: '',
          descripcion: ''
        });
        onClose();
      } else {
        throw new Error('Error al enviar el formulario');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };



  // Preparar opciones para React Select
  const countryOptions = allCountries.map(country => ({
    value: country.dial_code,
    label: `${country.flag} ${country.name} (${country.dial_code})`,
    country: country
  }));

  // Valor seleccionado para React Select
  const selectedOption = selectedCountry ? {
    value: selectedCountry.dial_code,
    label: `${selectedCountry.flag} ${selectedCountry.name} (${selectedCountry.dial_code})`,
    country: selectedCountry
  } : null;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#1E293B] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-600">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contact Partner
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Nombres y Apellidos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nombres*
              </label>
              <input
                type="text"
                name="nombres"
                value={formData.nombres}
                onChange={handleInputChange}
                placeholder="Juan Manuel"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#374151] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#F129A1] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Apellidos*
              </label>
              <input
                type="text"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleInputChange}
                placeholder="Perez Lopez"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#374151] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#F129A1] focus:border-transparent"
              />
            </div>
          </div>

          {/* Empresa y Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Empresa*
              </label>
              <input
                type="text"
                name="empresa"
                value={formData.empresa}
                onChange={handleInputChange}
                placeholder="Happy Store"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#374151] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#F129A1] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="juan@gmail.com"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#374151] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#F129A1] focus:border-transparent"
              />
            </div>
          </div>

          {/* WhatsApp y Página Web */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                WhatsApp
              </label>
              <div className="flex">
                <div className="w-48">
                  <Select
                    value={selectedOption}
                    onChange={(option) => setSelectedCountry(option.country)}
                    options={countryOptions}
                    isSearchable={true}
                    placeholder="Buscar país..."
                    className="react-select-container"
                    classNamePrefix="react-select"
                    styles={{
                      control: (provided, state) => ({
                        ...provided,
                        minHeight: '48px',
                        backgroundColor: document.documentElement.classList.contains('dark') ? '#374151' : 'white',
                        borderColor: state.isFocused ? '#F129A1' : (document.documentElement.classList.contains('dark') ? '#4b5563' : '#d1d5db'),
                        borderRadius: '0.5rem 0 0 0.5rem',
                        boxShadow: state.isFocused ? '0 0 0 2px rgba(241, 41, 161, 0.2)' : 'none',
                        '&:hover': {
                          borderColor: '#F129A1'
                        }
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: document.documentElement.classList.contains('dark') ? '#374151' : 'white',
                        border: document.documentElement.classList.contains('dark') ? '1px solid #4b5563' : '1px solid #d1d5db',
                        zIndex: 9999
                      }),
                      option: (provided, state) => ({
                        ...provided,
                        backgroundColor: state.isSelected
                          ? '#F129A1'
                          : state.isFocused
                            ? (document.documentElement.classList.contains('dark') ? '#4b5563' : '#f3f4f6')
                            : (document.documentElement.classList.contains('dark') ? '#374151' : 'white'),
                        color: state.isSelected
                          ? 'white'
                          : (document.documentElement.classList.contains('dark') ? '#f3f4f6' : '#374151'),
                        fontSize: '14px',
                        padding: '8px 12px'
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        fontSize: '14px',
                        color: document.documentElement.classList.contains('dark') ? '#f3f4f6' : '#374151'
                      }),
                      placeholder: (provided) => ({
                        ...provided,
                        fontSize: '14px',
                        color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280'
                      }),
                      input: (provided) => ({
                        ...provided,
                        color: document.documentElement.classList.contains('dark') ? '#f3f4f6' : '#374151'
                      })
                    }}
                  />
                </div>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="123456789"
                  className="flex-1 px-4 py-3 border border-l-0 border-gray-300 dark:border-gray-600 rounded-r-lg bg-white dark:bg-[#374151] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#F129A1] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Página Web
              </label>
              <input
                type="url"
                name="paginaWeb"
                value={formData.paginaWeb}
                onChange={handleInputChange}
                placeholder="www.minegocio.com"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#374151] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#F129A1] focus:border-transparent"
              />
            </div>
          </div>

          {/* Descripción del proyecto */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Descripción del proyecto*
            </label>
            <textarea
              name="descripcion"
              value={formData.descripcion}
              onChange={handleInputChange}
              placeholder="Escribe una breve descripción de tus requerimientos"
              required
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#374151] text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-[#F129A1] focus:border-transparent resize-none"
            />
          </div>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 bg-gradient-to-r from-[#F129A1] to-[#A83CC1] text-white py-3 px-6 rounded-lg font-medium hover:from-[#E01A96] hover:to-[#9A35B8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Enviando...
                </>
              ) : (
                'Enviar'
              )}
            </button>
            <button
              type="button"
              onClick={onClose}
              disabled={isSubmitting}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg font-medium hover:bg-gray-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
