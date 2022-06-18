import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout';
import Assets from '../containers/Assets';
import Home from '../containers/Home';
import Maintenance from '../containers/Maintenance';

const AppRoutes = () => (
  <Layout>
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/manutencao' element={<Maintenance />} />
      <Route path='/ativos' element={<Assets />} />
    </Routes>
  </Layout>
);

export default AppRoutes;
