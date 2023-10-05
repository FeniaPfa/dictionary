import { useContext } from 'react';
import logo from './../assets/logo.svg';
import moonIcon from './../assets/icon-moon.svg';
import arrowDownIcon from './../assets/icon-arrow-down.svg';
import { ContextType, ThemeContext } from '../context/ThemeContext';
import { FontSelector, ThemeToggler } from '.';

export const Header = () => {
    const { font, toggleFontSelector, isFontSelectorOpen } = useContext(ThemeContext) as ContextType;

    return (
        <header className="flex justify-between items-center gap-4 mb-8">
            <img src={logo} alt="Logo" />
            <div className="flex gap-4">
                <div className="relative">
                    <span className={`${font!.class} font-bold text-lg dark:text-white`}>{font!.text}</span>
                    <button className="ml-4" onClick={toggleFontSelector}>
                        <img src={arrowDownIcon} alt="Toggle font selector" />
                    </button>
                    {isFontSelectorOpen && <FontSelector />}
                </div>

                <span className="border-l-gray-200 border-l-[1px]"></span>
                <ThemeToggler />
                <img src={moonIcon} alt="Moon icon" />
            </div>
        </header>
    );
};
