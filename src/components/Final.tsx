import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Image from 'next/image';

export default function Final() {
  return (
    <section className="w-4/6 flex flex-wrap justify-between py-10">
      <Card className="w-1/2 bg-primary p-8">
        <CardHeader>
          <CardTitle>Depoimentos</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="flex justify-around">
            <ChevronLeft size={50} />

            <div className="w-11/12 h-full bg-white"></div>

            <ChevronRight size={50} />
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col gap-12">
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

        <Card className="flex flex-col relative w-[360px] h-[250px] bg-primary border-black border-2 p-2 text-white">
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
