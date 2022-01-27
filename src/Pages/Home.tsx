import { Content } from "../Components/Content";
import { ImageCard } from "../Components/ImageCard";
import { FaGithub } from "react-icons/fa";
import React from "react";
import { ProjectCardInfos } from "../Assets/ProjectCard";

export const Home = () => {
    "https://i.ibb.co/N1Cd45d/demolition.gif";

    return (
        <div
            className={"bg-gradient-to-r from-slate-600 to-slate-900"}
            style={{ height: "100%" }}
        >
            <div
                className={"bg-black sm:h-[600px] h-[250px] flex items-center"}
                style={{
                    width: "100%",
                    backgroundImage:
                        'url("https://i.ibb.co/GRyLTQh/black-Background.gif")',
                    backgroundSize: "cover",
                }}
            >
                <div>
                    {" "}
                    {/*Title*/}
                    <h1
                        className={
                            "text-white ml-[20%] sm:text-5xl text-md motion-safe:animate-fadeIn font-bold"
                        }
                        style={{ fontFamily: "'Courier New', monospace" }}
                    >
                        const programmer = &#123;
                        <br />
                        <p className={"sm:pl-[9rem] pl-[5rem] py-2"}>
                            name: &quot;Anh Dao&quot;,
                        </p>
                        <p className={"sm:pl-[9rem] pl-[5rem] py-2"}>
                            age: 19,
                        </p>
                        <p className={"sm:pl-[9rem] pl-[5rem] py-2"}>
                            occupation: &quot;CS Student&quot;
                        </p>
                        &#125;;
                    </h1>
                </div>
            </div>
            <Content title="Projects">
                <div className={"row"}>
                    <div className={"col-md-6 "}>
                        <ImageCard texts={ProjectCardInfos.mediaBotCard} />
                        <ImageCard texts={ProjectCardInfos.anhimations} />
                    </div>
                    <div className={"col-md-6"}>
                        <ImageCard texts={ProjectCardInfos.demolition} />
                    </div>
                </div>
            </Content>
        </div>
    );
};
