import type { Phonetic } from '../types/response';
import playIcon from './../assets/icon-play.svg';

type Props = {
    word: string | undefined;
    phonetics: Phonetic[];
};

export const Word = ({ word, phonetics }: Props) => {
    const pronuntiation = phonetics.find((item) => item.audio && item.text);
    const audio = new Audio(pronuntiation?.audio);

    const handleAudio = () => {
        audio.play();
    };

    return (
        <section className="flex justify-between items-center">
            <div className="flex flex-col gap-8">
                <h1 className="text-[2rem] sm:text-[4rem] font-bold dark:text-white">{word}</h1>
                <span className="text-primary text-lg sm:text-2xl">{pronuntiation?.text}</span>
            </div>
            <button
                onClick={handleAudio}
                disabled={!pronuntiation?.audio}
                className="disabled:cursor-not-allowed disabled:grayscale">
                <img src={playIcon} alt="Play phonetic" />
            </button>
        </section>
    );
};
