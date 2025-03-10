import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Separator } from './ui/separator';

export default function Inicio() {
  return (
    <section className="lg:flex hidden relative w-full lg:h-[calc(100dvh-80px)] md:h-[calc(100dvh-180px)] h-[calc(100dvh-200px)] bg-softWhite">
      {/* Overlay azul */}
      <div className="absolute z-10 inset-0 bg-primary opacity-30 lg:hidden" />
      {/* Overlay azul */}
      <div className="absolute z-10 inset-0 bg-primary opacity-30 clip-triangle lg:flex hidden" />
      {/* Fundo Studio */}
      <div className="absolute z-0 inset-0 bg-[url('/FotoStudio.jpg')] bg-right bg-cover clip-triangle lg:flex hidden" />
      {/* Fundo Studio */}
      <div className="absolute z-0 inset-0 bg-[url('/FotoStudio.jpg')] bg-right bg-cover lg:hidden" />

      {/* Versão mobile e tablet (empilhada) */}
      <div className="lg:hidden w-full z-20">
        <div className="relative w-full h-[50vh] z-50">
          <Image
            src="/FotoPrincipal.png"
            alt="Lucas Abreu"
            fill
            className="object-cover"
          />
        </div>

        <Separator className="my-4" />

        <div className="px-6 py-4 text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi.
          </h2>
          <Button className="bg-secondary w-1/2">Agende Sua Consulta</Button>
        </div>
      </div>

      {/* Versão desktop (lado a lado) */}
      <div className="hidden lg:flex w-full h-[calc(100dvh-80px)] z-20">
        {/* Lado esquerdo: Conteúdo */}
        <div className="w-1/2 flex items-center justify-center p-12">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-12 text-softWhite">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi.
            </h2>

            <Button
              variant={'secondary'}
              className="bg-primary text-softWhite w-1/2 h-[50px] hover:bg-softWhite hover:text-primary transition-all duration-300 hover:scale-110 hover:ml-4"
            >
              Agende Sua Consulta
            </Button>
          </div>
        </div>

        {/* Lado direito: Imagem */}
        <div className="w-1/2 relative z-50">
          <Image
            src="/FotoPrincipal.png"
            alt="Lucas Abreu"
            fill
            className="object-cover select-none pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
