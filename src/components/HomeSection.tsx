import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function HomeSection() {
  return (
    <section className="flex lg:hidde flex-col w-11/12 justify-center items-center mb-14 mt-6">
      <div className="text-left self-start text-xl sm:text-2xl md:text-3xl w-full font-bold text-primary">
        Você não precisa conviver com a dor
        <br />
        <span className="italic text-lg sm:text-xl md:text-2xl font-normal">
          A mudança começa com um cuidado certo e personalizado.
        </span>
      </div>

      <div className="relative h-[calc(100lvh-240px)] w-full bg-primary rounded-lg mt-4 z-40 transition-all duration-300 hover:scale-105 hover:mt-6">
        <Badge className="absolute top-4 left-4 z-50 text-secondary bg-softWhite text-[0.65rem] sm:text-sm md:text-base lg:text-lg hover:bg-softWhite">
          Atendimento presencial ou online • Você escolhe
        </Badge>

        <div className="absolute top-20 left-4 z-50 flex flex-col gap-4 text-base md:text-xl lg:text-2xl text-softWhite font-bold">
          <div className="relative w-fit">
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-primary z-30 blur-sm"></div>
            <div className="relative z-40">+9 anos de experiência clínica</div>
          </div>

          <div className="relative w-fit">
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-primary z-30 blur-sm"></div>
            <div className="relative z-40">
              Especialista no tratamento da dor
            </div>
          </div>

          <div className="relative w-fit">
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-primary z-30 blur-sm"></div>
            <div className="relative z-40">Corredor</div>
          </div>
        </div>

        <Button className="absolute top-60 left-4 z-40 w-4/12 bg-primary hover:bg-softWhite hover:text-primary hover:border-2 hover:border-primary hidden md:flex">
          Agende uma consulta
        </Button>

        <div className="absolute bottom-4 left-4 z-50">
          <div className="absolute left-0 bottom-0 w-full h-1/2 bg-primary z-30 blur-sm"></div>

          <div className="relative text-softWhite font-bold text-base sm:text-2xl md:text-3xl lg:text-4xl z-40">
            Lucas Abreu • Fisioterapeuta
          </div>
        </div>

        <div className="absolute z-10 inset-0 bg-primary opacity-30 rounded-lg flex" />
        <div className="absolute z-0 inset-0 bg-[url('/FotoStudio.jpg')] bg-right bg-cover rounded-lg flex" />

        <div className="relative w-full h-full">
          <Image
            src="/FotoHome3.png"
            alt="Lucas Abreu"
            width={600}
            height={600}
            className="object-contain absolute bottom-0 right-0 z-20 select-none pointer-events-none"
          />
        </div>
      </div>

      <Button className="w-3/4 bg-primary hover:bg-primary transition-all duration-300 hover:scale-110 md:hidden mt-10">
        Agende uma consulta
      </Button>
    </section>
  );
}
