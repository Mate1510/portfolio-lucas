import Image from 'next/image';
import Link from 'next/link';

export default function PopUpWhatsApp() {
  return (
    <div className="fixed bottom-6 right-8 z-50 flex items-center justify-center w-16 h-16 bg-primary rounded-full animate-customPulse">
      <Link
        href="https://wa.me/556499553122?text=Tenho%20interesse%20em%20marcar%20uma%20consulta"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/WhatsAppColor.svg"
          alt="Logo WhatsApp"
          width={50}
          height={50}
        />
      </Link>
    </div>
  );
}
