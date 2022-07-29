import React from 'react';
import CustomText from '../../components/atoms/CustomText';

import { Container } from './styles';

interface IProfileProps {}

const Profile: React.FC<IProfileProps> = () => {
  return (
    <Container>
      <CustomText>Profile</CustomText>
    </Container>
  );
};

export default Profile;
