import styled from 'styled-components/native';
import { lineHeightMultiplier } from '../../../styles/mixins';
import { ICustomText } from '.';

export const Text = styled.Text<ICustomText>`
  font-size: ${props => props.size}px;
  text-align: ${props => (props.align ? props.align : 'left')};
  letter-spacing: ${props => props.spacing || 0}px;
  line-height: ${props =>
    props.lineHeight || (props.size || 0) * lineHeightMultiplier}px;
  //adicionar font-family
  //adicionar cor
`;
