import { useMemo, useRef, useState, useEffect } from "react";
import bgCircle from "../assets/circulo fondo.svg";

const partnersSeed = [
  {
    id: 1,
    name: "Para Emprendedores",
    logo: "../assets/logos empresas/logo_cliente.svg",
    country: "Perú",
    tier: "Silver Partner",
    category: "Para Emprendedores",
    description:
      "Somos una agencia especializada en el desarrollo de software y la automatización de WhatsApp utilizando inteligencia artificial. Ofrecemos soluciones innovadoras y personalizadas que optimizan la comunicación y la eficiencia operativa de nuestros clientes. Nuestro equipo de expertos...",
    url: "#",
  },
  // {
  //   id: 2,
  //   name: "Growth Factory",
  //   country: "México",
  //   tier: "Gold Partner",
  //   category: "E-commerce",
  //   description:
  //     "Implementación integral de Chatby para tiendas en línea. Integraciones con Shopify y campañas conversacionales enfocadas en ROAS.",
  //   url: "#",
  // },
];

export default function Partners() {
  const [query, setQuery] = useState("");
  const [partners] = useState(partnersSeed);
  const listRef = useRef(null);

  // Enfocar input al entrar a la página (mejor UX)
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return partners;
    return partners.filter((p) =>
      [p.name, p.country, p.tier, p.category]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query, partners]);

  // Mapeo de assets para resolver rutas dinámicas desde JSON/seed
  const logoMap = import.meta.glob('../assets/**/*.{svg,png,jpg,jpeg}', { eager: true, import: 'default' });
  const resolveSrc = (path) => logoMap[path] || path;

  const scrollToList = () =>
    listRef.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative z-10 dark:bg-gradient-to-t from-[#122030] to-transparent ">
      {/* Fondo decorativo círculo, alineado a la izquierda */}
      <img
        src={bgCircle}
        alt=""
        className="pointer-events-none select-none hidden md:block absolute left-[-5%] -bottom-60 w-[520px] -z-10 md:w-[520px] lg:w-[580px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-semibold font-axiforma text-gray-900 dark:text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F129A1] to-[#A83CC1]">
              Chatby
            </span>{" "}
            Partners
          </h1>
          <p className="mt-4 text-[#2C011B] dark:text-gray-200 text-base sm:text-xl">
            Encuentre el socio perfecto para satisfacer las necesidades de su
            negocio. Los socios dedicados de{" "}
            <span className="font-semibold">Chatby</span> lo ayudarán a crear e
            implementar soluciones de automatización, optimizar procesos,
            atender a sus clientes y mucho más.
          </p>
        </div>

        {/* Search */}
        <div className="mt-8 flex flex-col items-center gap-4">
          <input
            ref={inputRef}
            type="text"
            placeholder="Buscar"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full sm:w-[32rem] px-4 py-3 rounded-2xl border-2 border-[#EEC7E2] bg-[#FFF3FB] text-gray-900 placeholder:text-[#B565D8] focus:outline-none focus:ring focus:ring-[#DBB2CB] focus:border-[#DBB2CB]
                       dark:bg-[#394B61] dark:border-[#3C2A3A] dark:text-white dark:placeholder:text-[#F5F5F5]"
          />

          <button
            onClick={scrollToList}
            className="px-5 py-2 rounded-2xl text-sm font-medium bg-[#FFF3FB] text-[#7A2E8E] border border-[#EEC7E2]
                       dark:bg-[#394B61] dark:text-[#F5F5F5] dark:border-[#3C2A3A] "
          >
            Conoce nuestros Partners
          </button>
        </div>

        {/* Cards grid */}
        <div
          ref={listRef}
          className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          {filtered.map((p) => (
            <article
              key={p.id}
              className="relative rounded-2xl border-2 border-[#CFDBE9] bg-white/90 backdrop-blur dark:bg-[#1a191950] dark:border-[#32465a] shadow-sm"
            >
              {/* Logo arriba de la card */}
              <div className="px-5 pt-5 flex items-center">
                <img src={resolveSrc(p.logo)} alt={p.name} className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto object-contain" />
              </div>

              <div className="p-5 pt-3">
                {/* Pill categoría */}
                

                {/* Title */}
                <h3 className="mt-3 text-lg sm:text-xl font-semibold text-[#F129A1] dark:text-[#F29BD2]">
                  {p.name}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {p.country}
                </p>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {p.description}
                </p>

                {/* Footer row */}
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-300">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-[#F129A1] to-[#A83CC1]" />
                    {p.tier}
                  </div>
                  <a
                    href={p.url}
                    className="text-[#F129A1] hover:text-[#A83CC1] text-sm font-medium inline-flex items-center gap-1"
                  >
                    Ver perfil
                    <span aria-hidden>➜</span>
                  </a>
                </div>
              </div>
            </article>
          ))}

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="col-span-full text-center text-gray-600 dark:text-gray-300 py-10">
              No se encontraron partners para "{query}".
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
