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
        <Route path='/' element={<Home/>} />
        <Route path='/About' element= {<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
