import { FC, FormEventHandler } from 'react';
import styles from './Form.module.scss';

interface FormProps {
  onSubmit: FormEventHandler;
}

const Form: FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={styles.mainForm}>
      {children}
    </form>
  );
};

export default Form;
