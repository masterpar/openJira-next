import {Entry} from "../../../interfaces";


interface Props {
    entry:Entry
}

function EntryCard( { entry }: Props) {
    return (
        <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900  dark:text-white">
                        { entry.description }
                    </p>
                    <p className="text-xs text-gray-500 truncate dark:text-gray-400 mt-2">
                        hace 30 minutos
                    </p>
                </div>
                {/*<div*/}
                {/*    className="inline-flex items-center text-base font-semibold text-gray-900*/}
                {/*                dark:text-white">*/}
                {/*    $320*/}
                {/*</div>*/}
            </div>
        </li>

    )
}

export default EntryCard;
