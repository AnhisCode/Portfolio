import { Content } from "../Components/Content";
import { ImageCard } from "../Components/ImageCard";
import { FaGithub } from "react-icons/fa";
import React from "react";

let whiteSpace = " ";

export const Home = () => {
    const mediaBotCard = {
        imageLocation: "https://i.ibb.co/M5pn7Tz/Media-Bot.png",
        cardTitle: "Media Bot",
        cardText:
            "A Twitch notification Discord Bot created using the APIs: discord " +
            "JDA for java, Twitch4j and TwitchHelix. Currently being utilised by 30+ popular streamers " +
            "and stores 5000+ twitch viewer information using sqlite. Complete setup of CI/CD " +
            "functionality using Jenkins and a VPS.",
        buttontext: <FaGithub style={{ margin: "auto" }} />,
        buttonLink: "https://github.com/AnhisCode/SocialMediaBot",
        date: "20 Jan 2022",
    };

    return (
        <div
            className={"bg-gradient-to-r from-slate-600 to-slate-900"}
            style={{ height: "100%" }}
        >
            <div
                className={"bg-black"}
                style={{
                    height: "800px",
                    width: "100%",
                    backgroundImage:
                        'url("https://im7.ezgif.com/tmp/ezgif-7-95a0070715.gif")',
                    backgroundSize: "cover",
                }}
            >
                <div>
                    {" "}
                    {/*Title*/}
                    <h1
                        className={"text-white ml-[10%] pt-[10%] text-5xl"}
                        style={{ fontFamily: "'Courier New', monospace" }}
                    >
                        const programmer = &#123;
                        <br />
                        <p className={"pl-[9rem] py-2"}>
                            name: &quot;Anh Dao&quot;,
                        </p>
                        <p className={"pl-[9rem] py-2"}>age: 19,</p>
                        <p className={"pl-[9rem] pt-2"}>
                            occupation: &quot;CS Student&quot;
                        </p>
                        &#125;;
                    </h1>
                </div>
            </div>
            <Content title="Past/Ongoing Projects">
                <ImageCard texts={mediaBotCard} />
            </Content>
        </div>
    );
};
