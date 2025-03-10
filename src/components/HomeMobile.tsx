import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function HomeMobile() {
  return (
    <section className="flex lg:hidden flex-col w-11/12 justify-center items-center mb-20 mt-6">
      <div className="text-left self-start text-xl sm:text-2xl md:text-3xl w-full font-bold text-primary">
        Cuidar da dor é cuidar da vida
        <br />
        Agende sua consulta e comece a mudança hoje
      </div>

      <div className="relative h-[calc(100dvh-240px)] w-full bg-primary rounded-lg mt-4 mb-12 z-40 transition-all duration-300 hover:scale-105 hover:mt-6">
        <Badge className="absolute top-4 left-4 z-50 text-secondary bg-softWhite text-sm sm:text-base md:text-lg hover:bg-softWhite">
          Atendimento Presencial ou Online
        </Badge>

        <div className="absolute top-20 left-4 z-50 flex flex-col gap-4 text-xl md:text-2xl text-softWhite font-bold">
          <div>
            <div className="absolute left-0 bottom-0 w-full h-4/6 bg-primary z-30"></div>
            Fisioterapeuta com 9 anos de experiência
          </div>
          <div>Especialista em dor</div>
          <div>Corredor</div>
        </div>

        <div className="absolute bottom-4 left-4 z-50">
          <div className="absolute -left-1 -bottom-1 w-full h-4/6 bg-primary z-30"></div>

          <div className="relative text-softWhite font-bold text-2xl sm:text-4xl z-40">
            Lucas Abreu
          </div>
        </div>

        <div className="absolute z-10 inset-0 bg-primary opacity-30 rounded-lg hidden sm:flex" />
        <div className="absolute z-0 inset-0 bg-[url('/FotoStudio.jpg')] bg-right bg-cover rounded-lg hidden sm:flex" />

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

      <Button className="w-3/4 bg-primary hover:bg-primary transition-all duration-300 hover:scale-110">
        Agende uma consulta
      </Button>
    </section>
  );
}
