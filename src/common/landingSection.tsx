import { GithubIcon, Linkedin, Mail } from "lucide-react";

export default function Landing() {
  return (
    <div className="flex relative flex-col items-center justify-center w-full h-[80vh] bg-gradient-to-br from-white-1 to-white-2 shadow-md">
      <div className="flex flex-col items-end">
        <h1 className="text-6xl font-extrabold text-green-1 ">
          Jonatas<br></br>Gollmann
        </h1>
        <h2>Web Developer</h2>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 bottom-5  flex items-center gap-6 *:h-10 *:w-10 *:rounded-md  *:text-black-1 *:flex *:items-center *:justify-center *:transition-all ">
        <a
          className="hover:bg-green-1 hover:text-white-2 hover:shadow-xl relative group transition-all duration-300"
          href="https://www.linkedin.com/in/jonatas-gollmann/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin />
          <p className="absolute opacity-0 -bottom-2 group-hover:opacity-100 group-hover:text-green-1 group-hover:-bottom-8 transition-all duration-300">
            LinkedIn
          </p>
        </a>
        <a
          className="hover:bg-green-1 hover:text-white-2 hover:shadow-xl relative group transition-all duration-300"
          href="https://github.com/jonatasGollmann/"
          rel="noopener noreferrer"
        >
          <GithubIcon />
          <p className="absolute opacity-0 -bottom-2 group-hover:opacity-100 group-hover:text-green-1 group-hover:-bottom-8 transition-all duration-300">Github</p>
        </a>
        <a
          className="hover:bg-green-1 hover:text-white-2 hover:shadow-xl relative group transition-all duration-300"
          href="mailto:jonatasgollmann@gmail.com?subject=Contato pelo Site"
        >
          <Mail />
          <p className="absolute opacity-0 -bottom-2 group-hover:opacity-100 group-hover:text-green-1 group-hover:-bottom-8 transition-all duration-300">Email</p>
        </a>
      </div>
    </div>
  );
}
