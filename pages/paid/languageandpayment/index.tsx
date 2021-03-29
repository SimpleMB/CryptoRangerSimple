import { NextPage } from 'next';
import Navigation from '../../../components/Navigation/Navigation';
import LanguageTemplate from '../../../Templates/LanguageTemplate/LanguageTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <LanguageTemplate />
    </>
  );
};

export default index;
