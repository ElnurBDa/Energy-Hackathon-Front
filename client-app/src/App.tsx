import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './newComponents/Dashboard';
import DashboardMonth from './newComponents/DashboardMonth';
import DashboardYear from './newComponents/DashboardYear';
import DashboardUniversal from './newComponents/DashboardUniversal';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardUniversal />} />
          <Route path="0" element={<DashboardUniversal />} />
          <Route path="1" element={<Dashboard />} />
          <Route path="2" element={<DashboardMonth />} />
          <Route path="3" element={<DashboardYear />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
