import { Content } from "../Components/Content";
import { ImageCard } from "../Components/ImageCard";
import { FaGithub } from "react-icons/fa";
import React, { useEffect } from "react";
import { ProjectCardInfos } from "../Assets/ProjectCard";
import { ConstellationBg } from "../Components/sketchedBackground";
import { useLocation, useNavigate } from "react-router-dom";

export const Home = () => {
    return (
        <div className={""} style={{ height: "100%" }}>
            <ConstellationBg />
            <div
                className={" sm:h-[600px] h-[250px] flex items-center"}
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
                        <p className={"sm:pl-[9rem] pl-[5rem]"}>
                            name: &quot;Anh Dao&quot;,
                        </p>
                        <p className={"sm:pl-[9rem] pl-[5rem]"}>age: 19,</p>
                        <p className={"sm:pl-[9rem] pl-[5rem]"}>
                            occupation: &quot;CS Student&quot;
                        </p>
                        &#125;;
                    </h1>
                </div>{" "}
                {/*title*/}
            </div>
            <Content title="Projects">
                <div className={"row"}>
                    <div className={"col-md-6 "}>
                        <ImageCard texts={ProjectCardInfos.portfolio} />
                        <ImageCard texts={ProjectCardInfos.demolition} />
                    </div>
                    <div className={"col-md-6"}>
                        <ImageCard texts={ProjectCardInfos.mediaBotCard} />
                        <ImageCard texts={ProjectCardInfos.anhimations} />
                    </div>
                </div>
            </Content>
        </div>
    );
};
