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
    <section
      className="flex flex-col items-center justify-center bg-primary w-full py-6 lg:px-24"
      id="servicos"
    >
      <h2 className="text-4xl text-softWhite font-bold my-6 w-fit text-center">
        Cuidado personalizado para sua saúde e performance
      </h2>

      <div className="flex flex-wrap gap-4 lg:gap-10 items-stretch justify-center">
        {/* <Card className="flex flex-col w-[290px]  bg-primary text-softWhite transition-all duration-300 hover:scale-110">
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

          <CardFooter className="mt-auto font-bold">
            Lorem ipsum dolor sit amet.
          </CardFooter>
        </Card> */}

        <Card className="flex flex-col max-w-[350px] bg-primary text-softWhite transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:m-2">
          <CardHeader className="flex flex-row gap-4 items-center">
            <Image
              src="/Run.png"
              alt="Ícone Fisioterapeuta"
              width={50}
              height={50}
            />
            <CardTitle>Avaliação Biomecânica da Corrida</CardTitle>
          </CardHeader>

          <CardContent className="flex-grow">
            Identifique e corrija padrões de movimento que podem causar lesões e
            limitar sua performance. Atendimento presencial ou on-line — de
            qualquer lugar do Brasil e do mundo.
          </CardContent>

          <CardFooter className="mt-auto font-bold">
            Corra melhor, com mais segurança
          </CardFooter>
        </Card>

        <Card className="flex flex-col max-w-[350px] bg-primary text-softWhite transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:m-2">
          <CardHeader className="flex flex-row gap-4 items-center">
            <Image
              src="/DorLombar.png"
              alt="Ícone Fisioterapeuta"
              width={50}
              height={50}
            />
            <CardTitle>Tratamento Personalizado da Dor</CardTitle>
          </CardHeader>

          <CardContent className="flex-grow">
            Alívio e tratamento eficaz para dores musculares e articulares.
            Protocolos baseados em evidência, adaptados à sua rotina e
            necessidades.
          </CardContent>

          <CardFooter className="mt-auto font-bold">
            Recupere sua qualidade de vida
          </CardFooter>
        </Card>

        <Card className="flex flex-col max-w-[350px] min-h-[300px] bg-primary text-softWhite transition-all duration-300 hover:scale-105 md:hover:scale-110 hover:m-2">
          <CardHeader className="flex flex-row gap-4 items-center">
            <Image
              src="/Fisio.png"
              alt="Ícone Fisioterapeuta"
              width={50}
              height={50}
            />
            <CardTitle>Fisioterapia Recovery</CardTitle>
          </CardHeader>

          <CardContent className="flex-grow">
            Técnicas avançadas para recuperação muscular, pré e pós-treino ou
            prova. Ideal para atletas e praticantes de atividade física que
            querem manter a performance com menos dor.
          </CardContent>

          <CardFooter className="mt-auto font-bold">
            Recupere mais rápido, treine melhor
          </CardFooter>
        </Card>
      </div>

      <div className="text-softWhite text-xl text-center mt-10 mb-2 px-6">
        Escolha o cuidado que você merece e dê o próximo passo rumo ao
        bem-estar.
      </div>
    </section>
  );
}
