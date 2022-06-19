import { Link, Outlet } from 'react-router-dom';
import BottomTab from '../../components/BottomTab';

const Maintenance = () => {
  const assetId = '555';

  return (
    <div className='container'>
      <Link to={`/manutencao-${assetId}`}>
        <h1>MANUTENÇÃO</h1>
      </Link>

      <BottomTab />
      <Outlet />
    </div>
  );
};

export default Maintenance;
