import Image from 'next/image';

export default function PopUpWhatsApp() {
  return (
    <div className="fixed bottom-6 right-8 z-50 flex items-center justify-center w-16 h-16 bg-primary rounded-full">
      <Image
        src="/WhatsAppColor.svg"
        alt="Logo WhatsApp"
        width={50}
        height={50}
      />
    </div>
  );
}
