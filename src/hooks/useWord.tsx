import { useEffect, useState } from 'react';
import { getWord } from '../services/getWord';
import type { Error, WordData } from '../types/response';

export const useWord = (word: string) => {
    const [data, setData] = useState<WordData | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);
    const [isError, setIsError] = useState<boolean>(false);

    const getData = async (word: string) => {
        try {
            const wordData = await getWord(word);
            setData(wordData);
            setIsLoading(false);
            setError(null);
        } catch (err) {
            console.log(err);
            setError(err.response.data);
            setIsError(true);
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getData(word);
    }, []);

    return { data, isLoading, error, getData, isError };
};
