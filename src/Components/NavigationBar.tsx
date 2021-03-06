import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const NavigationBar = (): React.ReactElement => {
    const location = { from: useLocation().pathname };
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className="bg-zinc-800">
                <div className="mx-auto">
                    <div className="flex items-center justify-between h-16 px-2">
                        <div className="flex items-center">
                            <div className="flex-shrink-0"></div>
                            <div className="hidden md:block">
                                <div className="flex items-baseline space-x-4">
                                    <Link
                                        to={"/"}
                                        className=" hover:bg-zinc-900 text-white px-3 py-2 rounded-md text-xl font-medium"
                                        state={location}
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to={"/login"}
                                        className=" hover:bg-zinc-900 text-white px-3 py-2 rounded-md text-xl font-medium"
                                        state={location}
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>
                            {/*collapsed button*/}
                            <div className="mr-2 flex md:hidden">
                                <button
                                    onClick={(): void => setIsOpen(!isOpen)}
                                    type="button"
                                    className="bg-zinc-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-900"
                                    aria-controls="mobile-menu"
                                    aria-expanded="false"
                                >
                                    <span className="sr-only">
                                        Open main menu
                                    </span>
                                    {!isOpen ? (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M4 6h16M4 12h16M4 18h16"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            className="block h-6 w-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>
                        {/*react icons*/}
                        <div className={"flex items-baseline space-x-2"}>
                            <a
                                href={"https://github.com/AnhisCode"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaGithub
                                    className={
                                        "fill-white text-3xl hover:fill-amber-600"
                                    }
                                />
                            </a>

                            <a
                                href={
                                    "https://www.linkedin.com/in/anh-dao-a18079210"
                                }
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FaLinkedin
                                    className={
                                        "fill-white text-3xl hover:fill-blue-500"
                                    }
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref): React.ReactElement => (
                        <div className="md:hidden" id="mobile-menu">
                            <div
                                ref={ref}
                                className="px-2 pt-2 pb-3 space-y-1 sm:px-3"
                            >
                                <Link
                                    to={"/"}
                                    className=" hover:bg-zinc-900 text-white px-3 py-2 rounded-md text-xl font-medium"
                                >
                                    Home
                                </Link>

                                <Link
                                    to={"/login"}
                                    className=" hover:bg-zinc-900 text-white px-3 py-2 rounded-md text-xl font-medium"
                                >
                                    Login
                                </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        </div>
    );
};
