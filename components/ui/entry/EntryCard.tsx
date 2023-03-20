import {DragEvent, useContext} from "react";
import {Entry} from "../../../interfaces";
import {UIContext} from "../../../context/ui";

interface Props {
    entry:Entry
}

function EntryCard( { entry }: Props) {

    const { startDragging, endDragging, isDragging} = useContext(UIContext);

    const onDragStart = ( event: DragEvent) => {
        event.dataTransfer.setData('text', entry._id)

        startDragging()
    }

    const onDragEnd = () => {
        endDragging()
    }


    return (
        <li
            className={`mt-3 sm:mt-4 cursor-pointer dark:hover:bg-slate-700 transition-all 0.4 
                        hover:bg-slate-200 hover:rounded-md ${isDragging ? "opacity-20" : "" }`}
            draggable={true}
            onDragStart={ onDragStart }
            onDragEnd={ onDragEnd }

        >
            <div className="flex items-center">
                <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                        { entry.description }
                    </p>
                    <p className="text-xs text-gray-500 truncate dark:text-gray-400 mt-2">
                        { entry.createAt }
                    </p>
                </div>
            </div>
        </li>

    )
}

export default EntryCard;
