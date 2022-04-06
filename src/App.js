import Home  from '../src/components/pages/Home'
import { Fragment } from 'react';
import './App.css';
import Layout from './components/Layout';
import  Dashboard  from './components/pages/Dashboard' ;
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Vehicle from './components/pages/Vehicle';

function App() {
  return (
<Fragment>
  <Router>
  <Layout>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
</Layout>
  </Router>   
</Fragment>
  );
}

export default App;
