import { ReactNode } from 'react';

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="dark:bg-black m-0 min-h-screen">
            <div className="md:max-w-[50vw] mx-auto py-12 flex flex-col gap-6">{children}</div>
        </div>
    );
};
