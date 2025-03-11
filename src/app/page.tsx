import Final from '@/components/Final';
import Footer from '@/components/Footer';
import HomeSection from '@/components/HomeSection';
import PopUpWhatsApp from '@/components/PopUpWhatsApp';
import Servicos from '@/components/Servicos';
import Sobre from '@/components/Sobre';

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <HomeSection />
      <Servicos />
      <Sobre />
      <Final />
      <Footer />
      <PopUpWhatsApp />
    </main>
  );
}
