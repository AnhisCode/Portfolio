import React from "react";

export interface ImageCardProps {
    texts: {
        imageLocation: string;
        cardTitle: string;
        cardText: string;
        buttontext?: React.ReactElement;
        buttonLink: string;
        date: string;
        languages?: React.ReactElement;
    };
}

export const ImageCard = (props: ImageCardProps): React.ReactElement => {
    return (
        <div className="card mb-[24px] shadow-xl border-8 border-white">
            <img
                className="card-img-top shadow-md"
                src={props.texts.imageLocation}
                alt="Card image cap"
            />
            <div className="card-body" style={{ margin: "auto" }}>
                <h5 className="card-title text-xl font-semibold">
                    {props.texts.cardTitle} - {props.texts.date}
                </h5>
                <div className={"text-md flex items-baseline space-x-2"}>
                    {props.texts.languages}
                </div>
                <p className="card-text mb-3 mt-3">{props.texts.cardText}</p>
                <a
                    href={props.texts.buttonLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    {props.texts.buttontext}
                </a>
            </div>
        </div>
    );
};
