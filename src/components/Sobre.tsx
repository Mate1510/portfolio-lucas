import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Badge } from './ui/badge';

export default function Sobre() {
  return (
    <section className="relative" id="formacao">
      <Card className="lg:w-4/6 w-5/6 mx-auto my-10 border-primary bg-transparent lg:p-2">
        <div className="flex">
          <div>
            <CardHeader>
              <Image
                src="/FotoPerfil.png"
                alt="Foto Perfil Lucas Abreu"
                width={200}
                height={200}
                className="sm:hidden z-40 rounded-sm border-primary border-2 self-center mb-4"
              />

              <CardTitle>Conheça Lucas Abreu</CardTitle>
              <Badge
                variant="outline"
                className="bg-primary text-softWhite w-fit"
              >
                Crefito-1234
              </Badge>
            </CardHeader>

            <CardContent className="lg:w-10/12 w-full text-justify text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
              massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
              fringilla, mattis ligula consectetur, ultrices mauris. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Ut et massa mi.
              Aliquam in hendrerit urna.
            </CardContent>
          </div>

          <Image
            src="/FotoPerfil.png"
            alt="Foto Perfil Lucas Abreu"
            width={220}
            height={220}
            className="lg:absolute lg:top-24 lg:right-44 z-40 rounded-sm border-primary border-2 m-4 hidden md:flex"
          />
        </div>

        <CardFooter className="lg:w-5/6 w-full flex">
          <ul className="list-disc pl-4 flex flex-col flex-wrap md:h-28 lg:gap-x-12 gap-x-24">
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>

            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
            <li>Lorem ipsum dolor</li>
          </ul>
        </CardFooter>
      </Card>
    </section>
  );
}
