
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NoPageFound from './components/NoPage/NoPageFound';
import Coins from './components/Coins/Coins';
import Contract from './components/Contract/Contract';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/contact' element={<Contract></Contract>}></Route>
        <Route path="/about" element={<About></About>} />
        <Route path='*' element={<NoPageFound></NoPageFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
