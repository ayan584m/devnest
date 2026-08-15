import './App.css';
import { Outlet } from "react-router-dom";
import Navbar from './files/web/component/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './files/web/page/Index';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Index />}>
          {/* <Route path='' element={} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;