import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormSmallInput from '../../components/FormSmallInput/FormSmallInput';
import { BasicInformationStorage } from '../../types';

const BasicTemplate = () => {
  const storageBasicInformation: BasicInformationStorage = {
    projectName: '',
    webAddress: '',
    startDate: '',
    publicationDate: '',
    linksInDescription: '',
  };

  const { register, watch, formState, setValue } = useForm();

  useEffect(() => {
    Object.keys(storageBasicInformation).forEach((key) => {
      storageBasicInformation[key] = localStorage.getItem(key) || '';
      setValue(key, localStorage.getItem(key));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);

  useEffect(() => {
    console.log('isDirty');
    const watchedForm = watch();
    const { isDirty } = formState;
    for (const prop in watchedForm) {
      if (isDirty) {
        // next line is for eslint error purpose: no-prototype-builtins
        if (Object.prototype.hasOwnProperty.call(watchedForm, prop)) {
          localStorage.setItem(prop, watchedForm[prop]);
        }
      }
    }
  });

  return (
    <Form onSubmit={undefined}>
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
    </Form>
  );
};

export default BasicTemplate;
