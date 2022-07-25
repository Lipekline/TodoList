import React from 'react';
import CustomText from '../../components/atoms/CustomText';

import { Container } from './styles';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <Container>
      <CustomText>Home</CustomText>
    </Container>
  );
};

export default Home;
