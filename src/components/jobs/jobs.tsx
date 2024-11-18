import PMSCSLogo from "/src/assets/pmscs_logo.png";
import BKTLogo from "/src/assets/blokoto_logo.svg";
import MainTittle from "../titles/MainTittle";

export default function Jobs() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-28">
      <MainTittle text="Experiência Profissional" />
      <div className="lg:w-[1000px] grid gap-16">
        <div className="max-lg:mx-4 h-48 p-4 flex justify-between relative items-center rounded-xl shadow-xl bg-white-3 overflow-hidden">
          <img src={PMSCSLogo} alt="" className="max-md:w-20 max-md:mx-1 w-40 z-10 mx-8 object-cover" />
          <section className="z-10 w-3/5 lg:w-[500px]">
            <h2 className="lg:text-xl font-bold text-green-3">Estagiário em TI | Junho 2024 - Atualmente</h2>
            <h3 className="font-bold text-green-3">Secretaria de Saúde de Santa Cruz do Sul</h3>
            <p className="text-justify max-md:hidden text-sm">
              Realizo atividades como manutenção, atualização e instalação de
              computadores e outros dispositivos. Suporte aos servidores
              públicos da Secretária de Saúde(...)
            </p>
          </section>
          <div className="max-md:-translate-x-3/4 bg-green-2 rounded-full -translate-x-1/4 size-96 absolute"></div>
        </div>
        <div className="max-lg:mx-4 h-48 p-4 max-md:w-auto flex justify-between relative items-center rounded-xl shadow-xl bg-white-3 overflow-hidden">
          <img src={BKTLogo} alt="" className="max-md:w-20 max-md:mx-1 w-40 z-10 mx-8 object-cover" />
          <section className="z-10 w-3/5 lg:w-[500px]">
            <h2 className="lg:text-xl font-bold text-green-3">Desenvolvedor Voluntário | 2022 - Atualmente</h2>
            <h3 className="font-bold text-green-3">BLOKOTO</h3>
            <p className="text-justify text-sm max-md:hidden">
              Auxílio no desenvolvimento de features do site, na idealização e
              organização do projeto utilizando Svelte e outras tecnologias.
            </p>
          </section>
          <div className="max-md:-translate-x-3/4 bg-light-green-1 rounded-full -translate-x-1/4 size-96 absolute"></div>
        </div>
      </div>
    </div>
  );
}
