import { FaGithub, FaReact } from "react-icons/fa";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import {
    SiTypescript,
    SiJava,
    SiGradle,
    SiDiscord,
    SiTwitch,
    SiAdobeaftereffects,
    SiSqlite,
} from "react-icons/si";

<p>
    <FaReact /> <SiTypescript />
</p>;

export const ProjectCardInfos = {
    mediaBotCard: {
        imageLocation: "https://i.ibb.co/M5pn7Tz/Media-Bot.png",
        cardTitle: "Media Bot",
        cardText:
            "A Twitch notification Discord Bot built upon gradle using the APIs: discord " +
            "JDA for java, Twitch4j and TwitchHelix. Currently being utilised by 30+ popular streamers " +
            "and stores 5000+ twitch viewer information using sqlite. Complete setup of CI/CD " +
            "functionality using Jenkins and a VPS.",
        buttontext: <FaGithub style={{ margin: "auto" }} />,
        buttonLink: "https://github.com/AnhisCode/SocialMediaBot",
        date: "Jan 2022",
        languages: (
            <>
                <SiJava className={"text-xl translate-y-1"} />
                <SiGradle className={"text-xl translate-y-1"} />
                <SiDiscord className={"text-xl translate-y-1"} />
                <SiTwitch className={"text-xl translate-y-1"} />
                <SiSqlite className={"text-xl translate-y-1"} />
            </>
        ),
    },
    demolition: {
        imageLocation: "https://i.ibb.co/N1Cd45d/demolition.gif",
        cardTitle: "Demolition Man",
        cardText:
            "A small game created using Java's processing library and gradle",
        buttontext: <FaGithub style={{ margin: "auto" }} />,
        buttonLink: "https://github.com/AnhisCode/Demolition",
        date: "Nov 2021",
        languages: (
            <>
                <SiJava className={"text-xl translate-y-1"} />
                <SiGradle className={"text-xl translate-y-1"} />
            </>
        ),
    },
    anhimations: {
        imageLocation: "https://i.ibb.co/HhZ7tRT/ezgif-com-gif-maker.gif",
        cardTitle: "Anhimations",
        cardText:
            "Animations made using Adobe Animate and After Effect. More can " +
            "be found in the Instagram account below.",
        buttontext: <BsInstagram style={{ margin: "auto" }} />,
        buttonLink: "https://www.instagram.com/anhimations/",
        date: "July 2021",
        languages: (
            <>
                <SiAdobeaftereffects className={"text-xl translate-y-1"} />
            </>
        ),
    },
};
