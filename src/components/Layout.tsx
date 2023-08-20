import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export const Layout = ({ children }: { children: ReactNode }) => {
    const { font } = useContext(ThemeContext);
    return (
        <div className="dark:bg-black m-0 min-h-screen">
            <div className={`${font!.class} sm:max-w-lg md:max-w-3xl mx-8 sm:mx-auto py-12 flex flex-col gap-6`}>{children}</div>
        </div>
    );
};
