export default function About() {
  return (
    <section className="mb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 text-slate-800 text-center relative pb-4 font-serif">
          Sobre Mí
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-yellow-500"></div>
        </h2>
        <div>
          <p className="text-base sm:text-lg leading-relaxed text-gray-700 text-justify  mb-10 font-serif">
            Como desarrollador Full Stack con una sólida formación en ingeniería
            de software, me dedico a crear soluciones digitales elegantes que
            combinan funcionalidad robusta con diseño intuitivo. Mi experiencia
            abarca más de tres años desarrollando aplicaciones web modernas,
            donde he cultivado un profundo entendimiento de las mejores
            prácticas en arquitectura de software y desarrollo orientado a
            resultados.
          </p>
        </div>

        <div className="relative text-center px-6 sm:px-8 my-12">
          <p className="text-gray-500 text-base sm:text-lg italic leading-relaxed font-serif text-justify sm:text-center">
            <span className="text-yellow-500 text-4xl leading-none font-serif align-top">
              “
            </span>
            El código limpio es simple y directo. Se lee como prosa bien
            escrita.
            <span className="text-yellow-500 text-4xl leading-none font-serif align-top">
              ”
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
