import { Typography, Image } from 'antd';

import onboardingImg from '../../assets/images/onboarding.png';
import logoImg from '../../assets/images/logo_light.svg';

import { colors } from '../../styles/colors';

import { OnboardingProps } from './types';

const OnboardingLayout: React.FC<OnboardingProps> = ({
  localState,
  handlers,
}: OnboardingProps) => {
  const { buttonLabel } = localState;
  const { onStartApp } = handlers;

  const { Text } = Typography;
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
      <Image src={logoImg} preview={false} />
      <Text
        style={{ color: colors.white, fontWeight: 600, paddingTop: '12px' }}>
        Nunca foi tão fácil monitorar seus ativos
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
          <Text style={{ color: colors.white }}>{buttonLabel}</Text>
        </div>
      </div>
    </div>
  );
};

export default OnboardingLayout;
