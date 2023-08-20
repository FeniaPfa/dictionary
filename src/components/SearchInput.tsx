import { ChangeEvent, SyntheticEvent, useState } from 'react';
import searchIcon from './../assets/icon-search.svg';

type Props = {
    getData: (word: string) => void;
};

export const SearchInput = ({ getData }: Props) => {
    const [searchWord, setSearchWord] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchWord(newValue);
    };

    const handleSearch = (e: SyntheticEvent) => {
        e.preventDefault();
        getData(searchWord);
    };

    return (
        <form className="flex relative" onSubmit={handleSearch}>
            <input
                required
                onChange={handleChange}
                value={searchWord}
                placeholder="Search for any word..."
                className="bg-gray-100 dark:text-white dark:bg-gray-800 p-4 border-none w-full focus:outline-none rounded-2xl h-[48px] sm:h-[64px] font-bold text-xl placeholder:text-gray-300 dark:placeholder:text-gray-600"
            />
            <button type="submit" className="absolute top-1/3 right-6">
                <img src={searchIcon} alt="Search icon" />
            </button>
        </form>
    );
};
