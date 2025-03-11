'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PopUpWhatsApp() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`lg:w-[75px] lg:h-[75px] md:w-[60px] md:h-[60px] w-[40px] h-[40px] fixed md:bottom-6 md:right-8
    bottom-4 right-4 z-50 items-center justify-center bg-primary border-2 border-softWhite rounded-full
    animate-customPulse transition-all duration-300 ${
      isScrolled ? 'flex' : 'hidden'
    }`}
    >
      <Link
        href="https://wa.me/556499553122?text=Tenho%20interesse%20em%20marcar%20uma%20consulta"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1 md:p-2 rounded-full"
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
