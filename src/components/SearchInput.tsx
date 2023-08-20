import { ChangeEvent, KeyboardEvent, useState } from 'react';
import searchIcon from './../assets/icon-search.svg';

type Props = {
    getData: (word: string) => void;
};

export const SearchInput = ({ getData }: Props) => {
    const [searchWord, setSearchWord] = useState('house');

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setSearchWord(newValue);
    };

    const handleSearch = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            getData(searchWord);
        }
    };

    return (
        <div className="flex relative">
            <input
                required
                onKeyDown={handleSearch}
                onChange={handleChange}
                value={searchWord}
                placeholder="Search for any word..."
                className="bg-gray-100 p-4 border-none w-full focus:outline-none rounded-2xl h-[48px] sm:h-[64px] font-bold text-xl placeholder:text-gray-300"
            />
            <button className="absolute top-1/3 right-6">
                <img src={searchIcon} />
            </button>
        </div>
    );
};
