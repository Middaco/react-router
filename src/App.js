import './App.css';
import About from './components/About';
import Home from './components/Home';
import VansDetails from './components/VansDetails';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Vans from './components/Vans';
import Layout from './components/Layout';
import Dashboard from './pages/Host/Dashboard';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import LayoutHost from './components/LayoutHost';
import HostVans from './pages/Host/Vans';
import HostVansDetails from './pages/Host/VansDetails';
import LayoutHostVans from './components/LayoutHostVans';
import HostVansPhotos from './pages/Host/VansPhotos';
import HostVansPricing from './pages/Host/VansPricing';
import NotFoundPage from './pages/404Page/404';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='about' element={<About/>} />
            <Route path='vans' element={<Vans/>} />
            <Route path='vans/:id' element={<VansDetails/>} />
            <Route path='host' element={<LayoutHost/>}>
              <Route index element={<Dashboard/>} />
              <Route path='income' element={<Income/>} />
              <Route path='reviews' element={<Reviews/>} />
              <Route path='vans' element={<HostVans/>}/>
              <Route path='vans/:id' element={<LayoutHostVans/>}>
                <Route index element={<HostVansDetails/>} />
                <Route path='pricing' element={<HostVansPricing/>} />
                <Route path='photos' element={<HostVansPhotos/>} />
              </Route>
            </Route>
            <Route path='*' element={<NotFoundPage/>} />
          </Route >
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
