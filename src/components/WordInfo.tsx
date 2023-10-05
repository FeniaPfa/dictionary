import { Meanings, Source, Word } from '.';
import { WordData } from '../types/response';

type Props = {
    data: WordData;
};

export const WordInfo = ({ data }: Props) => {
    return (
        <>
            <Word word={data?.word} phonetics={data?.phonetics} />
            <Meanings meanings={data?.meanings} />
            <Source source={data?.sourceUrls} />
        </>
    );
};
