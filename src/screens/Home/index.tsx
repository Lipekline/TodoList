import React from 'react';
import {Text} from 'react-native';

import {Container} from './styles';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
};

export default Home;
