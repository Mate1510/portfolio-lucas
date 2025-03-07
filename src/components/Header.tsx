'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky h-[80px] top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-24 py-2 shadow-md transition-transform duration-300 ${
        isScrolled ? 'bg-primary' : 'bg-softWhite'
      }`}
    >
      <div className="flex items-center gap-2 transition-transform duration-300 hover:scale-105">
        <div>
          <Image
            src={`${isScrolled ? '/LogoHeader.svg' : '/LogoEscura.svg'}`}
            alt="Logo Lucas Abreu"
            width={80}
            height={80}
          />
        </div>
        <h1
          className={`font-bold text-xl sm:text-2xl ${
            isScrolled ? 'text-softWhite' : 'text-primary'
          }`}
        >
          Lucas Abreu
        </h1>
      </div>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex gap-4 lg:gap-10 items-center">
        <Link
          href="#servicos"
          className={`transition-all duration-300 hover:scale-110 ${
            isScrolled
              ? 'text-softWhite hover:text-secondary'
              : 'text-primary hover:text-secondary'
          }`}
        >
          Serviços
        </Link>
        <Link
          href="#formacao"
          className={`transition-all duration-300 hover:scale-110 ${
            isScrolled
              ? 'text-softWhite hover:text-secondary'
              : 'text-primary hover:text-secondary'
          }`}
        >
          Formação
        </Link>

        <Button
          asChild
          variant={'outline'}
          className={`transition-all duration-300 hover:scale-110 ${
            isScrolled
              ? 'text-primary bg-softWhite hover:bg-primary hover:text-softWhite'
              : 'text-softWhite bg-primary hover:bg-softWhite hover:text-primary hover:border-1 hover:border-primary'
          }`}
        >
          <Link href="https://wa.me/" target="_blank">
            Agende Sua Consulta
          </Link>
        </Button>
      </nav>

      {/* Menu Mobile com Sheet */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600">
              <Menu
                className={`w-6 h-6 transition-all duration-300 hover:scale-110 ${
                  isScrolled ? 'text-primary' : 'text-softWhite'
                }`}
              />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <div className="flex flex-col space-y-4">
              <SheetClose asChild>
                <Link
                  href="#servicos"
                  className="text-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-transform duration-300"
                >
                  Serviços
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#formacao"
                  className="text-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-transform duration-300"
                >
                  Formação
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="https://wa.me/5599999999999"
                  className="block bg-blue-600 text-softWhite text-center px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 transition-all duration-300"
                >
                  Agende sua consulta
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
