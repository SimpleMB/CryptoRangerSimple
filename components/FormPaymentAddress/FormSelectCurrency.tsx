import { Input } from '../../types';
import styles from './FormSelectCurrency.module.scss';

type RefReturn =
  | string
  | ((instance: HTMLSelectElement | null) => void)
  | React.RefObject<HTMLSelectElement>
  | null
  | undefined;

/* eslint-disable @typescript-eslint/indent */
type InputProps = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> &
  Input & {
    label: string;
    register: ({ required }: { required?: boolean }) => RefReturn;
  };
/* eslint-enable @typescript-eslint/indent */

const FormSelectCurrency: React.FC<InputProps> = ({
  fieldId,
  fieldName,
  label,
  value,
  register,
  required,
}) => {
  return (
    <div className={styles.select}>
      <label className={styles.selectLabel} htmlFor={fieldId}>
        {label}{' '}
        {required ? (
          <span className={styles.selectLabelSpan}>Required</span>
        ) : null}
      </label>
      <select
        id={fieldName}
        className={styles.selectField}
        name={fieldName}
        ref={register({ required })}
        defaultValue={value}
        required={required}
      >
        <option value="BTC">BTC</option>
        <option value="ETH">ETH</option>
      </select>
    </div>
  );
};

export default FormSelectCurrency;
