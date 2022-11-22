import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import GetSpaceXData from './apps/fetch-spacex-data/GetSpaceXData';
import GithubSearch from './apps/github-search/GithubSearch';
import Todo from './apps/todo-list/Todo';

function App() {
  return (
    <BrowserRouter>
      <div className="dark">

        <Header />

        <div className="main" id="main">
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/fetch-spacex-data" element={ <GetSpaceXData /> } />
            <Route exact path="/github-search" element={ <GithubSearch /> } />
            <Route exact path="/todo-list" element={ <Todo /> } />
          </Routes>
        </div>
        
        <Footer />
        
      </div>
    </BrowserRouter>
  );
}

export default App;
