import {FC, PropsWithChildren, useReducer} from "react";
import {UIReducer, UIContext} from "./";


export interface UIState {
    sideMenuOpen: boolean
    AddingEntry: boolean
    isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
    sideMenuOpen: false,
    AddingEntry: false,
    isDragging: false
}


export const UIProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

    const openSideMenu = () => {
        dispatch({ type: '[UI] - Open Sidebar'})
    }

    const closeSideMenu = () => {
        dispatch({ type: '[UI] - Close Sidebar'})
    }

    const SetAddingEntry = (isAdding: boolean) => {
        dispatch({ type: '[UI] - AddinEntry', payload: isAdding})
    }

    const startDragging = () => {
        dispatch({ type: '[UI] - Start Dragging'})
    }

    const endDragging = () => {
        dispatch({ type: '[UI] - End Dragging'})
    }

    return (
        <UIContext.Provider value={{
           ...state,
            openSideMenu,
            closeSideMenu,
            SetAddingEntry,

            startDragging,
            endDragging
        }}>
            {children}
        </UIContext.Provider>
    )
}