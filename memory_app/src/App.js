import logo from './logo.svg';
import './App.css';
import TopBar from './components/topbar/TopBar';
import SinglePostComp from './components/single-post/SinglePostComp';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import WriteComp from './components/write-diary/WriteComp';
import DiaryComp from './components/diary-comp/DiaryComp';
import GallaryComp from './components/GallaryComp';

function App() {
  return (
    
    <div className="App">
      <Router>
        <TopBar />
        <div className="container">
            <Routes>
              <Route exact path="/" element = {<SinglePostComp />} />
              <Route exact path="/diary" element = {<DiaryComp />} />
              <Route exact path="/write-diary" element = {<WriteComp />} />
              <Route exact path="/gallary" element = {<GallaryComp />} />
            </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
