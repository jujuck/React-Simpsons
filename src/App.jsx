import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import Error from './pages/Error';
import Page from './pages/Page';
import SimpleSimpson from './pages/SimpleSimpson';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/page/:text' element={<Page />} />
        <Route path='/simpson/:id' element={<SimpleSimpson />} />
        <Route path='*' element={<Error />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
