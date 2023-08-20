import { useContext } from 'react';
import { ThemeContext } from './../context/ThemeContext';
import type { FontList } from '../types/Font';

export const FontSelector = () => {
    const { changeFont } = useContext(ThemeContext);
    const fonts: FontList[] = [
        { class: 'sans', text: 'Sans Serif' },
        { class: 'serif', text: 'Serif' },
        { class: 'mono', text: 'Mono' },
    ];

    const handleFont = (font: FontList) => {
        changeFont!(font);
    };

    return (
        <ul className="absolute right-0 w-44 flex flex-col gap-4 cursor-pointer bg-white rounded-2xl shadow-2xl p-6 z-10">
            {fonts.map((item) => (
                <li onClick={() => handleFont(item)} className={`${item.class} font-bold hover:text-primary`}>
                    {item.text}
                </li>
            ))}
        </ul>
    );
};
