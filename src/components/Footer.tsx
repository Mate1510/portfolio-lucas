import Image from 'next/image';
import { Separator } from './ui/separator';

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full h-40 bg-primary text-softWhite">
      <div className="flex flex-row">
        <div className="flex flex-row gap-1 items-center transition-all duration-300 hover:scale-110">
          <Image
            src="/LogoHeader.svg"
            alt="Logo Lucas Abreu"
            width={60}
            height={60}
          />
          <h1 className="font-bold text-lg">Lucas Abreu</h1>
        </div>

        <Separator orientation="vertical" className="mx-8 w-[2px]" />

        <div className="flex flex-row gap-4">
          <Image
            src="/Instagram.svg"
            alt="Logo Lucas Abreu"
            width={30}
            height={30}
            className="brightness-0 invert transition-all duration-300 hover:scale-125"
          />
          <Image
            src="/WhatsApp.svg"
            alt="Logo Lucas Abreu"
            width={30}
            height={30}
            className="brightness-0 invert transition-all duration-300 hover:scale-125"
          />
        </div>
      </div>

      <div className="absolute text-sm font-medium leading-none text-muted-foreground bottom-2">
        Criado por Mateus Abreu ₢ 2025
      </div>
    </footer>
  );
}
