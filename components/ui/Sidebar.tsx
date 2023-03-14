import {XMarkIcon, RectangleStackIcon, InboxStackIcon} from '@heroicons/react/24/solid'
import React, {useContext} from "react";
import {UIContext} from "../../context/ui";


function Sidebar( ) {

    const { sideMenuOpen, closeSideMenu } = useContext(UIContext);


    return (
            <div className={`fixed top-0 left-0 h-screen p-4 overflow-y-auto z-50 font-dm
                    ${!sideMenuOpen && "transition-transform -translate-x-full"} 
                  duration-100 ease-in-ou bg-white w-80 dark:bg-slate-800 shadow-lg max-w-[220px]`} >

                <h5 className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
                    Menu
                </h5>

                <button
                    type="button"
                    onClick={closeSideMenu}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg
                                text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center
                                dark:hover:bg-gray-600 dark:hover:text-white justify-center "
                >
                    <XMarkIcon className="h-7 font-light"/>
                    <span className="sr-only">Cerrar</span>
                </button>
                <div className="py-4 overflow-y-auto">
                    <ul className="space-y-2 ">
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900
                                        rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <RectangleStackIcon className="h-5 font-light"/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Kanban</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg
                                        dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <InboxStackIcon className="h-5 font-light"/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium
                                            text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                                    3
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

    )
}

export default Sidebar;
