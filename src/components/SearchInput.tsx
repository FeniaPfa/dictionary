import searchIcon from './../assets/icon-search.svg';

export const SearchInput = () => {
    return (
        <form className="flex relative">
            <input
                placeholder="Search for any word..."
                className="bg-gray-100 p-4 border-none w-full focus:outline-none rounded-2xl h-[48px] sm:h-[64px] font-bold text-xl placeholder:text-gray-300"
            />
            <button className="absolute top-1/3 right-6">
                <img src={searchIcon} />
            </button>
        </form>
    );
};
