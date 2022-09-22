import './App.scss';
import Home from './components/Home';
import Register from './components/Register';
import View from './components/View';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/view' element={<View/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
