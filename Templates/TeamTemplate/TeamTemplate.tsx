import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormBigInput from '../../components/FormBigInput/FormBigInput';
import FormSmallInput from '../../components/FormSmallInput/FormSmallInput';

interface TeamProps {
  teamNumber: string;
  teamExperience: string;
  aboutOwner: string;
}

const TeamTemplate = () => {
  const { register, watch } = useForm();

  const storageExampleUse: TeamProps = {
    teamNumber: '1000',
    teamExperience: '',
    aboutOwner: '',
  };

  useEffect(() => {
    Object.keys(storageExampleUse).forEach((key) => {
      storageExampleUse[key] = localStorage.getItem(key) || '';
      console.log(key);
    });
    console.log(storageExampleUse);
  });

  return (
    <Form onSubmit={undefined}>
      <FormSmallInput
        register={register}
        fieldId="teamNumber"
        fieldName="teamNumber"
        label="How many people work on this project?"
        type="small"
        value={storageExampleUse.teamNumber}
      />
      <FormBigInput
        register={register}
        fieldId="teamExperience"
        fieldName="teamExperience"
        label="Team experience?"
        type="big"
        value={storageExampleUse.teamExperience}
        rows={6}
      />
      <FormBigInput
        register={register}
        fieldId="aboutOwner"
        fieldName="aboutOwner"
        label="About owner of the project?"
        type="big"
        value={storageExampleUse.aboutOwner}
        rows={6}
      />
    </Form>
  );
};

export default TeamTemplate;
