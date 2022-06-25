import './styles/global.css';
import AppRoutes from './routes/app.routes';
import { AssetsProvider } from './hooks/assets';
import { UsersContextProvider } from './hooks/users';

const App: React.FC = () => {
  return (
    <AssetsProvider>
      <UsersContextProvider>
        <AppRoutes />;
      </UsersContextProvider>
    </AssetsProvider>
  );
};

export default App;
