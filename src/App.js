
import Airpods from './Airpods';
import './App.css';
import Home from './Home';
import LapAccess from './LapAccess';
import Navbar from './Navbar/Navbar';
import Buy from './Buy';
// import Sub from './SubNavbar/Sub';
// import Comp1 from './component1/Comp1';
// import Comp2 from './component2/Comp2';
// import Foot from './component5/Foot';
import { Route, Routes } from 'react-router-dom';
import Main_Cart from './Main_Cart';



function App() {
  return (
    <div className="App">
      <Navbar />

      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='pods' element={<Airpods/>}></Route>
        <Route path='laptop' element={<LapAccess/>}></Route>
        <Route path='buy' element={<Buy/>}></Route>
        <Route path='cart' element={<Main_Cart />}></Route>
      </Routes>
      {/* <Sub />
      <Comp1 />
      <Comp2 />
      <Foot /> */}
    </div>
  );
}

export default App;
