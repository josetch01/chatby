import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ContactPartnerModal from "../components/ContactPartnerModal";

export default function PartnerProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { partnerName } = useParams();
  const [partnerData, setPartnerData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Mapeo de assets para resolver rutas dinámicas
  const logoMap = import.meta.glob('../assets/**/*.{svg,png,jpg,jpeg}', { eager: true, import: 'default' });
  const resolveSrc = (path) => logoMap[path] || path;

  useEffect(() => {
    // Limpiar la marca de navegación programática
    sessionStorage.removeItem('navigatingToPartner');

    // Si tenemos datos del state, los usamos
    if (location.state) {
      setPartnerData({
        name: location.state.companyName,
        country: location.state.companyCountry,
        description: location.state.companyAbout,
        category: location.state.classification,
        logo: location.state.imgSrc,
        url: location.state.url,
        correo: location.state.correo
      });
    } else {
      // Si no hay datos en el state, podrías hacer una consulta aquí
      // Por ahora, redirigimos a partners
      navigate('/partners');
    }
  }, [location.state, navigate]);

  if (!partnerData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] dark:bg-[#122030]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F129A1] mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Cargando perfil del partner...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] dark:bg-[#1E293B] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Botón de regreso */}
        <button
          onClick={() => navigate('/partners')}
          className="inline-flex cursor-pointer items-center gap-2 text-[#F129A1] hover:text-[#A83CC1] font-medium mb-8 transition-colors text-sm"
        >
          ← Partners List
        </button>
        <div className="p-8">
          <div className="flex flex-row gap-8 items-center mb-8">
            <div className="bg-white dark:bg-[#374151] rounded-lg shadow-[0.2rem_0.2rem_2rem_#1616260f] dark:shadow-[0.2rem_0.2rem_2rem_#00000020] flex p-4 relative text-left w-[16%]">
              <div className="h-full pb-[100%] relative w-full">
                   <img
                    src={resolveSrc(partnerData.logo)}
                    alt={partnerData.name}
                    className="w-full h-full object-contain absolute top-0 left-0"
                  />
              </div>
            </div>
            <h1 className="self-center text-[rgb(14_1_66)] dark:text-white text-[3rem] font-bold tracking-[-0.04em] leading-[1.2]">
              {partnerData.name}
            </h1>
          </div>
        </div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
  {/* Columna izquierda - Información del partner */}
  <div className="bg-white dark:bg-[#374151] rounded-xl shadow-[0.2rem_0.2rem_2rem_#1616260f] dark:shadow-[0.2rem_0.2rem_2rem_#00000020] p-6 flex flex-col justify-between text-left w-full">
    <div>
      {/* Encabezado con imagen y nombre */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="https://chatby.io/images/chatby-silver-partner.png"
          alt="Para Emprendedores"
          className="w-20 h-20 object-contain mb-3"
        />
        <h3 className="text-[rgb(14_1_66)] dark:text-white text-2xl font-bold leading-[1.2] tracking-[-0.04em] text-center">
          {partnerData.name}
        </h3>
      </div>

      {/* Información del partner */}
      <div className="space-y-3 text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
  <div className="rounded-full bg-gray-200 dark:bg-gray-600 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-600 dark:text-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</div>

          <span>{partnerData.country}</span>
        </div>
        <div className="flex items-center gap-2">
  <div className="rounded-full bg-gray-200 dark:bg-gray-600 p-2">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-600 dark:text-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
</svg>

</div>          <span>{partnerData.category}</span>
        </div>
        <div className="flex items-center gap-2">
            <div className="rounded-full bg-gray-200 dark:bg-gray-600 p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-gray-600 dark:text-gray-300">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

</div>
          <a
            href="https://paraemprendedores.pe/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#b238c9] hover:underline"
          >
           {partnerData.url}
          </a>
        </div>
      </div>
    </div>

    {/* Botón */}
    <div className="mt-8">
      <button
        onClick={() => setIsModalOpen(true)}
        className="w-full bg-gradient-to-r from-[#b238c9] to-[#5b30ec] text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-[1.02]"
      >
        Contact Partner
      </button>
    </div>
  </div>

  {/* Columna derecha - Información detallada */}
  <div className="lg:col-span-2 bg-white dark:bg-[#374151] rounded-2xl p-8 shadow-[0.2rem_0.2rem_2rem_#1616260f] dark:shadow-[0.2rem_0.2rem_2rem_#00000020]">
    <div className="bg-white dark:bg-[#374151] rounded-2xl p-8 shadow-sm">
      <h2 className="text-xl font-bold text-[#2C3E50] dark:text-white mb-6">
        Acerca de:
      </h2>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
        {partnerData.description}
      </p>
    </div>
  </div>
</div>
      </div>

      {/* Modal de contacto */}
      <ContactPartnerModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        partnerName={partnerData.name}
        partnerEmail={partnerData.correo}
      />
    </div>
  );
}
