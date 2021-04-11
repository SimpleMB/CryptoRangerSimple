import { Input } from '../../types';
import styles from './FormPaymentAddress.module.scss';

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

const FormPaymentAddress: React.FC<InputProps> = ({
  fieldId,
  fieldName,
  label,
  value,
  register,
  required,
}) => {
  return (
    <div className={styles.smallInputDate}>
      <label className={styles.smallInputLabel} htmlFor={fieldId}>
        {label}{' '}
        {required ? (
          <span className={styles.smallInputLabelSpan}>Required</span>
        ) : null}
      </label>
      <select
        id={fieldName}
        className={styles.smallInputField}
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

export default FormPaymentAddress;
