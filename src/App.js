import Home from './components/main/Home';
import About from './components/main/About'
import Contact from './components/main/Contact';
import Services from './components/main/Services';


import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/Home' element={<Home/>} />
        <Route path='/About' element= {<About/>}/>
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Services' element={<Services/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
