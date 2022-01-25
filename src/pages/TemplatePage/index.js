import React from "react";
import { Outlet } from "react-router-dom";

import Menu from "../../components/Menu";


function TemplatePage() {
    return (
        <>
        <Menu />
        <Outlet />
        </>
        
    );
}

export default TemplatePage;