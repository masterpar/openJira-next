import {EntriesState} from "./EntriesProvider";
import {Entry} from "../../interfaces";

type EntriesActionType =
      { type: '[Entry] - Add-entry',payload: Entry }
    | { type: '[Entry] - SetAdding-entry',payload: boolean }
    | { type: '[Entry] - Update',payload: Entry }

export const entriesReducer = (state: EntriesState, action:EntriesActionType):EntriesState => {

    switch (action.type) {
        case "[Entry] - SetAdding-entry" :
            return {
                ...state,

            }
        case "[Entry] - Add-entry" :
            return {
                ...state,
                entries: [...state.entries, action.payload]
            }
        case "[Entry] - Update" :
            return {
                ...state,
                entries: state.entries.map( entry => {
                    if (entry._id === action.payload._id) {
                        entry.status = action.payload.status
                        entry.description = action.payload.description
                    }
                    return entry
                })
            }
        default:
            return state

    }

}