import { FC } from 'react';
import Header from '../shared/Header';
import CodeWrapper from '../code/CodeWrapper';
import CodeResult from '../code/CodeResult';

const Hero: FC = () => {
  return (
    <>
      <Header />
      <CodeWrapper />
      <CodeResult />
    </>
  );
};

export default Hero;
