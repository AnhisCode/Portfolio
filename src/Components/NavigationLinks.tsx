import React from "react";

interface INavigationLinkProps {
    link: string;
    children: string;
}

export const NavigationLink = (
    props: INavigationLinkProps,
): React.ReactElement => {
    return (
        <a
            className="block md:inline hover:underline m-2 md:m-0 md:ml-4"
            href={props.link}
        >
            {props.children}
        </a>
    );
};
