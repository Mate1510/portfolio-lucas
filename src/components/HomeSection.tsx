import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function HomeSection() {
  return (
    <section className="flex lg:hidde flex-col w-11/12 justify-center items-center mb-14 mt-6">
      <div className="text-left self-start text-xl sm:text-2xl md:text-3xl w-full font-bold text-primary">
        Cuidar da dor é cuidar da vida
        <br />
        Agende sua consulta e comece a mudança hoje
      </div>

      <div className="relative h-[calc(100vh-240px)] w-full bg-primary rounded-lg mt-4 z-40 transition-all duration-300 hover:scale-105 hover:mt-6">
        <Badge className="absolute top-4 left-4 z-50 text-secondary bg-softWhite text-sm sm:text-base md:text-lg hover:bg-softWhite">
          Atendimento Presencial ou Online
        </Badge>

        <div className="absolute top-20 left-4 z-50 flex flex-col gap-4 text-xl md:text-2xl text-softWhite font-bold">
          <div className="relative w-fit">
            <div className="sm:flex hidden">
              <div className="absolute left-0 bottom-0 w-full h-1/2 bg-primary z-30 blur-sm"></div>

              <div className="relative z-40">
                Fisioterapeuta com 9 anos de experiência
              </div>
            </div>

            <div className="sm:hidden">
              <div className="absolute left-0 bottom-0 w-[118px] h-1/4 bg-primary z-30 blur-sm"></div>
              <div className="absolute left-0 bottom-7 w-full h-1/4 bg-primary z-30 blur-sm"></div>

              <div className="relative z-40 whitespace-nowrap">
                Fisioterapeuta com 9 anos de
              </div>

              <div className="relative z-40">experiência</div>
            </div>
          </div>

          <div className="relative w-fit">
            <div className="absolute left-0 bottom-0 w-full h-1/2 bg-primary z-30 blur-sm"></div>

            <div className="relative z-40">Especialista em dor</div>
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

          <div className="relative text-softWhite font-bold text-2xl sm:text-4xl z-40">
            Lucas Abreu
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
