import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('retro')
    const switchTheme = () => setTheme(theme === 'classic' ? 'retro' : 'classic')

    useEffect(() => {

        if (theme == 'retro') {
            document.documentElement.className = 'retro'
        } else {
            document.documentElement.className = 'classic'
        }

    }, [theme])

    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export { ThemeContext, ThemeProviderWrapper }