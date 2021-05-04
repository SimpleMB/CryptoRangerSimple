import { NextPage } from 'next';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Navigation from '../../../components/Navigation/Navigation';
import PreviousNextNavigation from '../../../components/PreviousNextNavigation/PreviousNextNavigation';
import BasicTemplate from '../../../Templates/BasicTemplate/BasicTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BreadCrumbs position={0} />
      <BasicTemplate />
      <PreviousNextNavigation previous="" next="/paid/exampleofuse" />
    </>
  );
};

export default index;
