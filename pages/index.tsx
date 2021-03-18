import { NextPage } from 'next';
import { useEffect } from 'react';
import Navigation from '../components/Navigation/Navigation';

interface BasicInformationProps {
  projectName: string;
  webAddress: string;
  startDate: string;
  publicationDate: string;
  linksInDescription: string[] | string;
}

const BasicInformation: NextPage = () => {
  const storageBasicInformation: BasicInformationProps = {
    projectName: '',
    webAddress: '',
    startDate: '',
    publicationDate: '',
    linksInDescription: [],
  };

  useEffect(() => {
    Object.keys(storageBasicInformation).forEach((key) => {
      storageBasicInformation[key] = localStorage.getItem(key) || '';
      console.log(key);
    });
    console.log(storageBasicInformation);
  });

  return (
    <>
      <Navigation />
      hello
    </>
  );
};

export default BasicInformation;
