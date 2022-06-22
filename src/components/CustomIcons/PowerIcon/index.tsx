import React from 'react';

import { Space } from 'antd';

const PowerSvg = () => (
  <svg
    width='20'
    height='24'
    viewBox='0 0 20 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M19.611 7.60354H13.2492L18.9699 0.375412C19.0883 0.222359 18.9815 0 18.788 0H7.71334C7.63248 0 7.55451 0.0433168 7.51408 0.115511L0.0318285 13.0383C-0.0576928 13.1914 0.0520428 13.3849 0.231085 13.3849H5.26738L2.6857 23.7116C2.63083 23.9368 2.90229 24.0957 3.06978 23.934L19.7698 7.99916C19.92 7.85766 19.8189 7.60354 19.611 7.60354ZM6.0442 18.3807L7.78553 11.4212H3.24016L8.7154 1.96658H15.2014L9.18611 9.57012H15.2793L6.0442 18.3807Z'
      fill='#FAFAFA'
    />
  </svg>
);

const PowerIcon: React.FC = () => (
  <Space>
    <PowerSvg />
  </Space>
);

export default PowerIcon;
