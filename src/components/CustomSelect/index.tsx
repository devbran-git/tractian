import React from 'react';
import { Select, Space, Typography } from 'antd';

import { colors } from '../../styles/colors';

import { CustomSelectProps } from './types';

const CustomSelect: React.FC<CustomSelectProps> = ({
  label,
  optionsList,
  handleChange,
}) => {
  const { Text } = Typography;

  return (
    <Space direction='vertical' size={6}>
      <Text style={{ color: colors.gray, fontWeight: 500 }}>{label}:</Text>

      <Select
        placeholder='selecione'
        style={{ width: 120 }}
        onChange={() => handleChange()}>
        {optionsList?.map((option, index) => (
          <Select.Option key={index} value={option}>
            {option}
          </Select.Option>
        ))}
      </Select>
    </Space>
  );
};

export default CustomSelect;
