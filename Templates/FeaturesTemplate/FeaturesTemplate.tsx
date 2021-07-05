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
  const storageFeatures: FeaturesProps = {
    importandFeatures: '',
    differenceCompetitor: '',
    futurePromotions: '',
  };

  const { register, watch, formState, setValue } = useForm();

  useEffect(() => {
    Object.keys(storageFeatures).forEach((key) => {
      storageFeatures[key] = localStorage.getItem(key) || '';
      setValue(key, localStorage.getItem(key));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);

  useEffect(() => {
    console.log('isDirty');
    const watchedForm = watch();
    const { isDirty } = formState;
    if (isDirty) {
      for (const prop in watchedForm) {
        // next line is for eslint error purpose: no-prototype-builtins
        if (Object.prototype.hasOwnProperty.call(watchedForm, prop)) {
          localStorage.setItem(prop, watchedForm[prop]);
        }
      }
    }
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
