import { NextPage } from 'next';
import Navigation from '../../../components/Navigation/Navigation';
import ExampleTemplate from '../../../Templates/ExampleTemplate/ExampleTemplate';

const index: NextPage = () => {
  return (
    <>
      <Navigation />
      <ExampleTemplate />
    </>
  );
};

export default index;
