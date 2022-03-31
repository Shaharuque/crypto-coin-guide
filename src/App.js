
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import NoPageFound from './components/NoPage/NoPageFound';
import Coins from './components/Coins/Coins';
import Contract from './components/Contract/Contract';
import CoinDetails from './CoinDetails/CoinDetails';
import BangladeshOffice from './OfficeAdresses/BangladeshOffice/BangladeshOffice';
import UsOffice from './OfficeAdresses/UsOffice/UsOffice';


function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path='/coins' element={<Coins></Coins>}></Route>
        <Route path='/coin-details/:coinId' element={<CoinDetails></CoinDetails>}></Route>
        <Route path='/contact' element={<Contract></Contract>}>
          <Route path='bangladesh_adress' element={<BangladeshOffice></BangladeshOffice>}></Route>
          <Route path='us_adress' element={<UsOffice></UsOffice>}></Route>
        </Route>
        <Route path="/about" element={<About></About>} />
        
        {/*ai NoPageFound component always active route gular nichey rakhbo always */}
        <Route path='*' element={<NoPageFound></NoPageFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
