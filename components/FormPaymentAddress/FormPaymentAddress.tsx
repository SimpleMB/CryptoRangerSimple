import styles from './FormPaymentAddress.module.scss';

interface PaymentProps {
  btcAddress?: string;
  ethAddress?: string;
  ltcAddress?: string;
}

const FormPaymentAddress: React.FC<PaymentProps> = ({
  btcAddress,
  ethAddress,
  ltcAddress,
}) => {
  return (
    <div className={styles.paymentField}>
      <p className={styles.paymentLabel}>BTC payment address:</p>
      <p className={styles.paymentAddress}>{btcAddress}</p>
      <button className={styles.btnCopy} type="button">
        Click to copy BTC address
      </button>
    </div>
  );
};

export default FormPaymentAddress;
