import {CloudArrowDownIcon, XCircleIcon } from '@heroicons/react/24/solid'
import {ChangeEvent, useState} from "react";


interface Props {
    setIsAdding: (b: boolean) => void;
}

function NewEntry( { setIsAdding}: Props) {

    const [inputValue, setInputValue] = useState('');
    const [touched, setTouched] = useState(false);

    const onTextFieldChanged = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValue(event.target.value);
    }

    const onSave = () => {
      if( inputValue.length === 0) return;

        console.log(inputValue)
    }

    return (
        <>
            <textarea
                placeholder="Nueva Tarea"
                className={`w-full dark:bg-slate-700 bg-slate-100  text-xs rounded-md p-1 outline-0
                            transition ease-in-out delay-100 ${inputValue.length <= 0 && touched ? 'border border-red-500' : ''} `}
                value={inputValue}
                onChange={onTextFieldChanged}
                onBlur={() => setTouched(true)}
            />
            <div className="flex justify-between mb-4 ">
                <button className="flex text-[12px] font-medium text-red-600 font-semibold
                                            dark:text-red-500 rounded-full items-center"
                        onClick={() => setIsAdding(false) }
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
        </>
    )
}

export default NewEntry;
