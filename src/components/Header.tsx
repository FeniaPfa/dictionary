import logo from './../assets/logo.svg';
import moonIcon from './../assets/icon-moon.svg';
import arrowDownIcon from './../assets/icon-arrow-down.svg';
import { ThemeToggler } from './ThemeToggler';
import { FontSelector } from './FontSelector';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Header = () => {
    const { font, toggleFontSelector, isFontSelectorOpen } = useContext(ThemeContext);

    return (
        <header className="flex justify-between items-center gap-4 mb-8">
            <img src={logo} />
            <div className="flex gap-4">
                <div className="relative">
                    <span className={`${font!.class} font-bold text-lg`}>{font!.text}</span>
                    <button className="ml-4" onClick={toggleFontSelector}>
                        <img src={arrowDownIcon} />
                    </button>
                    {isFontSelectorOpen && <FontSelector />}
                </div>

                <span className="border-l-gray-200 border-l-[1px]"></span>
                <ThemeToggler />
                <img src={moonIcon} />
            </div>
        </header>
    );
};
