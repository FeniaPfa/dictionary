import linkIcon from './../assets/icon-new-window.svg';

export const Source = () => {
    return (
        <footer className="flex gap-6">
            <span className="text-secondary">Source</span>
            <a href="" className="flex gap-2">
                {'link'} <img src={linkIcon} />
            </a>
        </footer>
    );
};
