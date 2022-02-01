import {
  SiJava,
  SiPython,
  SiReact,
  SiSqlite,
  SiTypescript,
} from "react-icons/si";
import { SkillGraphProps } from "../Components/SkillGraph";

export const AnhSkills: SkillGraphProps = {
  skills: [
    {
      name: "Java",
      icon: <SiJava />,
      proficiency: "w-[75%]",
      percent: 75,
    },
    {
      name: "Python",
      icon: <SiPython />,
      proficiency: "w-[65%]",
      percent: 65,
    },
    {
      name: "SQLite",
      icon: <SiSqlite />,
      proficiency: "w-[60%]",
      percent: 60,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
      proficiency: "w-[50%]",
      percent: 50,
    },
    {
      name: "React",
      icon: <SiReact />,
      proficiency: "w-[40%]",
      percent: 40,
    },
  ],
};
