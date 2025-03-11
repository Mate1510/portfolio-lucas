'use client';

import Link from 'next/link';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetFooter,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Função para lidar com cliques em links de âncora
  const handleAnchorClick = (e: any, targetId: any) => {
    e.preventDefault();

    // Fecha o sheet primeiro
    setIsOpen(false);

    // Pequeno atraso para garantir que o sheet feche antes do scroll
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback para o método href normal se o elemento não for encontrado
        window.location.href = `#${targetId}`;
      }
    }, 100);
  };

  return (
    <header className="sticky h-[80px] top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-24 py-2 shadow-md transition-transform duration-300 bg-primary">
      <div className="flex flex-row items-center gap-1 lg:gap-2 transition-transform duration-300 hover:scale-105">
        <div>
          <Image
            src="/LogoHeader.svg"
            alt="Logo Lucas Abreu"
            width={100}
            height={100}
            className="w-fit h-[30px] md:h-[40px] lg:h-[60px]"
          />
        </div>
        <h1 className="font-bold text-xl sm:text-2xl lg:text-3xl text-softWhite ">
          Lucas Abreu
        </h1>
      </div>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex gap-4 lg:gap-10 items-center text-softWhite lg:font-bold text-sm lg:text-lg w-fit">
        <Link
          href="#servicos"
          className="transition-all duration-300 hover:scale-110 hover:text-secondary"
        >
          Serviços
        </Link>

        <Link
          href="#sobremim"
          className="transition-all duration-300 hover:scale-110 hover:text-secondary"
        >
          Sobre Mim
        </Link>

        <Link
          href="#studio"
          className="transition-all duration-300 hover:scale-110 hover:text-secondary"
        >
          Studio L2
        </Link>

        <Button
          asChild
          variant={'outline'}
          className="transition-all duration-300 hover:scale-110 text-primary border-2 border-primary bg-softWhite
          hover:bg-primary hover:border-2 hover:border-softWhite hover:text-softWhite hover:mx-2 text-sm lg:text-lg p-2 lg:p-4 ml-2"
        >
          <Link
            href="https://wa.me/556499553122?text=Tenho%20interesse%20em%20marcar%20uma%20consulta"
            target="_blank"
          >
            Agende Sua Consulta
          </Link>
        </Button>
      </nav>

      {/* Menu Mobile com Sheet */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
              <Menu className="w-7 h-7 transition-all duration-300 hover:scale-110 text-softWhite" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="p-8 py-14 h-full">
            <div className="flex flex-col justify-between h-full">
              <nav className="flex flex-col space-y-4 text-lg text-primary font-bold">
                <a
                  href="#servicos"
                  className="transition-all duration-300 hover:scale-110 hover:text-secondary"
                  onClick={(e) => handleAnchorClick(e, 'servicos')}
                >
                  Serviços
                </a>

                <a
                  href="#sobremim"
                  className="transition-all duration-300 hover:scale-110 hover:text-secondary"
                  onClick={(e) => handleAnchorClick(e, 'sobremim')}
                >
                  Sobre mim
                </a>

                <a
                  href="#studio"
                  className="transition-all duration-300 hover:scale-110 hover:text-secondary"
                  onClick={(e) => handleAnchorClick(e, 'studio')}
                >
                  Studio L2
                </a>
              </nav>

              <SheetFooter>
                <SheetClose asChild>
                  <Button
                    asChild
                    className="transition-all duration-300 hover:scale-110 text-softWhite border-2 border-primary
                    bg-primary hover:border-2 hover:border-primary hover:text-primary hover:bg-softWhite hover:mx-2
                    text-sm p-2 mt-auto"
                  >
                    <Link
                      href="https://wa.me/556499553122?text=Tenho%20interesse%20em%20marcar%20uma%20consulta"
                      target="_blank"
                    >
                      Agende Sua Consulta
                    </Link>
                  </Button>
                </SheetClose>
              </SheetFooter>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
