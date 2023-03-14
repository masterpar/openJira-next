import {FC, PropsWithChildren, useReducer} from "react";
import {UIReducer, UIContext} from "./";
import {type} from "os";

export interface UIState {
    sideMenuOpen: boolean
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false
}


export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: '[UI] - Open Sidebar'})
    }

    const closeSideMenu = () => {
        dispatch({ type: '[UI] - Close Sidebar'})
    }

    return (
        <UIContext.Provider value={{
           ...state,
            openSideMenu,
            closeSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}