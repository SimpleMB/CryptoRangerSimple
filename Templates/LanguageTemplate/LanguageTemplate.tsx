import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormBigInput from '../../components/FormBigInput/FormBigInput';

interface LanguageProps {
  importandFeatures: string;
  differenceCompetitor: string;
  futurePromotions: string;
}

const LanguageTemplate = () => {
  const { register, watch } = useForm();

  const storageTeam: LanguageProps = {
    importandFeatures: '',
    differenceCompetitor: '',
    futurePromotions: '',
  };

  useEffect(() => {
    Object.keys(storageTeam).forEach((key) => {
      storageTeam[key] = localStorage.getItem(key) || '';
      console.log(key);
    });
    console.log(storageTeam);
  });

  return (
    <Form onSubmit={undefined}>
      <FormBigInput
        register={register}
        fieldId="importandFeatures"
        fieldName="importandFeatures"
        label="What are the most importand things in your project that your future customer NEED to know?"
        type="big"
        value={storageTeam.importandFeatures}
        rows={6}
      />
      <FormBigInput
        register={register}
        fieldId="differenceCompetitor"
        fieldName="differenceCompetitor"
        label="What's the difference between your project and closest competitor?"
        type="big"
        value={storageTeam.differenceCompetitor}
        rows={6}
      />
      <FormBigInput
        register={register}
        fieldId="futurePromotions"
        fieldName="futurePromotions"
        label="Future promotions / sales / air drops?"
        type="big"
        value={storageTeam.futurePromotions}
        rows={6}
      />
    </Form>
  );
};

export default LanguageTemplate;
