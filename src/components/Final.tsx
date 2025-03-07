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
    <section className="lg:w-4/6 w-5/6 flex flex-wrap justify-between items-center pb-10">
      <div className="lg:w-[60%] h-fit w-full bg-primary lg:px-6 md:px-2 px-0 rounded-lg shadow-2xl">
        <Localizacao />
      </div>

      <div className="lg:w-2/6 w-full flex flex-col gap-4 justify-between  lg:p-0 pt-10">
        <Card className="relative border-primary border-2 p-2 transition-transform duration-300 hover:scale-105">
          <CardHeader className="flex flex-col lg:w-[200px] md:w-full w-[200px]">
            <Badge
              variant="outline"
              className="bg-primary text-softWhite md:text-xs text-[10px] w-fit"
            >
              Presencial ou On-line
            </Badge>
            <CardTitle className="leading-8 md:text-2xl text-xl">
              Agende Seu Horário
            </CardTitle>
          </CardHeader>

          <CardFooter className="absolute z-40 bottom-0 right-0 flex justify-end">
            <Link href="#">
              <div className="flex p-2 bg-primary rounded-full border-black border-2 transition-transform duration-300 hover:scale-110">
                <ArrowUpRight size={30} className="md:w-8 md:h-8 w-6 h-6" />
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

        <Card className="flex flex-col  bg-primary border-black border-2 p-2 text-softWhite transition-transform duration-300 hover:scale-105">
          <CardHeader className="flex flex-row lg:gap-6 gap-4 items-center justify-center">
            <Image
              src="/LogoHeader.svg"
              alt="Logo"
              width={80}
              height={80}
              className="transition-transform duration-300 hover:scale-110 md:h-[80px] md:w-[80px] h-[60px] w-[60px]"
            />
            <CardTitle className="leading-10 md:text-2xl text-lg">
              Bem Estar É Movimentar
            </CardTitle>
          </CardHeader>
        </Card>
      </div>
    </section>
  );
}
