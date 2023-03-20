import {CloudArrowDownIcon, XCircleIcon } from '@heroicons/react/24/solid'
import {ChangeEvent, useContext, useRef, useState} from "react";
import {EntriesContext} from "../../../context/entries";


interface Props {
    SetAddingEntry: (isAdding: boolean) => void;
}

function NewEntry( { SetAddingEntry}: Props) {

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const {addNewEntry} = useContext(EntriesContext);

    const refNewEntry = useRef<HTMLDivElement>(null);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
      if( inputValue.length === 0) return;

        addNewEntry(inputValue)
        SetAddingEntry( false)
    }

    return (
        <div ref={refNewEntry}>
            <textarea
                placeholder="Nueva Tarea"
                className={`w-full dark:bg-slate-700 bg-slate-100  text-xs rounded-md p-1 outline-0
                            transition ease-in-out delay-100
                            ${inputValue.length <= 0 && touched ? 'border border-red-500' : ''} `}
                value={inputValue}
                onChange={onTextFieldChanged}
                onBlur={() => setTouched(true)}
            />
            <div className="flex justify-between mb-4 ">
                <button className="flex text-[12px] font-medium text-red-600 font-semibold
                                            dark:text-red-500 rounded-full items-center"
                        onClick={() => SetAddingEntry(false) }
                >
                    <XCircleIcon className="h-5 mr-1"/>Cancelar
                </button>
                <button
                    className="flex text-[12px] font-medium text-blue-600 font-semibold
                                dark:text-blue-500 rounded-full items-center"
                    onClick={onSave}
                >
                    <CloudArrowDownIcon className="h-5 mr-1"/>Guardar
                </button>
            </div>
        </div>
    )
}

export default NewEntry;
