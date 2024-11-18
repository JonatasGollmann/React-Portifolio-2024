import { ITextosApresentacao } from "../../utils/interfaces";
import MainTittle from "../Titles/MainTittle";

const textosApresentacao: ITextosApresentacao[] = [
  {
    id: 0,
    text: "Olá, sou Jonatas, tenho 21 anos e sou um entusiasta do mundo da programação, sou apaixonado em desenvolver e trazer vida os designs e criar aplicações cativantes para os usuários.",
    extraClasses: "text-lg font-bold text-green-3",
  },
  {
    id: 1,
    text: "Minha jornada na computação começou com a curiosidade e o fascínio pela tecnologia desde a minha infância. Desde então, mergulhei no universo do desenvolvimento web, buscando constantemente aprender as tecnologias mais aplicadas no mercado de trabalho na área. Cada linha de código é uma oportunidade de aprimorar não apenas minhas habilidades técnicas, mas também minha criatividade.",
  },
  {
    id: 2,
    text: "Estou pronto para colaborar, aprender e contribuir com uma equipe dinâmica e inovadora gerando produtos que encatem e facilitem a vida dos usuários. Atualmente, sou estudante de Engenharia da Computação e atuo principalmente na parte de desenvolvimento Front-End, criando aplicações com React, Svelte e outras tecnologias. Além de me aventurar em outras linguagens como C#, Python e PHP.",
  },
];

export default function Apresentation() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-28">
      <MainTittle text="Quem sou eu?" />
      <div className="flex flex-col gap-16 max-md:mx-10">
        {textosApresentacao.map((item: ITextosApresentacao) => (
          <section key={item.id} className="max-w-[1000px] text-center">
            <p className={item.extraClasses}>{item.text}</p>
          </section>
        ))}
      </div>
    </div>
  );
}
