import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from '../../components/Form/Form';
import FormBigInput from '../../components/FormBigInput/FormBigInput';

interface ExapleOfUseProps {
  projectAbout: string;
  simpleExample: string;
  mainProducts: string;
}

const ExampleTemplate = () => {
  const storageExampleUse: ExapleOfUseProps = {
    projectAbout: '',
    simpleExample: '',
    mainProducts: '',
  };

  const { register, watch, formState, setValue } = useForm();

  useEffect(() => {
    Object.keys(storageExampleUse).forEach((key) => {
      storageExampleUse[key] = localStorage.getItem(key) || '';
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
        fieldId="projectAbout"
        fieldName="projectAbout"
        label="What is your project about? Explain it as simply as you can:"
        type="big"
        value={storageExampleUse.projectAbout}
        rows={6}
      />
      <FormBigInput
        register={register}
        fieldId="simpleExample"
        fieldName="simpleExample"
        label="Provide simple example of use:"
        type="big"
        value={storageExampleUse.simpleExample}
        rows={6}
      />
      <FormBigInput
        register={register}
        fieldId="mainProducts"
        fieldName="mainProducts"
        label="Main products:"
        type="big"
        value={storageExampleUse.mainProducts}
        rows={6}
      />
    </Form>
  );
};

export default ExampleTemplate;
