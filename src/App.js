
import './App.css';
import { Routes, Route } from 'react-router-dom';
import PodcastList from './components/PodcastList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PodcastDetails from './components/PodcastDetails';
import Favorites from './components/Favorites';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PodcastList />}></Route>
        <Route path="/podcast/:id" element={<PodcastDetails />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
