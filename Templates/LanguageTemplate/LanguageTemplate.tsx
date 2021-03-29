import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormLangInput from '../../components/FormLangInput/FormLangInput';
import FormSmallInput from '../../components/FormSmallInput/FormSmallInput';

interface LanguageProps {
  chosenLanguage: string;
  transactionId: string;
}

const LanguageTemplate = () => {
  const { register, watch } = useForm();

  const storageLanguage: LanguageProps = {
    chosenLanguage: '',
    transactionId: '',
  };

  useEffect(() => {
    Object.keys(storageLanguage).forEach((key) => {
      storageLanguage[key] = localStorage.getItem(key) || '';
      console.log(key);
    });
    console.log(storageLanguage);
  });

  return (
    <Form onSubmit={undefined}>
      <FormLangInput
        register={register}
        fieldId="importandFeatures"
        fieldName="importandFeatures"
        label="What are the most importand things in your project that your future customer NEED to know?"
        type="small"
        value={storageLanguage.chosenLanguage}
      />
      <FormSmallInput
        register={register}
        fieldId="futurePromotions"
        fieldName="futurePromotions"
        label="Future promotions / sales / air drops?"
        value={storageLanguage.transactionId}
      />
    </Form>
  );
};

export default LanguageTemplate;
