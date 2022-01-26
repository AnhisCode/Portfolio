import React from "react";

export interface ImageCardProps {
    texts: {
        imageLocation: string;
        cardTitle: string;
        cardText: string;
        buttontext?: React.ReactElement;
        buttonLink: string;
        date: string;
    };
}

export const ImageCard = (props: ImageCardProps): React.ReactElement => {
    return (
        <div className="card col-md-6 shadow-xl border-8 border-white cursor-pointer">
            <img
                className="card-img-top shadow-md"
                src={props.texts.imageLocation}
                alt="Card image cap"
            />
            <div className="card-body " style={{ margin: "auto" }}>
                <h5 className="card-title text-xl font-semibold">
                    {props.texts.cardTitle} - {props.texts.date}
                </h5>
                <p className="card-text" style={{ margin: "0px 0px 8px" }}>
                    {props.texts.cardText}
                </p>
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
