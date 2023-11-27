import {createContext} from "react";


export interface ThemeContextProps {
    theme?: Theme
    setTheme?: (theme: Theme) => void
}

export const enum Theme {
    LIGHT = 'light',
    DARK = 'dark',
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'


export const ThemeContext = createContext<ThemeContextProps>({})


