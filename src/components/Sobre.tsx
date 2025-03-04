import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';

export default function Sobre() {
  return (
    <section className="relative">
      <Card className="w-4/6 mx-auto my-10 border-primary bg-transparent p-8">
        <CardHeader>
          <CardTitle>Conheça Lucas Abreu</CardTitle>
          <CardDescription>Crefito-1234</CardDescription>
        </CardHeader>

        <CardContent className="w-11/12 text-justify text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla,
          mattis ligula consectetur, ultrices mauris. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in
          hendrerit urna.
        </CardContent>

        <CardFooter className="w-5/6 flex gap-32 mt-8">
          <ul className="list-disc pl-4">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>

          <ul className="list-disc pl-4">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </CardFooter>
      </Card>

      <Image
        src="/FotoPerfil.png"
        alt="Foto Perfil Lucas Abreu"
        width={220}
        height={220}
        className="absolute z-40 rounded-sm border-primary border-2 top-24 right-32"
      />
    </section>
  );
}
