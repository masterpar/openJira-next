import {Bars3Icon} from '@heroicons/react/24/solid'
import ModeTheme from "./ModeTheme";
import React, {useContext} from "react";
import {UIContext} from "../../context/ui";



function Navbar() {

    const { openSideMenu } = useContext(UIContext);
    return (
        <div className="flex sticky w-full bg-slate-50 shadow-sm dark:bg-slate-800 items-center justify-between">
            <Bars3Icon
                className="h-10 p-2 cursor-pointer"
                onClick={openSideMenu}
            />

            <p className="font-medium">Open Jira</p>
            <ModeTheme/>
        </div>
    )
}

export default Navbar;
