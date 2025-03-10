import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export default function HomeMobile() {
  return (
    <section className="flex lg:hidden flex-col w-11/12 justify-center items-center mb-10 mt-6">
      <div className="text-left self-start text-xl sm:text-2xl md:text-3xl w-full font-bold text-primary">
        Cuidar da dor é cuidar da vida
        <br />
        Agende sua consulta e comece a mudança hoje
      </div>

      <div className="relative h-[calc(100dvh-240px)] w-full bg-primary rounded-lg mt-4 mb-10 z-40 transition-all duration-300 hover:scale-105">
        <Badge className="absolute top-4 left-4 z-50 text-secondary bg-softWhite text-[0.6rem] hover:bg-softWhite">
          CREFITO 249413 F
        </Badge>

        <div className="absolute bottom-4 left-4 bg-primary border-softWhite border-2 px-2 rounded-lg z-50 text-softWhite font-bold text-lg">
          Lucas Abreu
        </div>

        <div className="absolute inset-0 bottom-0">
          <Image
            src="/FotoHome3.png"
            alt="Lucas Abreu"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <Button className="w-3/4 bg-primary hover:bg-primary transition-all duration-300 hover:scale-110">
        Agende uma consulta
      </Button>
    </section>
  );
}
