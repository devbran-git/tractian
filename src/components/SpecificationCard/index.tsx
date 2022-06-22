import './styles.css';
import React from 'react';
import { Space, Typography } from 'antd';

import { SpecificationCardProps } from './types';

const SpecificationCard: React.FC<SpecificationCardProps> = ({
  text,
  children,
}) => {
  const { Text } = Typography;

  return (
    <Space size={0} className='specification-card-container'>
      {children}
      <Text className='specification-card-text'>{text}</Text>
    </Space>
  );
};

export default SpecificationCard;
