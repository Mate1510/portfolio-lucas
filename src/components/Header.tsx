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
  return (
    <header className="sticky top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-24 py-2 bg-primary shadow-lg shadow-black/30">
      <div className="flex items-center">
        <Image
          src="/LogoHeader.svg"
          alt="Logo Lucas Abreu"
          width={100}
          height={100}
        />
        <h1 className="font-bold text-xl sm:text-2xl pl-4 text-softWhite">
          Lucas Abreu
        </h1>
      </div>

      {/* Navegação Desktop */}
      <nav className="hidden md:flex space-x-4 lg:space-x-10 items-center">
        <Link href="#" className="text-softWhite hover:text-secondary">
          Serviços
        </Link>
        <Link href="#" className="text-softWhite hover:text-secondary">
          Formação
        </Link>

        <Button asChild className="text-softWhite bg-secondary">
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
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="p-4">
            <div className="flex flex-col space-y-4">
              <SheetClose asChild>
                <Link
                  href="#servicos"
                  className="text-lg text-gray-700 hover:text-blue-600"
                >
                  Serviços
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="#formacao"
                  className="text-lg text-gray-700 hover:text-blue-600"
                >
                  Formação
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="https://wa.me/5599999999999"
                  className="block bg-blue-600 text-white text-center px-4 py-2 rounded hover:bg-blue-700 transition"
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
