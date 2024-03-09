import "./about.css";
import Skills from "./skills/skills";

export default function About() {
  return (
    <div className="sobreContainer" id="#sobre">
      <div className="sobreContent">
        <h1 className="tittle">Quem sou eu?</h1>
        <div className="apresentacao">
          <div className="resume">
            <i className="ri-user-2-line"></i>
            <p>
              Olá, sou Jonatas, tenho 21 anos e sou um entusiasta do mundo da
              programação, sou apaixonado em desenvolver e trazer vida os
              designs e criar aplicações cativantes para os usuarios. Minha
              jornada na computação começou com a curiosidade e o fascínio pela
              tecnologia desde a minha infância. Desde então, mergulhei no
              universo do desenvolvimento web, buscando constantemente aprender
              as tecnologias mais aplicadas no mercado de trabalho na área. Em
              busca da minha primeira oportunidade no campo, estou determinado a
              aplicar meu conhecimento em projetos reais. Cada linha de código é
              uma oportunidade de aprimorar não apenas minhas habilidades
              técnicas, mas também minha criatividade.
            </p>
          </div>
          <div className="education">
           <i className="ri-book-line"></i>
            <p>
              Minha jornada como desenvolvedor é uma mistura emocionante de
              aprendizado constante, resolução de problemas e a busca incansável
              pela excelência na entrega de produtos que encantem e facilitem a
              vida dos usuários. Estou pronto para colaborar, aprender e
              contribuir com uma equipe dinâmica e inovadora. Atualmente, sou
              estudante de Engenharia da Computação e atuo principalmente na
              parte de desenvolvimento Front-End, criando aplicações com React,
              Svelte e outras tecnologias. Além de me aventurar em outras
              linguagens como C#, Python e PHP.
            </p>
          </div>
        </div>
      </div>
      <div className="conhecimentos">
        <h2 className="tittle">O que possuo conhecimentos</h2>
        <Skills />
      </div>
    </div>
  );
}
