import { Typography, Image } from 'antd';

import onboardingImg from '../../assets/images/onboarding.png';
import logoImg from '../../assets/images/logo_light.svg';

import { colors } from '../../styles/colors';
import { api } from '../../services/api';
import { useEffect, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

interface OnboardingProps {
  onStartApp: () => void;
}

const Onboarding: React.FC<OnboardingProps> = ({ onStartApp }) => {
  const { Text } = Typography;

  const [companyName, setCompanyName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getCompanyData = async () => {
    const response = await api.get('companies');

    const companyData = response?.data[0];

    setCompanyName(companyData?.name);
  };

  useEffect(() => {
    getCompanyData();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [companyName]);

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        backgroundImage: `url(${onboardingImg})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: '72px 16px 0',
      }}>
      <Image src={logoImg} />
      <Text
        style={{ color: colors.white, fontWeight: 600, paddingTop: '12px' }}>
        Nunca foi tão fácil monitorar seu ativos
      </Text>

      <div
        style={{
          position: 'absolute',
          bottom: 120,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          padding: '0 24px',
        }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '48px',
            borderRadius: '4px',
            border: `solid 1.5px ${colors.success}`,
          }}
          onClick={onStartApp}>
          {isLoading ? (
            <LoadingOutlined style={{ color: colors.white }} />
          ) : (
            <Text style={{ color: colors.white }}>
              {`Ver ativos da ${companyName}`}
            </Text>
          )}
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
