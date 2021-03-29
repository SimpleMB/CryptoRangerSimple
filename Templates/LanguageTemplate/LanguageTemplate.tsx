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
        fieldId="chosenLanguage"
        fieldName="chosenLanguage"
        label="Choose language of review:"
        type="small"
        value={storageLanguage.chosenLanguage}
      />
      <FormSmallInput
        register={register}
        fieldId="transactionId"
        fieldName="transactionId"
        label="Transaction ID - TxID"
        value={storageLanguage.transactionId}
      />
    </Form>
  );
};

export default LanguageTemplate;
