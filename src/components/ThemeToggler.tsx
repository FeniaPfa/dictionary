import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const ThemeToggler = () => {
    const { toggleMode } = useContext(ThemeContext);

    return (
        <label onChange={toggleMode} htmlFor="AcceptConditions" className="relative h-6 w-12 cursor-pointer">
            <input type="checkbox" id="AcceptConditions" className="peer sr-only" />

            <span className="absolute inset-0 rounded-full bg-gray-500 transition peer-checked:bg-primary"></span>

            <span className="absolute inset-y-0 start-0 m-1 h-4 w-4 rounded-full bg-white transition-all peer-checked:start-6"></span>
        </label>
    );
};
