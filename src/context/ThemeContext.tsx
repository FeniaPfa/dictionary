import { useState, createContext, ReactNode } from 'react';
import type { FontList } from '../types/Font';

type Context = {
    font: FontList;
    darkMode: boolean;
    toggleMode: () => void;
    changeFont: (fontClass: FontList) => void;
    toggleFontSelector: () => void;
    isFontSelectorOpen: boolean;
};

export const ThemeContext = createContext<Partial<Context>>({});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [font, setFont] = useState({ class: 'sans', text: 'Sans Serif' });
    const [darkMode, setDarkMode] = useState(false);
    const [isFontSelectorOpen, setIsFontSelectorOpen] = useState(false);

    const toggleFontSelector = () => {
        setIsFontSelectorOpen(!isFontSelectorOpen);
    };

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    const changeFont = (fontClass: FontList) => {
        setFont(fontClass);
        toggleFontSelector();
    };

    return (
        <ThemeContext.Provider value={{ font, darkMode, toggleMode, changeFont, toggleFontSelector, isFontSelectorOpen }}>
            {children}
        </ThemeContext.Provider>
    );
};
