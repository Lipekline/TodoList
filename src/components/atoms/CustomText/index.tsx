import React from 'react';

import { FONT_SIZE_PARAGRAPH } from '../../../styles/typograph';

import { Text } from './styles';

export interface ICustomText {
  family?: string;
  size?: number;
  spacing?: number;
  lineHeight?: number;
  color?: string;
  weight?: 'regular' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify';
  children?: React.ReactNode;
}

const CustomText: React.FC<ICustomText> = ({
  size = FONT_SIZE_PARAGRAPH,
  align,
  spacing,
  lineHeight,
  color,
  weight,
  children,
}) => {
  return (
    <Text
      size={size}
      align={align}
      spacing={spacing}
      lineHeight={lineHeight}
      color={color}
      weight={weight}>
      {children}
    </Text>
  );
};

export default CustomText;
