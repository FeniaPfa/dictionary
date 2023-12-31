import linkIcon from './../assets/icon-new-window.svg';

type Props = {
    source: string;
};

export const Source = ({ source }: Props) => {
    return (
        <footer className="flex gap-6 flex-wrap">
            <span className="text-secondary">Source</span>
            <a href={source} className="flex gap-2 dark:text-white" target="_blank">
                {source} <img src={linkIcon} alt="Open link" />
            </a>
        </footer>
    );
};
