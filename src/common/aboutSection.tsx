import Apresentation from "../components/Apresentation/apresentation";
import { GitHub } from "../components/Github/github";
import Jobs from "../components/Jobs/jobs";
import Projects from "../components/Projects/projects";
import Skills from "../components/Skills/skills";

export default function About() {
  return (
    <div className="flex flex-col justify-center gap-4 items-center py-32" id="about">
      <Apresentation />
      <Skills />
      <Jobs />
      <GitHub />
      <Projects />
    </div>
  );
}
