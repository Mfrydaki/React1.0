import React from "react";

import CodingFactoryLogo from "./CodingFactoryLogo";

interface LayoutProps{
    children: React.ReactNode;
}

const Layout = ({children}:LayoutProps) =>{

    return(

        <>
        
        <CodingFactoryLogo/>
        {children}
        
        </>
    )

}
export default Layout;