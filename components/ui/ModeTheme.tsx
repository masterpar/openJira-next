import {useTheme} from 'next-themes'
import { SunIcon,MoonIcon } from "@heroicons/react/24/solid";


function ModeTheme() {

    const {theme, setTheme, systemTheme} = useTheme()
    const currentTheme = theme === "system" ? systemTheme : theme ;


    return (
        <div className="cursor-pointer mr-2">
            { currentTheme === 'dark'
                ? <SunIcon className="p-2 font-ruda h-10 w-10"
                           onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
                : <MoonIcon className="p-2 font-ruda h-10 w-10"
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                />
            }

        </div>
    )
}

export default ModeTheme;
