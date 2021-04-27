import { NextPage } from 'next';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Navigation from '../../../components/Navigation/Navigation';
import ExampleTemplate from '../../../Templates/ExampleTemplate/ExampleTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BreadCrumbs position={1} />
      <ExampleTemplate />
    </>
  );
};

export default index;
