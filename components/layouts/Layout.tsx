import React, {FC, useContext} from "react";
import Head from "next/head";
import Navbar from "../ui/Navbar";
import Sidebar from "../ui/Sidebar";
import {UIContext} from "../../context/ui";

interface Props {
    title?: string
    children?: React.ReactNode | undefined;
}

const Layout:FC<Props> = ({ title = 'openJira', children } )  => {

    const { sideMenuOpen, closeSideMenu} = useContext(UIContext);
    return (
        <div className="">
            <Head>
                <title>{ title }</title>
            </Head>

            {/*Navbar*/}
            <Navbar/>

            {/*sidebar*/}
            <Sidebar />

            <div className="px-3">
                {children}
            </div>

            {/*opacity background open sidebar*/}
            { sideMenuOpen ?
                <div
                    className="absolute top-0 let-0 bg-slate-700 opacity-50 h-full w-full"
                    onClick={closeSideMenu}
                />
                : null
            }

        </div>
    )
}

export default Layout;
