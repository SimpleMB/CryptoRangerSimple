import { NextPage } from 'next';
import Navigation from '../components/Navigation/Navigation';
import BasicTemplate from '../Templates/BasicTemplate/BasicTemplate';

const Index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BasicTemplate />
    </>
  );
};

export default Index;
