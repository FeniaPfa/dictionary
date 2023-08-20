import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Meanings } from './components/Meanings';
import { SearchInput } from './components/SearchInput';
import { Source } from './components/Source';
import { Word } from './components/Word';
import { ThemeProvider } from './context/ThemeContext';
import { useWord } from './hooks/useWord';
import './index.css';

function App() {
    const { data, getData, isLoading } = useWord('keyboard');

    return (
        <ThemeProvider>
            <Layout>
                <Header />
                <SearchInput getData={getData} />
                {isLoading ? (
                    <p>Cargando...</p>
                ) : (
                    <>
                        <Word word={data!.word} phonetics={data!.phonetics} />
                        <Meanings meanings={data!.meanings} />
                        <Source source={data!.sourceUrls} />
                    </>
                )}
            </Layout>
        </ThemeProvider>
    );
}

export default App;
