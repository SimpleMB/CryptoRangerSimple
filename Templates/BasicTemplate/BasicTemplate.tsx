import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import FormSmallInput from '../../components/Form/FormSmallInput';

interface BasicInformationProps {
  projectName: string;
  webAddress: string;
  startDate: string;
  publicationDate: string;
  linksInDescription: string;
}

const BasicTemplate = () => {
  const { register, handleSubmit, watch } = useForm();

  const storageBasicInformation: BasicInformationProps = {
    projectName: '',
    webAddress: '',
    startDate: '',
    publicationDate: '',
    linksInDescription: 'hello',
  };

  useEffect(() => {
    Object.keys(storageBasicInformation).forEach((key) => {
      storageBasicInformation[key] = localStorage.getItem(key) || '';
      console.log(key);
    });
    console.log(storageBasicInformation);
  });

  return (
    <form onSubmit={undefined} className={undefined}>
      <FormSmallInput
        register={register}
        fieldId="projectName"
        fieldName="projectName"
        label="Project's name:"
        type="small"
        value={storageBasicInformation.projectName}
      />
      <FormSmallInput
        register={register}
        fieldId="webAddress"
        fieldName="webAddress"
        label="Project's web address:"
        type="small"
        value={storageBasicInformation.webAddress}
      />
      <FormSmallInput
        register={register}
        fieldId="startDate"
        fieldName="startDate"
        label="When project starts?"
        type="date"
        value={storageBasicInformation.startDate}
      />
      <FormSmallInput
        register={register}
        fieldId="publicationDate"
        fieldName="publicationDate"
        label="When review must be published?"
        type="small"
        value={storageBasicInformation.publicationDate}
      />
      <FormSmallInput
        register={register}
        fieldId="linksInDescription"
        fieldName="linksInDescription"
        label="Importand links to place in the video description:"
        type="small"
        value={storageBasicInformation.linksInDescription}
      />
    </form>
  );
};

export default BasicTemplate;
