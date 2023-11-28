import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {useContext} from "react";

interface useTheme {
    theme: Theme
    toggleTheme: () => void
}

export const useTheme = (): useTheme => {
    const {theme, setTheme} = useContext(ThemeContext)
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    const toggleTheme = () => {
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, toggleTheme}

}