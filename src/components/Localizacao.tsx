import Link from 'next/link';

export default function Localizacao() {
  return (
    <section className="container mx-auto px-4 py-4">
      <h2 className="md:text-3xl text-2xl font-bold text-center md:mb-6 mb-4 text-softWhite">
        Studio L2
      </h2>

      <div className="text-softWhite mb-2 text-sm italic text-center ">
        Conheça o espaço onde seu bem-estar é prioridade.
      </div>

      <div className="w-full max-w-4xl mx-auto shadow-sm shadow-white rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d237.4352636976609!2d-50.92237900304245!3d-17.79337865959079!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9361db645d27b6d7%3A0x3c7bdd7c52411b8!2sR.%20Geraldo%20Jaime%2C%2046%20-%20Jardim%20Goias%2C%20Rio%20Verde%20-%20GO%2C%2075903-421!5e0!3m2!1spt-BR!2sbr!4v1741110801415!5m2!1spt-BR!2sbr"
          className="w-full lg:h-[500px] md:h-[450px] h-[300px]"
          allow="fullscreen; geolocation"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="flex flex-col text-center md:mt-6 mt-4">
        <Link
          href="https://maps.app.goo.gl/YpCFALDEDoME83y48"
          target="_blank"
          rel="noopener noreferrer"
          className="text-softWhite md:text-base text-xs border-softWhite border-2 mx-auto my-2 rounded-md px-4 py-2 transition-all duration-300 hover:scale-110"
        >
          Ver no Google Maps
        </Link>
      </div>
    </section>
  );
}
