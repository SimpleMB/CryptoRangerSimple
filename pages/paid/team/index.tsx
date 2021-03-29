import { NextPage } from 'next';
import Navigation from '../../../components/Navigation/Navigation';
import TeamTemplate from '../../../Templates/TeamTemplate/TeamTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <TeamTemplate />
    </>
  );
};

export default index;
