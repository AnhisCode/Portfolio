import React, { ReactElement } from "react";

interface ContentProps {
    title: string;
    children: React.ReactNode;
}

export const Content = (props: ContentProps): ReactElement => {
    return (
        <>
            <div className="bg-zinc-800 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-5xl font-medium text-white">
                        <b>{props.title}</b>
                    </h1>
                </div>
            </div>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">{props.children}</div>
                </div>
            </main>
        </>
    );
};
