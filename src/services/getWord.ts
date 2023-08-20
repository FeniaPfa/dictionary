import axios from 'axios';

const API = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

export const getWord = async (word: string) => {
    try {
        const data = await axios.get(`${API}${word}`);
        return data.data[0];
    } catch (err: any) {
        console.log(err.response.data);
    }
};
