import Image from 'next/image';
import { Separator } from './ui/separator';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full lg:h-40 md:h-36 h-28 bg-primary text-softWhite">
      <div className="flex flex-row mt-8 mb-10">
        <div className="flex flex-row gap-1 items-center transition-all duration-300 hover:scale-110">
          <Image
            src="/LogoHeader.svg"
            alt="Logo Lucas Abreu"
            width={60}
            height={60}
            className="lg:h-[60px] lg:w-[60px] md:h-[50px] md:w-[50px] h-[40px] w-[40px]"
          />
          <h1 className="font-bold lg:text-lg md:text-base text-sm">
            Lucas Abreu
          </h1>
        </div>

        <Separator
          orientation="vertical"
          className="lg:mx-8 md:mx-4 mx-2 w-[2px]"
        />

        <div className="flex flex-row md:gap-4 gap-2 items-center">
          <Link
            href="https://www.instagram.com/lucasabreufisio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/Instagram.svg"
              alt="Logo Lucas Abreu"
              width={30}
              height={30}
              className="md:h-[30px] md:w-[30px] h-[25px] w-[25px] brightness-0 invert transition-all duration-300 hover:scale-125"
            />
          </Link>

          <Link
            href="https://wa.me/556499553122?text=Tenho%20interesse%20em%20marcar%20uma%20consulta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/WhatsApp.svg"
              alt="Logo Lucas Abreu"
              width={30}
              height={30}
              className="md:h-[30px] md:w-[30px] h-[25px] w-[25px] brightness-0 invert transition-all duration-300 hover:scale-125"
            />
          </Link>
        </div>
      </div>

      <div className="absolute md:text-sm text-xs font-medium leading-none text-muted-foreground bottom-1">
        Mateus Abreu © 2025
      </div>
    </footer>
  );
}
