import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LogIn } from "./LogIn";
import { Home } from "./Home";
import { NavigationBar } from "../Components/NavigationBar";

export const Pages = () => {
    return (
        <div>
            <BrowserRouter>
                <NavigationBar />
                <Routes>
                    <Route path={"/login"} element={<LogIn />} />
                    <Route path={"/"} element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
