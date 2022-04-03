import Home  from '../src/components/pages/Home'
import { Fragment } from 'react';
import './App.css';
import Layout from './components/Layout';
import  Dashboard  from './components/pages/Dashboard' ;
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

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
