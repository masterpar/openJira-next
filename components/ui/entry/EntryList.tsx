import EntryCard from "./EntryCard";
import { EntryStatus} from "../../../interfaces";
import {FC, useContext, useMemo, useState} from "react";
import {EntriesContext} from "../../../context/entries";
import NewEntry from "./NewEntry";
import {PlusCircleIcon} from '@heroicons/react/24/outline'

interface Props {
    status: EntryStatus
}

const EntryList:FC<Props> = ({ status}) => {

    const { entries } = useContext(EntriesContext);

    const [isAdding, setIsAdding] = useState(false);

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries]);

    return (
            <div
                className="p-4 bg-white border border-gray-200 rounded-lg shadow
                    sm:p-8 dark:bg-gray-800 dark:border-gray-700 overflow-y-auto">
                { isAdding
                    ?  <NewEntry setIsAdding={setIsAdding} />

                    : <button
                        className="flex items-center justify-center bg-blue-600 w-full
                            mb-2 rounded-full p-1 font-semibold text-xs hover:bg-blue-500 transition ease-in"
                        onClick={() => setIsAdding(true) }
                    >
                        <PlusCircleIcon className="h-5 mr-2"/>Agregar Tarea
                    </button>
                }

                <div className="items-center justify-between divide-y divide-gray-200 dark:divide-gray-700">
                    <hr className="mb-1 opacity-0"/>
                    <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-blue-300 capitalize pt-4">
                        { status }
                    </h5>
                </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

                        {
                            entriesByStatus.map(entry=> (
                                <EntryCard key={entry._id}  entry={entry}/>
                            ))
                        }

                    </ul>
                </div>
            </div>
    )
}

export default EntryList;
