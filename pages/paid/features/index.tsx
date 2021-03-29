import { NextPage } from 'next';
import Navigation from '../../../components/Navigation/Navigation';
import FeaturesTemplate from '../../../Templates/FeaturesTemplate/FeaturesTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <FeaturesTemplate />
    </>
  );
};

export default index;
