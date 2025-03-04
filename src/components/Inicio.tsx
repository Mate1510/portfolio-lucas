import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Inicio() {
  return (
    <section className="relative w-full h-[calc(100vh-80px)] flex pr-8 lg:pr-24">
      {/* Lado esquerdo: Background image, overlay e conteúdo */}
      <div className="w-11/12 h-full bg-[url('/FotoStudio.jpg')] bg-center bg-cover pl-8 lg:pl-24 clip-triangle">
        {/* Overlay azul */}
        <div className="absolute inset-0 bg-primary opacity-30" />
        {/* Conteúdo da esquerda */}
        <div className="relative z-10 h-full flex flex-col justify-center max-w-lg p-6 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi.
          </h2>
          <Button className="bg-secondary w-1/2">Agende Sua Consulta</Button>
        </div>
      </div>

      {/* Lado direito: Imagem com corte diagonal */}
      <div className="absolute z-40 top-0 right-0 h-full w-[45%]">
        <Image src="/FotoPrincipal.png" alt="Lucas Abreu" fill />
      </div>
    </section>
  );
}
