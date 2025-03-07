'use client';

import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import Localizacao from './Localizacao';
import { Badge } from './ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import Fade from 'embla-carousel-fade';
import Link from 'next/link';

export default function Final() {
  return (
    <section className="w-4/6 flex flex-wrap justify-between py-10">
      <div className="lg:w-[60%] w-full bg-primary px-6 rounded-lg shadow-2xl">
        <Localizacao />
      </div>

      <div className="w-2/6 flex flex-col gap-4 justify-between">
        <Card className="relative h-[160px] border-primary border-2 p-2 transition-transform duration-300 hover:scale-105">
          <CardHeader className="flex flex-col w-[200px]">
            <Badge
              variant="outline"
              className="bg-primary text-softWhite w-fit"
            >
              Presencial ou On-line
            </Badge>
            <CardTitle className="leading-8">Agende Seu Horário</CardTitle>
          </CardHeader>

          <CardFooter className="absolute z-40 bottom-0 right-0 flex justify-end">
            <Link href="#">
              <div className="flex p-2 bg-primary rounded-full border-black border-2 transition-transform duration-300 hover:scale-110">
                <ArrowUpRight size={30} />
              </div>
            </Link>
          </CardFooter>
        </Card>

        <Carousel
          className="w-full hover:border-2 hover:border-primary rounded-lg overflow-auto transition-all duration-100 hover:shadow-md hover:shadow-black"
          plugins={[
            Autoplay({
              delay: 5000,
            }),
            Fade(),
          ]}
          opts={{ loop: true }}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center">
                      <Image
                        src={`/Carrossel/Foto${index + 1}.jpeg`}
                        alt="Fotos do Studio"
                        fill
                        className="object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Card className="flex flex-col relative  bg-primary border-black border-2 p-2 text-softWhite transition-transform duration-300 hover:scale-105">
          <CardHeader className="flex flex-row gap-6">
            <Image
              src="/LogoHeader.svg"
              alt="Logo"
              width={80}
              height={80}
              className="transition-transform duration-300 hover:scale-110"
            />
            <CardTitle className="leading-10">Bem Estar é Movimentar</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
