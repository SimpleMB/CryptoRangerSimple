import { useEffect, useState } from 'react';
import { CurrencyAddress } from '../../types';
import styles from './FormPaymentAddress.module.scss';

interface PaymentProps {
  currency: string;
}

const FormPaymentAddress: React.FC<PaymentProps> = ({ currency }) => {
  console.log('currency:', currency);
  const [buttonText, setButtonText] = useState<string>(
    `Click to copy ${currency} address`
  );
  const [isCopied, setIsCopied] = useState<boolean>(false);

  useEffect(() => {
    setButtonText(`Click to copy ${currency} address`);
    setIsCopied(false);
  }, [currency]);

  const copyAddressToClipboard = () => {
    navigator.clipboard.writeText(CurrencyAddress[currency]).then(
      () => {
        setButtonText(`${currency} address copied!`);
        setIsCopied(true);
      },
      () => setButtonText('Error! Copy address manually :(')
    );
  };

  return (
    <div className={styles.paymentField}>
      <p className={styles.paymentLabel}>{`${currency} payment address:`}</p>
      <p className={styles.paymentAddress}>{CurrencyAddress[currency]}</p>
      <button
        className={[
          styles.btnCopy,
          isCopied ? styles.btnActive : undefined,
        ].join(' ')}
        type="button"
        onClick={copyAddressToClipboard}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default FormPaymentAddress;

// TODO: check if local storage will work with this component without gettein props
