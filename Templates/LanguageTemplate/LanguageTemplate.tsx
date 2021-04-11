import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormLangInput from '../../components/FormLangInput/FormLangInput';
import FormSelectCurrency from '../../components/FormPaymentAddress/FormSelectCurrency';
import FormSmallInput from '../../components/FormSmallInput/FormSmallInput';

interface LanguageProps {
  chosenLanguage: string;
  chosenCurrency: string;
  transactionId: string;
}

const LanguageTemplate = () => {
  const { register, watch } = useForm();

  const storageLanguage: LanguageProps = {
    chosenLanguage: '',
    chosenCurrency: 'BTC',
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
      <FormSelectCurrency
        register={register}
        fieldId="paymentAddress"
        fieldName="paymentAddress"
        label="Choose currency:"
        value={storageLanguage.chosenCurrency}
      />
      <FormSmallInput
        register={register}
        fieldId="transactionId"
        fieldName="transactionId"
        label="Transaction ID - TxID"
        type="small"
        value={storageLanguage.transactionId}
      />
    </Form>
  );
};

export default LanguageTemplate;

// TODO: Use select list for language input
