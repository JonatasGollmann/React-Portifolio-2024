import Apresentation from "../components/apresentation/apresentation";
import { GitHub } from "../components/github/github";
import Jobs from "../components/jobs/jobs";
import Projects from "../components/projects/projects";
import Skills from "../components/skills/skills";

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
