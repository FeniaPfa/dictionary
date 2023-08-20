/* eslint-disable no-prototype-builtins */
import type { Meaning as IMeaning } from '../types/response';

type Props = {
    data: IMeaning;
};

export const Meaning = ({ data }: Props) => {
    return (
        <article className="flex flex-col gap-6">
            <div className="flex items-center">
                <h2 className="mr-4 italic text-lg sm:text-2xl">{data.partOfSpeech}</h2>
                <hr className="h-[1px] bg-gray-200 w-full" />
            </div>
            <span className="sm:text-xl text-secondary">Meaning</span>
            <ul className="list-disc list-inside text-lg gap-4 flex flex-col">
                {data.definitions.map((item, index) => (
                    <div key={index} className="flex flex-col gap-4">
                        <li className="marker:text-primary">{item.definition}</li>
                        {item.example && <p className="text-secondary text-lg">{item.example}</p>}
                    </div>
                ))}
            </ul>

            {data.synonyms.length !== 0 && (
                <div className="flex gap-5">
                    <h3 className="text-secondary sm:text-xl">Synonyms</h3>
                    <ul className="flex flex-wrap gap-4 items-center text-primary font-bold sm:text-xl">
                        {data.synonyms.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            )}
        </article>
    );
};
