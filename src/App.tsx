import { Error, Header, Layout, SearchInput, WordInfo } from './components';
import { ThemeProvider } from './context/ThemeContext';
import { useWord } from './hooks/useWord';
import './index.css';

function App() {
    const { data, getData, isLoading, error } = useWord('keyboard');

    const renderWord = () => (error ? <Error message={error} /> : <WordInfo data={data} />);

    return (
        <ThemeProvider>
            <Layout>
                <Header />
                <SearchInput getData={getData} />
                {isLoading ? <p>Loading...</p> : renderWord()}
            </Layout>
        </ThemeProvider>
    );
}

export default App;
