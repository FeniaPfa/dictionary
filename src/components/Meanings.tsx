import { Meaning } from './Meaning';
import type { Meaning as IMeaning } from '../types/response';

type Props = {
    meanings: IMeaning[];
};

export const Meanings = ({ meanings }: Props) => {
    return (
        <section className="flex flex-col gap-8">
            {meanings.map((item, index) => (
                <Meaning key={index} data={item} />
            ))}

            <hr />
        </section>
    );
};
