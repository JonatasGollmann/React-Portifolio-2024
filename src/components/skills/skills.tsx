import MainTittle from "../titles/MainTittle";

const linguagens = [
  { id: 0, name: "Git", icon: "devicon-git-plain" },
  { id: 1, name: "Figma", icon: "devicon-figma-plain" },
  { id: 3, name: "Photoshop", icon: "devicon-photoshop-plain" },
  { id: 4, name: "HTML", icon: "devicon-html5-plain" },
  { id: 5, name: "CSS", icon: "devicon-css3-plain" },
  { id: 6, name: "JavaScript", icon: "devicon-javascript-plain" },
  { id: 7, name: "TypeScript", icon: "devicon-typescript-plain" },
  { id: 8, name: "Svelte", icon: "devicon-svelte-plain" },
  { id: 9, name: "React", icon: "devicon-react-original" },
  { id: 10, name: "Python", icon: "devicon-python-plain" },
  { id: 11, name: "Taildwind", icon: "devicon-tailwindcss-plain" },
];

export default function Skills() {
  return (
    <div className="flex flex-col justify-center items-center gap-4 mb-28">
      <MainTittle text="Habilidades" />
      <div className="flex justify-center items-center h-28 max-lg:mx-8 lg:w-[1000px] gap-2 bg-gradient-to-tl to-green-2 from-green-3 rounded-lg shadow-2xl text-light-green-1 max-md:flex-wrap max-md:h-auto ">
        {linguagens.map((item: any, index: number) => (
          <div
            key={index}
            className="flex flex-col justify-center gap-2 items-center size-20 hover:scale-110 hover:bg-green-1 rounded-md transition-all hover:text-light-green-2"
          >
            <i className={`text-2xl ${item.icon}`}></i>
            <p className="text-sm">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
