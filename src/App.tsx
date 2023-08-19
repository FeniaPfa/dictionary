import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { Meanings } from './components/Meanings';
import { SearchInput } from './components/SearchInput';
import { Source } from './components/Source';
import { Word } from './components/Word';
import './index.css';

function App() {
    // call api
    return (
        <Layout>
            <Header />
            <SearchInput />
            <Word />
            <Meanings />
            <Source />
        </Layout>
    );
}

export default App;
