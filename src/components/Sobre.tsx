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
                CREFITO 249413 F
              </Badge>
            </CardHeader>

            <CardContent className="lg:w-10/12 w-full text-justify text-lg">
              Olá, sou Lucas Abreu, fisioterapeuta com 9 anos de experiência e
              especialista no tratamento da dor. Atendo pacientes com dor
              crônica e corredores, unindo conhecimento técnico com uma
              abordagem humana e individualizada. Como corredor, entendo na
              prática os desafios do movimento e acredito que, com o cuidado
              certo, é possível viver com mais autonomia, qualidade de vida e
              menos dor.
              <div className="flex flex-col mt-6">
                <span className="font-bold">Minha Formação:</span>
                <ul className="list-disc pl-5 flex flex-col flex-wrap">
                  <li>
                    Bacharel em Fisioterapia - Universidade de Rio Verde (UniRV)
                  </li>
                  <li>Avaliação Biomecânica da Corrida</li>
                  <li>
                    Avaliação e Tratamento da Escoliose Baseado em Evidências
                  </li>
                  <li>Abordagem Biopsicossocial da Dor</li>
                  <li>Sistema de Classificação em Subgrupos</li>
                </ul>
              </div>
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
          Atendo pacientes com dor crônica, casos ortopédicos e corredores desde
          2016
          <br />
          Em clínica própria, presencial e online
        </CardFooter>
      </Card>
    </section>
  );
}
