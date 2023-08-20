import { WordData } from '../types/response';
import { Meanings } from './Meanings';
import { Source } from './Source';
import { Word } from './Word';

type Props = {
    data: WordData | null;
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
