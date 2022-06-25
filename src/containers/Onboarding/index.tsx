import { useEffect, useState } from 'react';

import OnboardingLayout from './layout';
import LoadingSpin from '../../components/LoadingSpin';

import { api } from '../../services/api';
interface OnboardingProps {
  onStartApp: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onStartApp }) => {
  const [companyName, setCompanyName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const buttonLabel = isLoading ? '' : `Ver ativos da ${companyName}`;

  const fetchCompanyData = async () => {
    const response = await api.get('companies');

    const companyData = response?.data[0];

    setCompanyName(companyData?.name);
  };

  useEffect(() => {
    fetchCompanyData();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [companyName]);

  const localState = {
    isLoading,
    buttonLabel,
  };

  const handlers = {
    onStartApp,
  };

  if (isLoading) return <LoadingSpin />;

  return <OnboardingLayout localState={localState} handlers={handlers} />;
};

export default Onboarding;
