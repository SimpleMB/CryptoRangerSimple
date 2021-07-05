import { NextPage } from 'next';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Navigation from '../../../components/Navigation/Navigation';
import PreviousNextNavigation from '../../../components/PreviousNextNavigation/PreviousNextNavigation';
import FeaturesTemplate from '../../../Templates/FeaturesTemplate/FeaturesTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BreadCrumbs position={2} />
      <FeaturesTemplate />
      <PreviousNextNavigation previous="/paid/exampleofuse" next="/paid/team" />
    </>
  );
};

export default index;
