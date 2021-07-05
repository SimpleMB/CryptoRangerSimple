import { NextPage } from 'next';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Navigation from '../../../components/Navigation/Navigation';
import PreviousNextNavigation from '../../../components/PreviousNextNavigation/PreviousNextNavigation';
import TeamTemplate from '../../../Templates/TeamTemplate/TeamTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BreadCrumbs position={3} />
      <TeamTemplate />
      <PreviousNextNavigation
        previous="/paid/features"
        next="/paid/languageandpayment"
      />
    </>
  );
};

export default index;
