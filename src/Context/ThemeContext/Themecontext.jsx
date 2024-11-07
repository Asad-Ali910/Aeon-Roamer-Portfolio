import { useContext, useState } from "react";

export const ThemeContext = useContext()
const ThemeProvider = ({children}) => {
    const [ Theme, setTheme ] = useState('light');
    return (
        <ThemeContext.Provider value={{Theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }