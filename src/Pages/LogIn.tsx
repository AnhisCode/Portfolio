import React, { useEffect } from "react";
import { ConstellationBg } from "../Components/sketchedBackground";
import { useLocation, useNavigate } from "react-router-dom";

const refreshPage = () => {
    window.location.reload();
};

export const LogIn = () => {
    return (
        <div>
            <ConstellationBg />
            <div style={{ overflow: "hidden" }}>
                <div className={"text-5xl text-white"}></div>
            </div>
        </div>
    );
};
