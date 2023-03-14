import {FC, PropsWithChildren, useReducer} from "react";
import { v4 as uuidv4 } from 'uuid';

import {entriesReducer, EntriesContext} from "./";
import {Entry} from "../../interfaces";

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "Pending: Contrary to popular belief, Lorem Ipsum is not simply random text.",
            createAt: Date.now(),
            status: 'pending'
        },
        {
            _id: uuidv4(),
            description: "InProgress: is simply dummy text of the printing and typesetting industry.",
            createAt: Date.now()-1223345,
            status: 'in-progress'
        },
        {
            _id: uuidv4(),
            description: "Finis: The standard chunk of Lorem is reproduced below for those interested.",
            createAt: Date.now()-4546322,
            status: 'finished'
        },
        {
            _id: uuidv4(),
            description: "standard chunk of Lorem is reproduced below for those interested.",
            createAt: Date.now()-45654322,
            status: 'finished'
        },
    ]
}


export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    return (
        <EntriesContext.Provider value={{
            ...state
        }}>
            {children}
        </EntriesContext.Provider>
    )
}