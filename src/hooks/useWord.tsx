import { useEffect, useState } from 'react';
import { getWord } from '../services/getWord';
import type { WordData } from '../types/response';

export const useWord = (word: string) => {
    const [data, setData] = useState<WordData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);

    const getData = async (word: string) => {
        try {
            const wordData = await getWord(word);
            setData(wordData);
            setIsLoading(false);
        } catch (err) {
            setError(err);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getData(word);
    }, []);

    return { data, isLoading, error, setData, getData };
};
