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
    <section className="relative" id="sobremim">
      <Card className="lg:w-4/6 w-5/6 mx-auto my-10 border-primary bg-transparent lg:p-2">
        <CardHeader>
          <Image
            src="/FotoPerfil.png"
            alt="Foto Perfil Lucas Abreu"
            width={200}
            height={200}
            className="sm:hidden z-40 rounded-sm border-primary border-2 self-center mb-4"
          />

          <CardTitle>
            Conheça o profissional que vai te ajudar a viver com menos dor
          </CardTitle>
          <Badge variant="outline" className="bg-primary text-softWhite w-fit">
            Fisioterapeuta • CREFITO 249413-F
          </Badge>
        </CardHeader>

        <CardContent className="lg:w-9/12 2xl:w-10/12 w-full text-justify text-lg">
          <Image
            src="/FotoPerfil.png"
            alt="Foto Perfil Lucas Abreu"
            width={220}
            height={220}
            className="float-right lg:absolute lg:top-24 lg:right-[14%] z-40 rounded-sm border-primary border-2 ml-4 hidden sm:flex h-fit"
          />

          <div>
            Olá, sou Lucas Abreu, fisioterapeuta com 9 anos de experiência e
            especialista no tratamento da dor. Minha missão é ajudar pessoas a
            se moverem com mais liberdade, autonomia e bem-estar.
            <br />
            Ao longo da minha trajetória, atendi centenas de pacientes com dor
            crônica, lesões musculoesqueléticas e corredores amadores e
            profissionais. Como corredor, entendo na prática os desafios do
            movimento — e é por isso que trago uma abordagem técnica, empática e
            personalizada para cada caso.
            <br />
            Acredito que, com o cuidado certo, você pode viver com mais
            qualidade de vida e menos dor — seja no consultório ou à distância.
          </div>

          <div className="flex flex-col mt-6">
            <span className="font-bold">Formação e Especializações:</span>
            <ul className="list-disc pl-5 flex flex-col flex-wrap">
              <li>
                Bacharel em Fisioterapia - Universidade de Rio Verde (UniRV)
              </li>
              <li>Avaliação Biomecânica da Corrida</li>
              <li>Avaliação e Tratamento da Escoliose Baseado em Evidências</li>
              <li>Abordagem Biopsicossocial da Dor</li>
              <li>Sistema de Classificação em Subgrupos</li>
            </ul>
          </div>
        </CardContent>

        <CardFooter className="lg:w-5/6 w-full flex">
          Atendimento especializado em dor crônica, reabilitação ortopédica e
          biomecânica da corrida.
          <br />
          Presencial na clínica própria ou on-line — com acolhimento, escuta e
          tratamento individualizado.
          <br />
          Desde 2016 cuidando de quem busca mais saúde e movimento.
        </CardFooter>
      </Card>
    </section>
  );
}
