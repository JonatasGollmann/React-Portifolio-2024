import "./skills.css";

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
    <div className="linguagens">
      {linguagens.map((item: any, index: number) => (
        <div key={index} className="iconMain">
          <i className={item.icon}></i>
          <p className="tittleIcon">{item.name}</p>
        </div>
      ))}
    </div>
  );
}
