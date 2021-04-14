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
  return <div className={styles.paymentAddress}>Enter</div>;
};

export default FormPaymentAddress;
