import Final from '@/components/Final';
import Footer from '@/components/Footer';
import HomeMobile from '@/components/HomeMobile';
import Inicio from '@/components/Inicio';
import PopUpWhatsApp from '@/components/PopUpWhatsApp';
import Servicos from '@/components/Servicos';
import Sobre from '@/components/Sobre';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Inicio />
      <HomeMobile />
      <Servicos />
      <Sobre />
      <Final />
      <Footer />
      <PopUpWhatsApp />
    </main>
  );
}
