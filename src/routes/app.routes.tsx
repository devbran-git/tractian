import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Onboarding from '../containers/Onboarding';
import Home from '../containers/Home';
import Maintenance from '../containers/Maintenance';
import Assets from '../containers/Assets';
import AssetDetail from '../containers/AssetDetail';
import { AssetsProvider } from '../hooks/assets';

const AppRoutes = () => {
  const storageKey = '@TRACTIAN: onboarding';
  const storageResponse = sessionStorage.getItem(storageKey) as string;

  const storageData = JSON.parse(storageResponse);

  const [isAppStarted, setIsAppStarted] = useState(storageData || false);

  const onStartApp = () => setIsAppStarted(true);

  useEffect(() => {
    const saveOnStorage = () => {
      try {
        sessionStorage.setItem(storageKey, JSON.stringify(isAppStarted));
      } catch (error) {
        console.log('Ocorreu um erro no sttorage:', error);
      }
    };
    saveOnStorage();
  }, [isAppStarted]);

  return (
    <AssetsProvider>
      <BrowserRouter>
        <Routes>
          {isAppStarted ? (
            <>
              <Route path='/' element={<Home />}>
                <Route path='/:assetParam' element={<AssetDetail />} />
              </Route>

              <Route path='/manutencao' element={<Maintenance />} />

              <Route path='/ativos' element={<Assets />} />

              <Route
                path='*'
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>Ooops! Nada por aqui!</p>
                  </main>
                }
              />
            </>
          ) : (
            <Route path='/' element={<Onboarding onStartApp={onStartApp} />} />
          )}
        </Routes>
      </BrowserRouter>
    </AssetsProvider>
  );
};

export default AppRoutes;
