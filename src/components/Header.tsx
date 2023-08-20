import logo from './../assets/logo.svg';
import moonIcon from './../assets/icon-moon.svg';
import arrowDownIcon from './../assets/icon-arrow-down.svg';
import { ThemeToggler } from './ThemeToggler';

export const Header = () => {
    return (
        <header className="flex justify-between items-center gap-4 mb-8">
            <img src={logo} />
            <div className="flex gap-4">
                <span>Mono</span>
                <button>
                    <img src={arrowDownIcon} />
                </button>

                <span className="border-l-gray-200 border-l-[1px]"></span>
                <ThemeToggler />
                <img src={moonIcon} />
            </div>
        </header>
    );
};
