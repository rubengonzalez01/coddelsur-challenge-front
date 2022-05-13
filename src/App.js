import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Search from './pages/Search/Search';
import VideoDetail from './pages/VideoDetail/VideoDetail';
import ContextProvider from './contexts/provider';
import NoMatch from './components/NoMatch/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

require('./styles/styles.scss');


function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Layout>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/video' exact element={<Search />} />
              <Route path='/video/:id' exact element={<VideoDetail />} />
              <Route path='*' exact element={<NoMatch />} />
            </Routes>          
          </Layout>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

function Home() {
  return ''
}

export default App;
