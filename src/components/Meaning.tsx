export const Meaning = () => {
    return (
        <article className="flex flex-col gap-6">
            <div className="flex items-center">
                <h2 className="mr-4 italic text-lg sm:text-2xl">noun</h2>
                <hr className="h-[1px] bg-gray-200 w-full" />
            </div>
            <span className="sm:text-xl text-secondary">Meaning</span>
            <ul className="list-disc list-inside text-lg">
                <li className="marker:text-primary">Lorem ipsum dolor sit amet.</li>
            </ul>
            <p className="text-secondary text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="flex gap-5">
                <h3 className="text-secondary sm:text-xl">Synonyms</h3>
                <ul className="flex gap-4 items-center text-primary font-bold sm:text-xl">
                    <li>asdadad</li>
                    <li>asdadad</li>
                    <li>asdadad</li>
                </ul>
            </div>
        </article>
    );
};
