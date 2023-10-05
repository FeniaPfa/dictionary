import { useContext } from 'react';
import { ContextType, ThemeContext } from './../context/ThemeContext';
import type { FontList } from '../types/Font';

export const FontSelector = () => {
    const { changeFont } = useContext(ThemeContext) as ContextType;
    const fonts: FontList[] = [
        { class: 'sans', text: 'Sans Serif' },
        { class: 'serif', text: 'Serif' },
        { class: 'mono', text: 'Mono' },
    ];

    const handleFont = (font: FontList) => {
        changeFont(font);
    };

    return (
        <ul className="absolute right-0 w-44 flex flex-col gap-4 cursor-pointer dark:shadow-primary bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-6 z-10">
            {fonts.map((item) => (
                <li key={item.class} onClick={() => handleFont(item)} className={`${item.class} font-bold dark:text-white hover:text-primary`}>
                    {item.text}
                </li>
            ))}
        </ul>
    );
};
