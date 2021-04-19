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
  function generateCopyPayment() {
    if (btcAddress)
      return {
        label: 'BTC payment address:',
        address: btcAddress,
        buttonText: 'Click to copy BTC address',
      };
    if (ethAddress)
      return {
        label: 'ETH payment address:',
        address: ethAddress,
        buttonText: 'Click to copy ETH address',
      };

    if (ltcAddress)
      return {
        label: 'LTC payment address:',
        address: ltcAddress,
        buttonText: 'Click to copy LTC address',
      };

    return {
      label: 'Please choose currency above',
      address: 'Please choose currency above',
      buttonText: 'Please choose currency above',
    };
  }
  const { label, address, buttonText } = generateCopyPayment();

  return (
    <div className={styles.paymentField}>
      <p className={styles.paymentLabel}>{label}</p>
      <p className={styles.paymentAddress}>{address}</p>
      <button className={styles.btnCopy} type="button">
        {buttonText}
      </button>
    </div>
  );
};

export default FormPaymentAddress;
