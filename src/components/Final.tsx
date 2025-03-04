import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';
import Localizacao from './Localizacao';

export default function Final() {
  return (
    <section className="w-4/6 flex flex-wrap justify-between py-10">
      <div className="lg:w-[60%] w-full bg-primary px-6 rounded-lg">
        <Localizacao />
      </div>

      <div className="flex flex-col gap-20">
        <Card className="relative w-[360px] h-[150px] border-primary border-2 p-2">
          <CardHeader className="w-3/4">
            <CardTitle className="leading-8">Agende Seu Horário</CardTitle>
          </CardHeader>

          <CardFooter className="absolute z-40 bottom-0 right-0 flex justify-end">
            <div className="flex p-2 bg-primary rounded-full">
              <ArrowUpRight size={30} />
            </div>
          </CardFooter>
        </Card>

        <Card className="flex flex-col relative w-[360px] h-[250px] bg-primary border-black border-2 p-2 text-softWhite">
          <CardHeader className="flex flex-row gap-6">
            <Image src="/LogoHeader.svg" alt="Logo" width={80} height={80} />
            <CardTitle className="leading-10">Bem Estar é Movimentar</CardTitle>
          </CardHeader>

          <CardContent className="my-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna.
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
