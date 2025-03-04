import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function Servicos() {
  return (
    <section className="flex flex-col items-center bg-primary w-full py-8 p-24">
      <h2 className="text-4xl text-white font-bold my-6">Serviços</h2>

      <div className="flex flex-wrap gap-4 items-stretch justify-center">
        <Card className="flex flex-col w-[360px]  bg-primary text-white">
          <CardHeader className="flex flex-row gap-4 items-center">
            <Image
              src="/Fisio.png"
              alt="Ícone Fisioterapeuta"
              width={50}
              height={50}
            />
            <CardTitle>Fisioterapia</CardTitle>
          </CardHeader>

          <CardContent className="flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </CardContent>

          <CardFooter className="mt-auto">
            Lorem ipsum dolor sit amet.
          </CardFooter>
        </Card>

        <Card className="flex flex-col w-[360px] bg-primary text-white">
          <CardHeader className="flex flex-row gap-4 items-center">
            <Image
              src="/Run.png"
              alt="Ícone Fisioterapeuta"
              width={50}
              height={50}
            />
            <CardTitle>Avaliação da Corrida</CardTitle>
          </CardHeader>

          <CardContent className="flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris. Pellentesque
            sit amet sapien fringilla, mattis ligula consectetur, ultrices
            mauris.
          </CardContent>

          <CardFooter className="mt-auto">
            Lorem ipsum dolor sit amet.
          </CardFooter>
        </Card>

        <Card className="flex flex-col w-[360px] bg-primary text-white">
          <CardHeader className="flex flex-row gap-4 items-center">
            <Image
              src="/DorLombar.png"
              alt="Ícone Fisioterapeuta"
              width={50}
              height={50}
            />
            <CardTitle>Tratamento da Dor</CardTitle>
          </CardHeader>

          <CardContent className="flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </CardContent>

          <CardFooter className="mt-auto">
            Lorem ipsum dolor sit amet.
          </CardFooter>
        </Card>

        <Card className="flex flex-col w-[360px] bg-primary text-white">
          <CardHeader className="flex flex-row gap-4 items-center">
            <Image
              src="/Fisio.png"
              alt="Ícone Fisioterapeuta"
              width={50}
              height={50}
            />
            <CardTitle>Recovery</CardTitle>
          </CardHeader>

          <CardContent className="flex-grow">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
            mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
            fringilla, mattis ligula consectetur, ultrices mauris.
          </CardContent>

          <CardFooter className="mt-auto">
            Lorem ipsum dolor sit amet.
          </CardFooter>
        </Card>
      </div>

      <div className="text-white text-xl text-center mt-10 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
        Aliquam in hendrerit urna.
      </div>
    </section>
  );
}
