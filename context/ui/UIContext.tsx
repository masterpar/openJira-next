import {createContext} from "react";

export interface ContextProps {
    sideMenuOpen: boolean
    AddingEntry: boolean
    isDragging: boolean

    //Methods
    openSideMenu: () => void
    closeSideMenu: () => void
    SetAddingEntry:(isAdding: boolean) => void

    startDragging: () => void
    endDragging: () => void
}


export const UIContext = createContext({} as ContextProps)

