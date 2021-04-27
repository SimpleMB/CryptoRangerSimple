import { NextPage } from 'next';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Navigation from '../../../components/Navigation/Navigation';
import FeaturesTemplate from '../../../Templates/FeaturesTemplate/FeaturesTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BreadCrumbs position={2} />
      <FeaturesTemplate />
    </>
  );
};

export default index;
