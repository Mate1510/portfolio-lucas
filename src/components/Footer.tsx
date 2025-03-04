import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center w-full h-40 bg-primary text-white">
      <div className="flex flex-row">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/LogoHeader.svg"
            alt="Logo Lucas Abreu"
            width={60}
            height={60}
          />
          <h1 className="font-bold text-lg pl-2">Lucas Abreu</h1>
        </div>

        {/* <div className="w-0 border-r-2 border-white mx-6"></div> */}

        <div className="flex flex-row gap-4 ">
          {/* <Image
            src="/Instagram.svg"
            alt="Logo Lucas Abreu"
            width={30}
            height={30}
            className="brightness-0 invert"
          />
          <Image
            src="/WhatsApp.svg"
            alt="Logo Lucas Abreu"
            width={30}
            height={30}
            className="brightness-0 invert"
          /> */}
        </div>
      </div>

      <div className="absolute text-sm font-medium leading-none text-muted-foreground bottom-2">
        Criado por Mateus Abreu ₢ 2025
      </div>
    </footer>
  );
}
