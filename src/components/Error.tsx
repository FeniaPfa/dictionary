import { Error as IError } from '../types/response';
import ErrorIcon from './../assets/error.svg';

type Props = {
    message: IError;
};

export const Error = ({ message }: Props) => {
    return (
        <section className="flex flex-col items-center gap-4 text-gray-500 font-bold">
            <h1 className="text-xl">{message.title}</h1>
            <img className="w-1/3 h-auto" src={ErrorIcon} alt="Error icon" />
            <p className="font-lg">{message.message}</p>
            <p className="font-lg">{message.resolution}</p>
        </section>
    );
};
