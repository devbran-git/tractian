import { Link, Outlet } from 'react-router-dom';
import BottomTab from '../../components/BottomTab';

const Home = () => {
  const testId = '111';

  return (
    <div className='container'>
      <Link to={`/ativo-${testId}`}>
        <h1>UNIDADES</h1>
      </Link>

      <BottomTab />
      <Outlet />
    </div>
  );
};

export default Home;
