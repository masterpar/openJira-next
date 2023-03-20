import {FC, PropsWithChildren, useReducer} from "react";
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import 'moment/locale/es';

import {entriesReducer, EntriesContext} from "./";
import {Entry} from "../../interfaces";

let now = moment().format("dddd DD, MMMM YYYY")

export interface EntriesState {
    entries: Entry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: "Pending: Contrary to popular belief, Lorem Ipsum is not simply random text.",
            createAt: now,
            status: 'pending'
        },
        {
            _id: uuidv4(),
            description: "InProgress: is simply dummy text of the printing and typesetting industry.",
            createAt: now,
            status: 'in-progress'
        },
        {
            _id: uuidv4(),
            description: "Finis: The standard chunk of Lorem is reproduced below for those interested.",
            createAt: now,
            status: 'finished'
        }
    ]
}


export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {

    const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

    const addNewEntry = (description: string) => {

        const newEntry : Entry = {
            _id: uuidv4(),
            createAt: now,
            description,
            status: 'pending'
        }
        dispatch( { type: '[Entry] - Add-entry', payload: newEntry})
    }

    const setAddingEntry = (state: boolean) =>{
        dispatch({ type: '[Entry] - SetAdding-entry', payload: true})
    }

    const updateEntry = (entry: Entry) =>{
        dispatch({ type: '[Entry] - Update', payload:entry})
    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            //Methods
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}