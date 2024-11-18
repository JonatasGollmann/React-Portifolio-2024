import MainTittle from "../titles/MainTittle";
import BlokotoBG from '/src/assets/blokotobt.png'
import BlokotoLogo from '/src/assets/blokoto_logo.svg'

export default function Projects() {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <MainTittle text="Projetos" />
      <div className="">
        <div className="relative mx-4 lg:w-[1000px] h-[500px]">
          <div className="size-full absolute bg-gradient-to-bl to-green-1 from-light-green-1 rounded-2xl mix-blend-color"></div>
          <img
            src={BlokotoLogo}
            className="absolute min-w-[220px] w-1/4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
          <a
            href="https://blokoto.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-[220px] absolute left-1/2 bottom-4 bg-light-green-1 p-3 rounded-xl -translate-x-1/2 -translate-y-1/2 text-sm font-bold text-green-3 hover:scale-110 transition-all shadow-xl hover:bg-green-1 hover:text-light-green-1"
          >
            Conheça mais sobre o Blokoto
          </a>
          <img
            src={BlokotoBG}
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
