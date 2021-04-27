import { NextPage } from 'next';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Navigation from '../../../components/Navigation/Navigation';
import BasicTemplate from '../../../Templates/BasicTemplate/BasicTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BreadCrumbs position={0} />
      <BasicTemplate />
    </>
  );
};

export default index;
