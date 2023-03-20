import {FC, useContext, useMemo, DragEvent} from "react";
import EntryCard from "./EntryCard";
import NewEntry from "./NewEntry";

import {EntryStatus} from "../../../interfaces";

import {EntriesContext} from "../../../context/entries";
import {UIContext} from "../../../context/ui";

import {PlusCircleIcon} from '@heroicons/react/24/outline'

interface Props {
    status: EntryStatus
}

const EntryList:FC<Props> = ({ status}) => {

     const { entries, updateEntry } = useContext(EntriesContext);
     const {AddingEntry, SetAddingEntry, isDragging, endDragging} = useContext(UIContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);


     const allowDrop = (event: DragEvent<HTMLDivElement>) => {
         event.preventDefault()
     }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text')

        const entry = entries.find(entry => entry._id === id)!
        entry.status = status
        updateEntry(entry)
        endDragging()

    }

    return (
            <div
                className={`bg-white border border-gray-200 rounded-lg shadow 
                     dark:bg-gray-800 dark:border-gray-700 overflow-y-auto p-4
                     ${isDragging  ? "dark:bg-slate-900" : ""} `}
                onDrop={ onDropEntry}
                onDragOver={allowDrop}
            >
                { (AddingEntry && status === "pending")
                    ?  <NewEntry SetAddingEntry={SetAddingEntry} />

                    : (status === "pending") ?
                    <button
                        className="flex items-center justify-center dark:bg-blue-600 w-full bg-slate-300 hover:bg-slate-400
                            mb-2 rounded-full p-1 font-semibold text-xs dark:hover:bg-blue-400  transition ease-in"
                        onClick={() => SetAddingEntry(true) }
                    >
                        <PlusCircleIcon className="h-5 mr-2"/>Agregar Tarea
                    </button> : null
                }

                <div className="items-center justify-between ">
                    <hr className="mb-1 opacity-0"/>
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-blue-300 capitalize pt-4">
                        { status }
                    </h5>
                </div>
                <div className="flow-root">
                    <ul
                        className="divide-y divide-gray-200 dark:divide-gray-700"
                    >

                        {
                            entriesByStatus.map(entry=> (
                                <EntryCard key={entry._id}  entry={entry} />
                            ))
                        }

                    </ul>
                </div>
            </div>
    )
}

export default EntryList;
