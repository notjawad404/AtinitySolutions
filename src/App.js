import Home from './components/main/Home';
import Login from './components/form/Login';
import { BrowserRouter,Route, Routes} from 'react-router-dom';

// import GetinTouch from './components/get-in-touch/GetinTouch'
// import Forms from './components/form/EmailForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="../form/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
