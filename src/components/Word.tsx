import playIcon from './../assets/icon-play.svg';

export const Word = () => {
    return (
        <section className="flex justify-between items-center">
            <div className="flex flex-col gap-8">
                <h1 className="text-[2rem] sm:text-[4rem] font-bold">Keyboard</h1>
                <span className="text-primary text-lg sm:text-2xl">pronuntiation</span>
            </div>
            <button>
                <img src={playIcon} />
            </button>
        </section>
    );
};
