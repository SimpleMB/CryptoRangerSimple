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
    teamNumber: '',
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
        fieldId="importandFeatures"
        fieldName="importandFeatures"
        label="What are the most importand things in your project that your future customer NEED to know?"
        type="small"
        value={storageExampleUse.teamNumber}
      />
      <FormBigInput
        register={register}
        fieldId="differenceCompetitor"
        fieldName="differenceCompetitor"
        label="What's the difference between your project and closest competitor?"
        type="big"
        value={storageExampleUse.teamExperience}
        rows={6}
      />
      <FormBigInput
        register={register}
        fieldId="futurePromotions"
        fieldName="futurePromotions"
        label="Future promotions / sales / air drops?"
        type="big"
        value={storageExampleUse.aboutOwner}
        rows={6}
      />
    </Form>
  );
};

export default TeamTemplate;
