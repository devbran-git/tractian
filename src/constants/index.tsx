import CoolIcon from '../components/CustomIcons/CoolIcon';
import SirenIcon from '../components/CustomIcons/SirenIcon';
import WarningIcon from '../components/CustomIcons/WarningIcon';

export const STATUS_COLORS = {
  inDowntime: '#FF4444',
  inAlert: '#FFB801',
  inOperation: '#2AA349',
};

export const STATUS_VALUES = {
  inDowntime: 'em Parada',
  inAlert: 'em Alerta',
  inOperation: 'em Operação',
};

export const ASSET_MODELS = {
  motor: 'Motor',
  fan: 'Ventilador',
};

export const STATUS_MESSAGE = {
  inDowntime: 'Este ativo precisa de manutenção!',
  inAlert: 'Solicite manutenção preventiva.',
  inOperation: 'Tudo certo com seu ativo.',
};

export const STATUS_ICONS = {
  inDowntime: <SirenIcon />,
  inAlert: <WarningIcon />,
  inOperation: <CoolIcon />,
};
