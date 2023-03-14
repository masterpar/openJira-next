import {CloudArrowDownIcon, XCircleIcon } from '@heroicons/react/24/solid'

function NewEntry() {
    return (
        <div className="flex justify-between mb-4 ">
            <button className="flex text-[12px] font-medium text-red-600 font-semibold
                                        dark:text-red-500 rounded-full items-center">
                <XCircleIcon className="h-5 mr-1"/>Cancelar
            </button>
            <button className="flex  text-[12px] font-medium text-blue-600 font-semibold
                                        dark:text-blue-500 rounded-full items-center">
                <CloudArrowDownIcon className="h-5 mr-1"/>Guardar
            </button>
        </div>
    )
}

export default NewEntry;
