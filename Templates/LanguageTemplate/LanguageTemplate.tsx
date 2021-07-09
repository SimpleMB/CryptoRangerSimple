import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormLangInput from '../../components/FormLangInput/FormLangInput';
import FormPaymentAddress from '../../components/FormPaymentAddress/FormPaymentAddress';
import FormSelectCurrency from '../../components/FormSelectCurrency/FormSelectCurrency';
import FormSmallInput from '../../components/FormSmallInput/FormSmallInput';
import { Currency, Languages } from '../../types';

interface LanguageProps {
  chosenLanguage: string;
  chosenCurrency: string;
  transactionId: string;
}

const LanguageTemplate = () => {
  const [currency, setCurrency] = useState<string>('BTCooo');

  const storageLanguage: LanguageProps = {
    chosenLanguage: Languages.english,
    chosenCurrency: Currency.BTC,
    transactionId: '',
  };

  const { register, watch, formState, setValue } = useForm();

  useEffect(() => {
    Object.keys(storageLanguage).forEach((key) => {
      storageLanguage[key] = localStorage.getItem(key) || '';
      setValue(key, localStorage.getItem(key));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValue]);

  useEffect(() => {
    const watchedForm = watch();
    setCurrency(watchedForm.chosenCurrency);
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
        fieldId="chosenCurrency"
        fieldName="chosenCurrency"
        label="Choose currency:"
        value={storageLanguage.chosenCurrency}
      />
      <FormPaymentAddress currency={currency} />
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
// TODO proper payment address display
