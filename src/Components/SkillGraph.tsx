import React from "react";
import {
  SiTypescript,
  SiJava,
  SiGradle,
  SiDiscord,
  SiTwitch,
  SiAdobeaftereffects,
  SiSqlite,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiJenkins,
} from "react-icons/si";
import clsx from "clsx";

interface Skill {
  name: string;
  icon: React.ReactElement;
  proficiency: string;
  percent: number;
}

export interface SkillGraphProps {
  skills: Skill[];
}

//Broken!!

export const SkillGraph = (props: SkillGraphProps) => {
  return (
    <div className={"text-xl w-full bg-white rounded-lg h-auto p-3"}>
      <div className="row">
        {/*Y-Axis label*/}
        <div
          className={
            "flex justify-content-center font-bold align-items-center py-6 text-2xl"
          }
        >
          Anh&apos;s Proficiency Chart
        </div>
        <div className={"row"}>
          {/* Y-Axis Columns */}
          <div className={"col-2 h-[85%] pr-1"}>
            {/*Stuff here: Icon*/}
            {props.skills.map((skill, index): React.ReactNode => {
              return (
                <div
                  key={index}
                  className="flex justify-content-end text-6xl py-3"
                >
                  {skill.icon}
                </div>
              );
            })}
          </div>
          {/*Actual graph*/}
          <div className={"col-10 pl-1"}>
            <div className={"h-full border-l-4 border-b-4 border-black"}>
              {props.skills.map((skill, index): React.ReactNode => {
                let moveText = skill.percent < 40;
                return (
                  <div key={index} className={"py-3"}>
                    <div
                      className={clsx(
                        "bg-black h-[60px] flex justify-content-end align-items-center text-white pr-2 text-xl",
                        skill.proficiency,
                      )}
                    >
                      <div
                        className={clsx(
                          moveText && "translate-x-[150%] text-black",
                        )}
                      >
                        {skill.name}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/*X-Axis label*/}
        <div className={"col-md-1 "} />
        <div className={"col-md-11 flex justify-content-center font-bold"}>
          Proficiency
        </div>
      </div>
    </div>
  );
};
