import { NextPage } from 'next';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Navigation from '../../../components/Navigation/Navigation';
import PreviousNextNavigation from '../../../components/PreviousNextNavigation/PreviousNextNavigation';
import ExampleTemplate from '../../../Templates/ExampleTemplate/ExampleTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BreadCrumbs position={1} />
      <ExampleTemplate />
      <PreviousNextNavigation
        previous="/paid/basicinformation"
        next="/paid/features"
      />
    </>
  );
};

export default index;
