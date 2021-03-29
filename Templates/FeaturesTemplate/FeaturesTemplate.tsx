import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormBigInput from '../../components/FormBigInput/FormBigInput';

interface FeaturesProps {
  importandFeatures: string;
  differenceCompetitor: string;
  futurePromotions: string;
}

const FeaturesTemplate = () => {
  const { register, watch } = useForm();

  const storageFeatures: FeaturesProps = {
    importandFeatures: '',
    differenceCompetitor: '',
    futurePromotions: '',
  };

  useEffect(() => {
    Object.keys(storageFeatures).forEach((key) => {
      storageFeatures[key] = localStorage.getItem(key) || '';
      console.log(key);
    });
    console.log(storageFeatures);
  });

  return (
    <Form onSubmit={undefined}>
      <FormBigInput
        register={register}
        fieldId="importandFeatures"
        fieldName="importandFeatures"
        label="What are the most importand things in your project that your future customer NEED to know?"
        type="big"
        value={storageFeatures.importandFeatures}
        rows={6}
      />
      <FormBigInput
        register={register}
        fieldId="differenceCompetitor"
        fieldName="differenceCompetitor"
        label="What's the difference between your project and closest competitor?"
        type="big"
        value={storageFeatures.differenceCompetitor}
        rows={6}
      />
      <FormBigInput
        register={register}
        fieldId="futurePromotions"
        fieldName="futurePromotions"
        label="Future promotions / sales / air drops?"
        type="big"
        value={storageFeatures.futurePromotions}
        rows={6}
      />
    </Form>
  );
};

export default FeaturesTemplate;
