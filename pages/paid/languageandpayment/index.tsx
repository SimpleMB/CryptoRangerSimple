import { NextPage } from 'next';
import BreadCrumbs from '../../../components/BreadCrumbs/BreadCrumbs';
import Navigation from '../../../components/Navigation/Navigation';
import LanguageTemplate from '../../../Templates/LanguageTemplate/LanguageTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <BreadCrumbs position={4} />
      <LanguageTemplate />
    </>
  );
};

export default index;
